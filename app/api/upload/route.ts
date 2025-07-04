import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic"; // ensure it's treated as dynamic

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";

  // Check content type for multipart form
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json(
      { error: "Unsupported Content-Type" },
      { status: 400 },
    );
  }

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const FormData = require("form-data");
  const pinataData = new FormData();
  pinataData.append("file", buffer, file.name);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      pinataData,
      {
        maxBodyLength: Infinity,
        headers: {
          ...pinataData.getHeaders(),
          pinata_api_key: process.env.PINATA_API_KEY!,
          pinata_secret_api_key: process.env.PINATA_API_SECRET!,
        },
      },
    );

    return NextResponse.json(res.data);
  } catch (err: any) {
    console.error("Pinata upload error:", err.response?.data || err.message);
    return NextResponse.json(
      { error: "Failed to upload to Pinata" },
      { status: 500 },
    );
  }
}

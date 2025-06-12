import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";
import formidable from "formidable";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const formData = await parseFormData(req);

  if (!formData) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const { buffer, filename } = formData;

  const pinataResponse = await uploadToPinata(buffer, filename);

  return NextResponse.json(pinataResponse);
}

async function parseFormData(
  req: NextRequest,
): Promise<{ buffer: Buffer; filename: string } | null> {
  const form = formidable({ multiples: false });

  const contentType = req.headers.get("content-type") || "";
  const reqBody = Readable.from(Buffer.from(await req.arrayBuffer()));

  return new Promise((resolve, reject) => {
    form.parse(reqBody as any, (err, fields, files: formidable.Files) => {
      if (err) return reject(err);

      const fileField = files.image;
      let file: formidable.File | undefined;

      if (Array.isArray(fileField)) {
        file = fileField[0];
      } else {
        file = fileField;
      }

      if (!file) return resolve(null);

      const fs = require("fs");
      const buffer = fs.readFileSync(file.filepath);
      resolve({ buffer, filename: file.originalFilename || "image.png" });
    });
  });
}

async function uploadToPinata(buffer: Buffer, filename: string) {
  const FormData = require("form-data");
  const data = new FormData();
  data.append("file", buffer, filename);

  const res = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data,
    {
      maxBodyLength: Infinity,
      headers: {
        ...data.getHeaders(),
        pinata_api_key: process.env.PINATA_API_KEY!,
        pinata_secret_api_key: process.env.PINATA_API_SECRET!,
      },
    },
  );

  return res.data;
}

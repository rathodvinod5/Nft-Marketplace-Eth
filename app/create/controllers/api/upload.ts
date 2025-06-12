import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false, // Required for formidable to work
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("handler function");
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const data = await new Promise<{ buffer: Buffer; filename: string }>(
    (resolve, reject) => {
      const form = formidable({ multiples: false });

      form.parse(req, async (err, fields, files) => {
        if (err) return reject(err);

        const file = files.image;
        if (!file || Array.isArray(file)) return reject("No image file found");

        const fileData = await fileToBuffer(file as formidable.File);
        resolve({
          buffer: fileData,
          filename: (file as formidable.File).originalFilename || "file.png",
        });
      });
    },
  );

  // Use the 'form-data' package for Node.js
  const FormData = require("form-data");
  const formData = new FormData();
  const { Readable } = require("stream");
  const bufferStream = Readable.from(data.buffer);
  formData.append("file", bufferStream, data.filename);

  const pinataResponse = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    formData,
    {
      maxBodyLength: Infinity,
      headers: {
        ...formData.getHeaders?.(), // required for form-data boundary
        pinata_api_key: process.env.PINATA_API_KEY!,
        pinata_secret_api_key: process.env.PINATA_API_SECRET!,
      },
    },
  );

  return res.status(200).json(pinataResponse.data);
}

async function fileToBuffer(file: formidable.File): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  const stream = file.filepath
    ? require("fs").createReadStream(file.filepath)
    : null;

  if (!stream) throw new Error("Could not read file stream");

  for await (const chunk of stream) {
    chunks.push(chunk as Uint8Array);
  }

  return Buffer.concat(chunks);
}

import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

const PINATA_API_KEY = process.env.PINATA_API_KEY!;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET!;

// import { uploadMetadataToIPFS, CollectionMetadata } from "./pinata";

export interface CollectionMetadata {
  name: string;
  description: string;
  image: string; // IPFS URI
  external_url?: string;
}

export async function uploadMetadataToIPFS(
  metadata: CollectionMetadata,
): Promise<string> {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  const response = await axios.post(url, metadata, {
    headers: {
      "Content-Type": "application/json",
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_API_SECRET,
    },
  });

  return `ipfs://${response.data.IpfsHash}`;
}

// Accepts a Buffer and filename
export async function uploadImageToIPFS(
  buffer: Buffer,
  filename: string,
): Promise<string> {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const data = new FormData();
  data.append("file", buffer, { filename });

  const response = await axios.post(url, data, {
    maxBodyLength: Infinity,
    headers: {
      ...data.getHeaders(),
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_API_SECRET,
    },
  });

  return `ipfs://${response.data.IpfsHash}`;
}

export async function uploadCollectionData(formData: FormData) {
  try {
    // Get the image file from FormData (Node.js form-data)
    const imageField = (formData as any)._streams?.find?.(
      (stream: any) =>
        typeof stream === "object" && stream.hasOwnProperty("path"),
    );
    if (!imageField) {
      throw new Error("Image file not found in form data");
    }

    // Read the file as Buffer
    const filePath = imageField.path;
    const buffer = fs.readFileSync(filePath);

    // Use the original filename or a fallback
    const filename = path.basename(filePath) || "image.png";

    const imageCID = await uploadImageToIPFS(buffer, filename);

    const metadata: CollectionMetadata = {
      name: "Cool Apes",
      description: "A collection of cool apes",
      image: imageCID,
      external_url: "https://coolapes.xyz",
    };

    const metadataCID = await uploadMetadataToIPFS(metadata);
    console.log("✅ Metadata IPFS URI:", metadataCID);
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
}

"use server";
import axios from "axios";
import FormData from "form-data";
import path from "path";
import { getBufferFromFormData } from "./handleBuffer";
import { CollectionMetadataType } from "@/smart-contracts/Types";

const PINATA_API_KEY = process.env.PINATA_API_KEY!;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET!;

export async function uploadMetadataToIPFS<T>(payload: T): Promise<string> {
  console.log("uploadMetadataToIPFS: ", payload);
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  const response = await axios.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_API_SECRET,
    },
  });

  return `ipfs://${response.data.IpfsHash}`;
}

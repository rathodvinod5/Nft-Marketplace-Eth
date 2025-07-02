import { Abi } from "viem";

export type ReturnObjectType = {
  address: string;
  abi: Abi;
  functionName: string;
  args?: any[] | undefined;
};

export type CollectionMetadata = {
  name: string;
  description: string;
  image: string; // IPFS URI
  external_url?: string;
};

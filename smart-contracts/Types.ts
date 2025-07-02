import { Abi } from "viem";

export type ReturnObjectType = {
  address: string;
  abi: Abi;
  functionName: string;
  args?: any[] | undefined;
};

export type CollectionMetadataType = {
  name: string;
  description: string;
  image: `ipfs://${string}`; // IPFS URI
  external_url?: string;
};

export type AttributeTypes = {
  trait_type: string;
  value: string;
};

export type NftMetadataType = {
  name: string;
  description: string;
  image: `ipfs://${string}`;
  attributes?: AttributeTypes[];
};

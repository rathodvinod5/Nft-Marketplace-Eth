import { Abi } from "viem";

export type AddressType = `0x${string}`; // Ethereum address
export type IpfsUriType = `ipfs://${string}`; // IPFS URI

export type ReturnObjectType = {
  address: string;
  abi: Abi;
  functionName: string;
  args?: any[] | undefined;
};

export type CollectionObjectType = {
  contractAddress: AddressType; // Ethereum address
  creator: AddressType; // Ethereum address
  metadataURI: IpfsUriType; // ifsc url
  name: string;
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
  collectionAddress: AddressType; // Ethereum address
  description: string;
  image: `ipfs://${string}`;
  attributes?: AttributeTypes[];
};

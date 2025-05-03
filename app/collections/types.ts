export type AddressType = `0x${string}`;

export type CollectionType = {
  name: string;
  symbol: string;
  description: string;
  image: string;
  contractAddress: AddressType;
  creator: AddressType;
};

export type ListingType = {
  collectionAddress: AddressType;
  tokenId: number;
  seller: AddressType;
  price: number;
  indexForAllListings: number;
};

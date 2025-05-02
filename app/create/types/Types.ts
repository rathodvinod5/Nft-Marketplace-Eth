export type ChainTypes =
  | "ethereum"
  | "solana"
  | "tezos"
  | "flow"
  | "polygon"
  | "bsc";

export type ChaiObjectType = {
  key: ChainTypes;
  value: string;
};

export type ErrorTypeObject = {
  [key: string]: string | null;
};

export const ErrorObjectMain: ErrorTypeObject = {
  collectionName: null,
  collectionSymbol: null,
  nftName: null,
  nftDesc: null,
  nftSupply: null,
  nftPrice: null,
  nftImage: null,
  uriLink: null,
  empty: null,
};

export type ErrorType = {
  errorFor: keyof typeof ErrorObjectMain;
};

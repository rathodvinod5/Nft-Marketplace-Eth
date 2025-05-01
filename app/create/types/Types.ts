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

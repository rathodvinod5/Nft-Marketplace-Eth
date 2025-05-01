import { Abi } from "viem";

export type ReturnObjectType = {
  address: string;
  abi: Abi;
  functionName: string;
  args?: any[] | undefined;
};

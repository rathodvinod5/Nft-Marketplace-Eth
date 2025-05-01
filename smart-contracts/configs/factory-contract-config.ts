// factoryReadConfig.ts

import { Abi } from "viem";
import factoryAbi from "../abi/factory-contract-abi.json"; // update path as needed
import CONTRACT_ADDRESS from "../contract-address";
import { ReturnObjectType } from "../Types";

const FACTORY_CONTRACT_FUNCTIONS = {
  createNewCollection: (name: string, symbol: string): ReturnObjectType => ({
    address: CONTRACT_ADDRESS.factoryContractAddress,
    abi: factoryAbi.abi as Abi,
    functionName: "createNewCollection",
    args: [name, symbol],
  }),
  mintNFT: (
    collectinAddress: `0x${string}`,
    tokenURI: `ifps://${string}`,
  ): ReturnObjectType => ({
    address: CONTRACT_ADDRESS.factoryContractAddress,
    abi: factoryAbi.abi as Abi,
    functionName: "mintNFT",
    args: [collectinAddress, tokenURI],
  }),
  getCollectionsByOwner: (owner: `0x${string}`): ReturnObjectType => ({
    address: CONTRACT_ADDRESS.factoryContractAddress,
    abi: factoryAbi.abi as Abi,
    functionName: "getUserCollections",
    args: [owner],
  }),
  getAllCollections: (): ReturnObjectType => ({
    address: CONTRACT_ADDRESS.factoryContractAddress,
    abi: factoryAbi.abi as Abi,
    functionName: "userCollections",
    args: [],
  }),
  getAllTokensOfCollection: (id: number): ReturnObjectType => ({
    address: CONTRACT_ADDRESS.factoryContractAddress,
    abi: factoryAbi.abi as Abi,
    functionName: "getCollectionTokens",
    args: [id],
  }),
};

export default FACTORY_CONTRACT_FUNCTIONS;

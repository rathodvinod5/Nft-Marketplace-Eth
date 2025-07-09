import { useReadContract } from "wagmi";
import FACTORY_ABI from "../../../smart-contracts/abi/factory-contract-abi.json";
import CONTRACT_ADDRESS from "@/smart-contracts/contract-address";
import { Abi } from "viem";

const useCollectionTokens = (token: string) => {
  const factoryContractAddress =
    CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`;

  const {
    data: collectionTokens,
    isLoading: isCollectionTokensLoading,
    isPending: collectionTokensPending,
    error: collectionTokensError,
  } = useReadContract({
    address: factoryContractAddress,
    abi: FACTORY_ABI.abi as Abi,
    functionName: "getCollectionTokens",
    args: [token],
  });

  return {
    collectionTokens,
    isCollectionTokensLoading,
    collectionTokensPending,
    collectionTokensError,
  };
};

export default useCollectionTokens;

import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";
import { getPublicClient } from "wagmi/actions";
import { Abi } from "viem";
import CONTRACT_ADDRESS from "../contract-address";
import FACTORY_ABI from "../abi/factory-contract-abi.json";
import { useEffect, useState } from "react";
import { useGetUserCollectionController } from "./helperhooks";

const useFactoryContract = () => {
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);
  const { address: wallet } = useAccount();

  const factoryContractAddress =
    CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`;

  const {
    data: collections,
    error: collectionsError,
    isPending: collectionsPending,
  } = useReadContract({
    address: CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`,
    abi: FACTORY_ABI.abi as Abi,
    functionName: "getAllCollections",
  });

  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  useEffect(() => {
    console.log("write status: ", isLoading, isSuccess, isError, txHash);
  }, [isLoading, isSuccess, isError, txHash]);

  const { data: hash, writeContract } = useWriteContract();
  const createNewCollection = (name: string, symbol: string) => {
    console.log("createNewCollection: ", name, symbol);

    const hash = writeContract({
      address: factoryContractAddress,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "createNewCollection",
      args: [name, symbol],
    });
    console.log("hash: ", hash);

    // const { isLoading: isConfirming, isSuccess: isConfirmed } =
    //   useWaitForTransactionReceipt({
    //     hash,
    //   });
  };

  const mintNewNFT = (collectionAddress: string, tokenURI: string) => {
    // create new NFT's
    console.log("mintNewNFT");
    const hash = writeContract({
      address: factoryContractAddress,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "mintNFT",
      args: [collectionAddress, tokenURI],
    });

    console.log("hash: ", hash);
  };

  const getUserCollections = async (userAddress: string) => {
    // get all the collections of the user
    console.log("getUserCollections");
    // const {} = useGetUserCollectionController(userAddress);
    return null;
  };

  const useNFTReadController = (collectionAddress: string) => {
    const {
      data: collections,
      isLoading,
      isError,
    } = useReadContract({
      address: factoryContractAddress,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "getCollectionTokens",
      args: [collectionAddress],
    });

    return { collections, isLoading, isError };
  };

  const getCollectionTokens = (collectionAddress: string) => {
    const { collections, isLoading, isError } =
      useNFTReadController(collectionAddress);
    console.log("collections: ", collections);
  };

  const createCollection = useWriteContract();

  return {
    allCollections: collections as any[],
    // collectionsError: collectionsError as string,
    isPending: collectionsPending as boolean,
    createNewCollection: createNewCollection,
    mintNewNFT: mintNewNFT,
    getUserCollections: getUserCollections,
    getCollectionTokens: getCollectionTokens,
  };
};

export default useFactoryContract;

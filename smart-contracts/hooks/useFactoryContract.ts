import {
  type BaseError,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
  useSendTransaction,
} from "wagmi";
import { getPublicClient } from "wagmi/actions";
import { Abi } from "viem";
import CONTRACT_ADDRESS from "../contract-address";
import FACTORY_ABI from "../abi/factory-contract-abi.json";
import { useEffect, useState } from "react";
import { useGetUserCollectionController } from "./helperhooks";

const useFactoryContract = () => {
  const [txHash, setTxHash] = useState<any | undefined>(undefined);
  const { address: wallet } = useAccount();

  const factoryContractAddress =
    CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`;

  const {
    data: collections,
    isLoading: isCollectionsLoading,
    isPending: collectionsPending,
    error: collectionsError,
  } = useReadContract({
    address: factoryContractAddress,
    abi: FACTORY_ABI.abi as Abi,
    functionName: "getAllCollections",
  });
  console.log(
    "collections: ",
    isCollectionsLoading,
    collections,
    collectionsPending,
    collectionsError,
  );

  const {
    data: writeHash,
    isPending: isWritePending,
    isError: writeError,
    writeContract,
  } = useWriteContract();
  console.log("write status: ", isWritePending, writeHash, writeError);

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    // isError: receiptError,
  } = useWaitForTransactionReceipt({
    // hash: txHash,
    hash: writeHash,
  });
  console.log("receipt status: ", isConfirming, isConfirmed);

  useEffect(() => {
    console.log(
      "useEffect: ",
      collections,
      collectionsPending,
      collectionsError,
    );
  }, [collections, collectionsPending, collectionsError]);

  const createNewCollection = async (
    name: string,
    symbol: string,
    nftMetadata: string,
  ) => {
    console.log("createNewCollection: ", name, symbol, nftMetadata);

    const hash = await writeContract({
      address: factoryContractAddress,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "createNewCollection",
      args: [name, symbol],
    });
    // console.log("hash: ", hash);
    // setTxHash(hash);
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

  // const useNFTReadController = (collectionAddress: string) => {
  //   const {
  //     data: collections,
  //     isLoading,
  //     isError,
  //   } = useReadContract({
  //     address: factoryContractAddress,
  //     abi: FACTORY_ABI.abi as Abi,
  //     functionName: "getCollectionTokens",
  //     args: [collectionAddress],
  //   });

  //   return { collections, isLoading, isError };
  // };

  const getCollectionTokens = (collectionAddress: string) => {
    // const { collections, isLoading, isError } =
    //   useNFTReadController(collectionAddress);
    // console.log("collections: ", collections);
  };

  const createCollection = useWriteContract();
  console.log("useFactoryContract: ", collections);
  return {
    isCollectionsLoading: isCollectionsLoading as boolean,
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

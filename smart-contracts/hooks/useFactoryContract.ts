import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { Abi } from "viem";
import CONTRACT_ADDRESS from "../contract-address";
import FACTORY_ABI from "../abi/factory-contract-abi.json";

const useFactoryContract = () => {
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

  const createNewCollection = (name: string, symbol: string) => {
    const { data: hash, writeContract } = useWriteContract();

    writeContract({
      address: factoryContractAddress,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "createNewCollection",
      args: [name, symbol],
    });

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
      useWaitForTransactionReceipt({
        hash,
      });
  };

  const mintNewNFT = (collectionAddress: string, tokenURI: string) => {
    // create new NFT's
    const {
      data: mintData,
      error: mintError,
      isPending: mintPending,
    } = useReadContract({
      address: CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "mintNFT",
      args: [collectionAddress, tokenURI],
    });
  };

  const getUserCollections = (userAddress: string) => {
    // get all the collections of the usr
    const {
      data: mintData,
      error: mintError,
      isPending: mintPending,
    } = useReadContract({
      address: CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "getUserCollections",
      args: [userAddress],
    });

    return {
      mintData,
      mintError,
      mintPending,
    };
  };

  const getCollectionTokens = (collectinAddress: string) => {
    // get all the tokens belonging to a particular collction
    const {
      data: mintData,
      error: mintError,
      isPending: mintPending,
    } = useReadContract({
      address: CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`,
      abi: FACTORY_ABI.abi as Abi,
      functionName: "getCollectionTokens",
      args: [collectinAddress],
    });
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

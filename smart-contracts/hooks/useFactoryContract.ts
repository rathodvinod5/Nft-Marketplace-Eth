import React, { createContext, useContext, ReactNode } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { Abi } from 'viem';
import FACTORY_CONTRACT_FUNCTIONS from "../configs/factory-contract-config";
import { ReturnObjectType } from '../Types';
import CONTRACT_ADDRESS from '../contract-address';

const ABI: any[] = [];

const useFactoyrContract = (name: string, symbol: string) => {
  const object: ReturnObjectType = FACTORY_CONTRACT_FUNCTIONS.getAllCollections();

//   const { data: collections } = useReadContract(FACTORY_CONTRACT_FUNCTIONS.getAllCollections());

  const { 
    data: collections, 
    error: collectionsError,
    isPending: collectionsPending
  } = useReadContract({
    address: CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`,
    abi: ABI as Abi,
    functionName: 'getAllCollections'
  });

  const { data, error: createCollectionError, isPending: createCollectionPending } = useReadContract({
    address: CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`,
    abi: ABI as Abi,
    functionName: 'createNewCollection',
    args:  [name, symbol]
  });
  
  const createCollection = useWriteContract();

  return {
    allCollections: collections,
    collectionsError: collectionsError,
    isPending: collectionsPending,
  }
}

export default useFactoyrContract;
import React, { createContext, useContext, ReactNode } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { Abi } from 'viem';
import CONTRACT_ADDRESS from '@/smart-contracts/contract-address';
import useFactoryContract from '@/smart-contracts/hooks/useFactoryContract';


type NFTContextType = {
  wallet: `0x${string}` | undefined,
  allCollections: any[],
  collectionsError: string,
  isPending: boolean,
  createNewCollection: (arg0: string, arg1: string) => void,
  mintNewNFT: (arg0: string, arg1: number) => void,
  getUserCollections: (userAddress: string) => void,
  getCollectionTokens: (collectionAddress: string) => void,
};

const yourContractAbi: any[] = [];

const NFTContext = createContext<NFTContextType | undefined>(undefined);

type NFTProviderProps = {
  children: ReactNode;
};

export const NFTProvider = ({ children }: NFTProviderProps) => {
  const { address: wallet } = useAccount();

  const dataObject = useFactoryContract();

  return (
    <NFTContext.Provider value={{ wallet: wallet, ...dataObject }}>
      {children}
    </NFTContext.Provider>
  );
};

// Custom hook for easy context access
export const useNFTContext = () => {
  const context = useContext(NFTContext);
  if (!context) {
    throw new Error('useNFTContext must be used within an NFTProvider');
  }
  return context;
};

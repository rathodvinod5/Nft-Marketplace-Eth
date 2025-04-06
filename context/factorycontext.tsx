import React, { createContext, useContext, ReactNode } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { Abi } from 'viem';
import CONTRACT_ADDRESS from '@/smart-contracts/contract-address';

type Collection = {
  id: number;
  name: string;
  symbol: string;
  owner: string;
};

type NFTContextType = {
  collections: Collection[] | undefined;
  createCollection: ReturnType<typeof useWriteContract>;
};

const yourContractAbi: any[] = [];

const NFTContext = createContext<NFTContextType | undefined>(undefined);

type NFTProviderProps = {
  children: ReactNode;
};

export const NFTProvider = ({ children }: NFTProviderProps) => {
  const { address } = useAccount();

  const { data: collections } = useReadContract({
    address: CONTRACT_ADDRESS.factoryContractAddress as `0x${string}`,
    abi: [] as Abi,
    functionName: 'userCollections',
    args: []
  });

  const createCollection = useWriteContract();

  return (
    <NFTContext.Provider 
      value={{ 
        collections: collections as Collection[], 
        createCollection 
      }}
    >
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

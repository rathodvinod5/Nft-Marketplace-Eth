"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { useAccount } from "wagmi";
import useFactoryContract from "@/smart-contracts/hooks/useFactoryContract";
import useMarketplaceContract from "@/smart-contracts/hooks/useMarketpaceContract";

type NFTContextType = {
  wallet: `0x${string}` | undefined;

  // factory contract
  allCollections: any[];
  isCollectionsLoading: boolean;
  // collectionsError: string,
  isPending: boolean;
  createNewCollection: (
    collectionName: string,
    collectionSymbol: string,
  ) => void;
  mintNewNFT: (collectionAddress: string, tokenURI: string) => void;
  getUserCollections: (userAddress: string) => void;
  getCollectionTokens: (collectionAddress: string) => void;

  // marketplace contract
  allListings: any | [];
  listNewNFT: (
    collectionAddress: string,
    tokenId: number,
    price: string,
  ) => void;
  buyNFT: (collectionAddress: string, tokenId: number) => void;
  removeListing: (collectionAddress: string, tokenId: number) => void;
  updateListingPrice: (
    collectionAddress: string,
    tokenId: number,
    newPrice: string,
  ) => void;
};

const NFTContext = createContext<NFTContextType | undefined>(undefined);

type NFTProviderProps = {
  children: ReactNode;
};

export const NFTProvider = ({ children }: NFTProviderProps) => {
  const { address: wallet } = useAccount();

  const factory = useFactoryContract();
  const marketplace = useMarketplaceContract();
  console.log("factory: ", factory);
  return (
    <NFTContext.Provider value={{ wallet: wallet, ...factory, ...marketplace }}>
      {children}
    </NFTContext.Provider>
  );
};

// Custom hook for easy context access
export const useNFTContext = () => {
  const context = useContext(NFTContext);
  if (!context) {
    throw new Error("useNFTContext must be used within an NFTProvider");
  }
  return context;
};

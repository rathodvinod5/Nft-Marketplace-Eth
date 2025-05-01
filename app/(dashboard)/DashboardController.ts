"use client";

import { useState } from "react";
import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { CategoryType, NFTCardType } from "./Types";
import { allNFTs } from "./Data";

const useDashboardController = () => {
  const [allNfts, setAllNfts] = useState<NFTCardType[]>(allNFTs);
  const [filteredNfts, setFilteredNfts] = useState<NFTCardType[] | null>(null);
  const [currentCategory, setCurrentCategory] = useState<CategoryType | null>(
    null,
  );

  const { connectors, connect } = useConnect();
  const { address } = useAccount();

  const handleOnClickChip = (currItem: CategoryType) => {
    setCurrentCategory(currItem);
    onFilterCategory(currItem as string);
  };

  const onFilterCategory = (category: string) => {
    const filtered = allNfts.filter((nft) =>
      nft.category.toLowerCase().includes(category.toLowerCase()),
    );
    if (!filtered.length) {
      setFilteredNfts(null);
    }

    setFilteredNfts(filtered);
  };

  const onClickConnectWallet = async () => {
    // console.log("connectors: ", connectors);
    await connect({ connector: injected() });
  };

  return {
    allNfts: allNfts,
    filteredNfts: filteredNfts,
    currentCategory: currentCategory,
    handleOnClickChip: handleOnClickChip,
    onFilterCategory: onFilterCategory,
    onClickConnectWallet: onClickConnectWallet,
  };
};

export default useDashboardController;

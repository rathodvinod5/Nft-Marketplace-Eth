import { useState } from "react";
import { allNFTs } from "../(dashboard)/Data";
import { NFTCardType } from "../(dashboard)/Types";

const useCollectionsController = () => {
  const [allNfts, setAllNfts] = useState<NFTCardType[]>(allNFTs);
  const [filteredNfts, setFilteredNfts] = useState<NFTCardType[] | null>(null);

  const onChageText = (text: string) => {
    // console.log("text", text);
    if(!text) {
      // console.log("No text");
      setFilteredNfts(null);
      return;
    }
    const filtered = allNfts.filter((nft) => nft.title.toLowerCase().includes(text.toLowerCase()));
    // console.log("filtered", filtered);
    if(!filtered.length) {
      setFilteredNfts(null);
    }

    setFilteredNfts(filtered);
  }

  return {
    allNfts: allNfts,
    filteredNfts: filteredNfts,
    onChangeText: onChageText
  };
}

export default useCollectionsController;
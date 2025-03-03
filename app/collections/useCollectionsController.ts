import { useState } from "react";
import { allNFTs } from "../(dashboard)/Data";
import { NFTCardType } from "../(dashboard)/Types";
import { ListDisplayTypeEnum } from "./constants";

const useCollectionsController = () => {
  const [allNfts, setAllNfts] = useState<NFTCardType[]>(allNFTs);
  const [filteredNfts, setFilteredNfts] = useState<NFTCardType[] | null>(null);
  const [listType, setListType] = useState<ListDisplayTypeEnum>(ListDisplayTypeEnum.TILE);

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

  const onFilterCategory = (category: string) => {
    const filtered = allNfts.filter((nft) => nft.category.toLowerCase().includes(category.toLowerCase()));
    if(!filtered.length) {
      setFilteredNfts(null);
    }
  
    setFilteredNfts(filtered);
  };

  const onFilterListDisplayType = (type: ListDisplayTypeEnum) => {
    setListType(type);
  };

  return {
    allNfts: allNfts,
    filteredNfts: filteredNfts,
    listType: listType,
    onChangeText: onChageText,
    onFilterCategory: onFilterCategory,
    onFilterListDisplayType: onFilterListDisplayType
  };
}

export default useCollectionsController;
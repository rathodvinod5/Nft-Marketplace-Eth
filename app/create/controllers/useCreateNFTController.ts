import { useState } from "react";
import { TraitType } from "../view/NFTInfoTypes";
import { useNFTContext } from "@/context/factorycontext";

const useCreateNFTController = () => {
  const [newNFTCollection, setNewNFTCollection] = useState("");
  const [newNFTCollectionSymbol, setNewNFTCollectionSymbol] = useState("");
  const [chainSelected, setChainSelected] = useState("");
  const [nftName, setNFTName] = useState("");
  const [nftDescription, setNFTDescription] = useState("");
  const [nftSupply, setNFTSupply] = useState("");
  const [nftPrice, setNFTPrice] = useState("");
  const [nftImage, setNFTImage] = useState("");
  const [nftURILink, setNFTURILink] = useState("");
  const [currentNFTCollection, setCurrentNFTCollection] = useState("");
  const [nftCategory, setNFTCategory] = useState("");
  const [trait, setTrait] = useState("");
  const [traitValue, setTraitValue] = useState("");
  const [nftTraits, setNFTtraits] = useState<TraitType[]>([]);

  const { createNewCollection, mintNewNFT } = useNFTContext();

  // const onChangeNFTCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewNFTCollection(e.target.value);
  // }

  const onChangeNFTCollection = (newValue: string) => {
    console.log(newValue);
    setNewNFTCollection(newValue);
  };

  // const onChangeNFTCollectionSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewNFTCollectionSymbol(e.target.value.toUpperCase());
  // }

  const onChangeNFTCollectionSymbol = (newValue: string) => {
    console.log(newValue);
    setNewNFTCollectionSymbol(newValue);
  };

  // const onChangeNFTName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   setNFTName(e.target.value);
  // }

  const onChangeNFTName = (newValue: string) => {
    console.log("onChangeNFTName: ", newValue);
    setNFTName(newValue);
  };

  const onChangeNFTDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNFTDescription(e.target.value);
  };

  // const onChangeNFTSupply = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNFTSupply(e.target.value);
  // }

  const onChangeNFTSupply = (newValue: string) => {
    setNFTSupply(newValue);
  };

  const onChangeNFTPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNFTPrice(e.target.value);
  };

  // const onChangeNFTURILink = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   setNFTURILink(e.target.value);
  // }

  const onChangeNFTURILink = (newValue: string) => {
    setNFTURILink(newValue);
  };

  const addNewTrait = () => {
    setTrait("");
    setTraitValue("");
    setNFTtraits([...nftTraits, { trait: "", value: "" }]);
  };

  const onEditTraitValue = (
    newValue: string,
    type: "trait" | "value",
    index: number,
  ) => {
    console.log("onEditTraitValue: ", index, type, newValue);
    if (newValue && type) {
      console.log("inside");
      const existingTraits = [...nftTraits];
      const traitItem = existingTraits[index];
      if (type === "trait") {
        existingTraits[index] = { ...existingTraits[index], trait: newValue };
      } else {
        existingTraits[index] = { ...existingTraits[index], value: newValue };
      }
      setNFTtraits(existingTraits);
    }
  };

  const onRemoveTraitItem = (index: number) => {
    const newNFTTraits = nftTraits.filter((item, idx) => idx !== index);
    console.log("index: ", index, nftTraits.length, newNFTTraits.length);
    // const newNFTTraits = nftTraits.splice(index, 1);
    setNFTtraits(newNFTTraits);
  };

  const validateAllData = () => {};

  const createNewNft = (collectionAddress: string, tokenId: number) => {
    mintNewNFT(collectionAddress, tokenId);
  };

  const createCollection = () => {
    createNewCollection(newNFTCollection, newNFTCollectionSymbol);
  };

  return {
    newNFTCollection,
    onChangeNFTCollection,
    newNFTCollectionSymbol,
    onChangeNFTCollectionSymbol,
    nftName,
    onChangeNFTName,
    nftDescription,
    onChangeNFTDescription,
    nftSupply,
    onChangeNFTSupply,
    nftPrice,
    onChangeNFTPrice,
    nftURILink,
    onChangeNFTURILink,
    trait,
    traitValue,
    nftTraits,
    addNewTrait,
    onEditTraitValue,
    onRemoveTraitItem,
    createNewNft,
    createCollection,
  };
};

export default useCreateNFTController;

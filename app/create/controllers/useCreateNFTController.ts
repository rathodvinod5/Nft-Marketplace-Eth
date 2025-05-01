import { useEffect, useState } from "react";
import { TraitType } from "../view/NFTInfoTypes";
import { useNFTContext } from "@/context/factorycontext";

export type ErrorTypeObject = {
  [key: string]: string | null;
};

const ErrorObjectMain: ErrorTypeObject = {
  collection: null,
  nftName: null,
  nftDesc: null,
  nftSupply: null,
  nftPrice: null,
  nftImage: null,
  uriLink: null,
  empty: null,
};

export type ErrorType = {
  errorFor: keyof typeof ErrorObjectMain;
};

const useCreateNFTController = () => {
  const [newNFTCollection, setNewNFTCollection] = useState("");
  const [newNFTCollectionSymbol, setNewNFTCollectionSymbol] = useState("");
  const [collectionSelected, setCollectionSelected] = useState<string | null>(
    null,
  );
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
  const [userCollections, setUserCollections] = useState<any | null>(null);
  const [errorObject, setErrorObject] = useState<ErrorTypeObject>(
    structuredClone(ErrorObjectMain),
  );

  const { createNewCollection, mintNewNFT, getUserCollections, wallet } =
    useNFTContext();

  // should run only one time to get the list collection user has created
  useEffect(() => {
    const collections = getUserCollections(`0x${wallet}`);
    console.log("user collections: ", collections);
    setUserCollections(userCollections);
  }, []);

  const onChangeNFTCollection = (newValue: string) => {
    console.log(newValue);
    setNewNFTCollection(newValue);
  };

  const onChangeNFTCollectionSymbol = (newValue: string) => {
    console.log(newValue);
    setNewNFTCollectionSymbol(newValue);
  };

  const onChangeNFTName = (newValue: string) => {
    console.log("onChangeNFTName: ", newValue);
    setNFTName(newValue);
  };

  const onChangeNFTDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNFTDescription(e.target.value);
  };

  const onChangeNFTSupply = (newValue: string) => {
    setNFTSupply(newValue);
  };

  const onChangeNFTPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNFTPrice(e.target.value);
  };

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

  const resetErrors = () => {
    setErrorObject(structuredClone(ErrorObjectMain));
  };

  const validateAndGetAllDataForMintingNewNFT = () => {
    const isAllFine = true;
    if (!collectionSelected) {
      errorObject.collection = "Please select a collection from list!";
    }
    if (!nftName) {
      errorObject.nftName = "Please enter a name for NFT!";
    }
    return isAllFine;
  };

  const createAndGetURILinkFromIPFS = () => {
    return "https://pinata/123";
  };

  const createNewNft = (collectionAddress: string, tokenURI: string) => {
    resetErrors();
    if (validateAndGetAllDataForMintingNewNFT()) {
      mintNewNFT(collectionAddress, tokenURI);
    }
  };

  const createCollection = () => {
    resetErrors();
    createNewCollection(newNFTCollection, newNFTCollectionSymbol);
  };

  const onChangeCollectionSelected = (currentCollectionSelected: string) => {
    setCollectionSelected(currentCollectionSelected);
  };

  return {
    userCollections,
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
    onChangeCollectionSelected,
    errorObject,
  };
};

export default useCreateNFTController;

import { ChangeEvent, useEffect, useState } from "react";
import { TraitType } from "../view/NFTInfoTypes";
import { useNFTContext } from "@/context/factorycontext";
import { ErrorObjectMain, ErrorTypeObject } from "../types/Types";
import {
  uploadCollectionData,
  // uploadImageToIPFS,
  uploadMetadataToIPFS,
} from "./uploadCollections";
import { CollectionMetadata } from "@/smart-contracts/Types";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

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
  const [nftImage, setNFTImage] = useState<File | null>(null);
  // const [file, setFile] = useState<File | null>(null);
  const [nftURILink, setNFTURILink] = useState("");
  const [currentNFTCollection, setCurrentNFTCollection] = useState("");
  const [nftCategory, setNFTCategory] = useState("");
  const [trait, setTrait] = useState("");
  const [traitValue, setTraitValue] = useState("");
  const [nftTraits, setNFTtraits] = useState<TraitType[]>([]);
  const [userCollections, setUserCollections] = useState<any | null>(null);
  const [errorObject, setErrorObject] = useState<ErrorTypeObject | null>(null);

  const { createNewCollection, mintNewNFT, getUserCollections, wallet } =
    useNFTContext();

  const {
    data: writeHash,
    isPending: isWritePending,
    isError: writeError,
    writeContract,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError: isReceiptError,
  } = useWaitForTransactionReceipt({
    // hash: txHash,
    hash: writeHash,
  });

  useEffect(() => {
    console.log(
      "write status: ",
      writeHash,
      isWritePending,
      writeError,
      isConfirming,
      isConfirmed,
      isReceiptError,
    );
  }, [
    writeHash,
    isWritePending,
    writeError,
    isConfirming,
    isConfirmed,
    isReceiptError,
  ]);

  // should run only one time to get the list collection user has created
  useEffect(() => {
    const collections = getUserCollections(`0x${wallet}`);
    setUserCollections(userCollections);
  }, []);

  const onChangeNFTCollection = (newValue: string) => {
    setNewNFTCollection(newValue);
  };

  const onChangeNFTCollectionSymbol = (newValue: string) => {
    setNewNFTCollectionSymbol(newValue);
  };

  const onChangeNFTName = (newValue: string) => {
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
    setErrorObject(null);
  };

  const validateAndGetAllDataForMintingNewNFT = () => {
    let isAllFine = true;
    let errorObject = structuredClone(ErrorObjectMain);

    if (!collectionSelected) {
      isAllFine = false;
      errorObject.collectionName = "Please select a collection from list!";
    }
    if (!nftName) {
      isAllFine = false;
      errorObject.nftName = "Please enter a name for NFT!";
    }
    if (!nftURILink) {
      isAllFine = false;
      errorObject.nftName = "Please enter URI link!";
    }
    if (!isAllFine) {
      setErrorObject(errorObject);
    }
    return isAllFine;
  };

  const validateAndGetAllDataForCreatingNewCollection = () => {
    let isAllFine = true;
    let errorObject = structuredClone(ErrorObjectMain);

    if (!newNFTCollection) {
      isAllFine = false;
      errorObject.collection = "Please enter a name for collection!";
    }
    if (!newNFTCollectionSymbol) {
      isAllFine = false;
      errorObject.nftName = "Please enter a symbol for collection!";
    }
    if (!isAllFine) {
      setErrorObject(errorObject);
    }

    return isAllFine;
  };

  const createNewNft = async () => {
    console.log("createNewNft");
    const collectionAddress = collectionSelected;
    resetErrors();
    const status = validateAndGetAllDataForMintingNewNFT();
    if (!status || !nftImage) return;

    // Use Node.js form-data package for uploadCollectionData
    // const FormDataNode = (await import("form-data")).default;
    // const formData = new FormDataNode();
    // if (nftImage) {
    //   formData.append("image", nftImage, nftImage.name);
    // }
    // const nftMetadata = await uploadCollectionData(formData, {
    //   name: nftName,
    //   description: nftDescription,
    //   external_url: "https://coolapes.xyz",
    // });
    // console.log("status: ", status, nftMetadata);

    // if (status) {
    //   const tokenURI = "";
    //   mintNewNFT(collectionAddress!, tokenURI);
    // }
  };

  const createCollection = async () => {
    console.log("createCollection");
    resetErrors();
    const status = validateAndGetAllDataForCreatingNewCollection();
    if (!status || !nftImage) return;

    try {
      // const formData = new FormData();
      // formData.append("image", nftImage as any, (nftImage as File).name);

      if (!nftImage) return;

      const formData = new window.FormData();
      formData.append("file", nftImage);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("IPFS hash:", data.IpfsHash);

      const metadata: CollectionMetadata = {
        name: newNFTCollection,
        description: nftDescription,
        image: data.IpfsHash,
        external_url: "https://coolapes.xyz",
      };
      const metadataCID =
        await uploadMetadataToIPFS<CollectionMetadata>(metadata);
      console.log("✅ Metadata IPFS URI:", metadataCID);

      // callthe uploadCollectionData function
    } catch (error) {
      console.error("Error calling uploadCollectionData: ", error);
    }
  };

  const onChangeCollectionSelected = (currentCollectionSelected: string) => {
    setCollectionSelected(currentCollectionSelected);
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNFTImage(e.target.files[0]);
    }
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
    handleChangeImage,
  };
};

export default useCreateNFTController;

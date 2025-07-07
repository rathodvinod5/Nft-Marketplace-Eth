import { ChangeEvent, useEffect, useId, useState } from "react";
import { useReadContract } from "wagmi";
import { TraitType } from "../view/NFTInfoTypes";
import { useNFTContext } from "@/context/factorycontext";
import {
  ErrorObjectMain,
  ErrorTypeObject,
  PinataMetaDataType,
} from "../types/Types";
import { uploadMetadataJSONFileToIPFS } from "./uploadCollections";
import {
  CollectionMetadataType,
  CollectionObjectType,
  NftMetadataType,
} from "@/smart-contracts/Types";
import FACTORY_ABI from "../../../smart-contracts/abi/factory-contract-abi.json";
import { Abi } from "viem";

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentNFTCollection, setCurrentNFTCollection] = useState("");
  const [nftCategory, setNFTCategory] = useState("");
  const [trait, setTrait] = useState("");
  const [traitValue, setTraitValue] = useState("");
  const [nftTraits, setNFTtraits] = useState<TraitType[]>([]);
  // const [userCollections, setUserCollections] = useState<any | null>(null);
  const [errorObject, setErrorObject] = useState<ErrorTypeObject | null>(null);

  const { createNewCollection, mintNewNFT, getUserCollections, wallet } =
    useNFTContext();

  const {
    isWritePending,
    writeHash,
    isWriteError,
    isConfirming,
    isConfirmed,
    isReceiptError,
    factoryContractAddress,
  } = useNFTContext();

  useEffect(() => {
    console.log(
      "write status: ",
      writeHash,
      isWritePending,
      isWriteError,
      isConfirming,
      isConfirmed,
      isReceiptError,
    );
    if ((isConfirmed && isProcessing) || isWriteError) {
      setIsProcessing(false);
    }

    if (isConfirmed) resetState();
  }, [
    writeHash,
    isWritePending,
    isWriteError,
    isConfirming,
    isConfirmed,
    isReceiptError,
  ]);

  const {
    data: userCollections,
    isLoading: isUserCollectionsLoading,
    isPending: isUserCollectionsPending,
    error: isUserCollectionsError,
  } = useReadContract({
    address: factoryContractAddress,
    abi: FACTORY_ABI.abi as Abi,
    functionName: "getUserCollections",
    args: [wallet],
  });

  // should run only one time to get the list collection user has created
  // useEffect(() => {
  //   const collections = getUserCollections(`0x${wallet}`);
  //   setUserCollections(userCollections);
  // }, []);

  const resetState = () => {
    setNewNFTCollection("");
    setNewNFTCollectionSymbol("");
    setNFTImage(null);
  };

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

  const generatedNumbers = new Set<number>();
  function getUniqueRandom(): number | null {
    if (generatedNumbers.size >= 1001) {
      // All numbers exhausted
      return null;
    }

    let num: number;
    do {
      num = Math.floor(Math.random() * 1001); // 0 to 1000 inclusive
    } while (generatedNumbers.has(num));

    generatedNumbers.add(num);
    return num;
  }

  const addNewTrait = () => {
    if (nftTraits.at(-1)?.trait !== "" && nftTraits.at(-1)?.value !== "") {
      const newId = getUniqueRandom();
      if (newId !== null) {
        setTrait("");
        setTraitValue("");
        setNFTtraits([...nftTraits, { id: newId, trait: "", value: "" }]);
      }
    }
  };

  const onEditTraitValue = (
    newValue: string,
    type: "trait" | "value",
    index: number,
  ) => {
    if (newValue && type) {
      const existingTraits = [...nftTraits];
      if (type === "trait") {
        existingTraits[index] = { ...existingTraits[index], trait: newValue };
      } else {
        existingTraits[index] = { ...existingTraits[index], value: newValue };
      }
      setNFTtraits(existingTraits);
    }
  };

  const onRemoveTraitItem = (index: number) => {
    setNFTtraits((prevItems) => prevItems.filter((item) => item.id !== index));
  };

  const resetErrors = () => {
    setErrorObject(null);
  };

  const validateAndGetAllDataForMintingNewNFT = () => {
    let isAllFine = true;
    let errorObject = structuredClone(ErrorObjectMain);

    if (!wallet) {
      isAllFine = false;
      errorObject.wallet = "Please connect your wallet!";
    }

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

    if (!wallet) {
      isAllFine = false;
      errorObject.wallet = "Please connect your wallet!";
    }

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

  const createNewNft = () => {
    setIsProcessing(true);
    console.log("createNewNft");
    const collectionAddress = collectionSelected;
    resetErrors();
    const status = validateAndGetAllDataForMintingNewNFT();
    if (!status || !nftImage) {
      setIsProcessing(false);
      return;
    }

    return uploadFileAndJSONToIPFS("nft");
  };

  const createCollection = () => {
    setIsProcessing(true);
    console.log("createCollection");
    resetErrors();
    const status = validateAndGetAllDataForCreatingNewCollection();
    if (!status || !nftImage) {
      setIsProcessing(false);
      return;
    }

    return uploadFileAndJSONToIPFS("collection");
  };

  const uploadFileAndJSONToIPFS = async (
    isCollectionOrNft: "collection" | "nft",
  ) => {
    try {
      const formData = new FormData();
      formData.append("file", nftImage!);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("IPFS hash:", data, data.IpfsHash);

      const metadata: PinataMetaDataType<
        CollectionMetadataType | NftMetadataType
      > = {
        pinataMetadata: {
          name: `${newNFTCollection}.json`,
        },
        pinataContent:
          isCollectionOrNft === "collection"
            ? {
                name: newNFTCollection,
                description: nftDescription,
                image: `ipfs://${data.IpfsHash}`,
                external_url: "https://coolapes.xyz",
              }
            : {
                name: nftName,
                description: nftDescription,
                image: `ipfs://${data.IpfsHash}`,
                external_url: "https://coolapes.xyz",
                attributes: nftTraits.map((traitItem) => ({
                  trait_type: traitItem.trait,
                  value: traitItem.value,
                })),
              },
      };
      const metadataURI =
        await uploadMetadataJSONFileToIPFS<
          PinataMetaDataType<CollectionMetadataType>
        >(metadata);

      console.log("✅ Metadata IPFS URI:", metadataURI);

      createNewCollection(
        newNFTCollection,
        newNFTCollectionSymbol,
        metadataURI,
      );
    } catch (error) {
      console.error("Error calling uploadCollectionData: ", error);
      setIsProcessing(false);
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

  const setIsProcessingToFalse = () => {
    setIsProcessing(false);
  };

  return {
    isProcessing,
    userCollections: userCollections as CollectionObjectType[] | null,
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
    setIsProcessingToFalse,
  };
};

export default useCreateNFTController;

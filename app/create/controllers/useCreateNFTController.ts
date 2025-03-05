import { useState } from "react";
import { TraitType } from "../view/NFTInfoTypes";

const useCreateNFTController = () => {
  const [newNFTCollection, setNewNFTCollection] = useState('');
  const [newNFTCollectionSymbol, setNewNFTCollectionSymbol] = useState('');
  const [chainSelected, setChainSelected] = useState('');
  const [nftName, setNFTName] = useState('');
  const [nftDescription, setNFTDescription] = useState('');
  const [nftSupply, setNFTSupply] = useState('');
  const [nftPrice, setNFTPrice] = useState('');
  const [nftImage, setNFTImage] = useState('');
  const [nftURILink, setNFTURILink] = useState('');
  const [currentNFTCollection, setCurrentNFTCollection] = useState('');
  const [nftCategory, setNFTCategory] = useState('');
  const [trait, setTrait] = useState('');
  const [traitValue, setTraitValue] = useState('');
  const [nftTraits, setNFTtraits] = useState<TraitType[]>([]);

  const onChangeNFTCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNFTCollection(e.target.value);
  }

  const onChangeNFTCollectionSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNFTCollectionSymbol(e.target.value.toUpperCase());
  }

  const onChangeNFTName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNFTName(e.target.value);
  }

  const onChangeNFTDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNFTDescription(e.target.value);
  };

  const onChangeNFTSupply = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNFTSupply(e.target.value);
  }

  const onChangeNFTPrice = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setNFTPrice(e.target.value);
  }

  const onChangeNFTURILink = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNFTURILink(e.target.value);
  }

  const addNewTrait = () => {
    setNFTtraits([...nftTraits, { trait: "", value: "" }]);
  }

  const onEditTraitValue = (newValue: string, type: "trait" | "value", index: number) => { 
    if(newValue && type && index) { 
      const existingTraits = nftTraits;
      const traitItem = existingTraits[index];
      if(type === 'trait') {
        traitItem.trait = trait;
      } else {
        traitItem.value = traitValue;
      }
      existingTraits[index] = traitItem;
      setNFTtraits(nftTraits);
    }
  }

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
    // nftCollection,
    // setNFTCollection,
    // nftCategory,
    // setNFTCategory,
    trait,
    traitValue,
    nftTraits,
    addNewTrait,
    onEditTraitValue,
  }
}

export default useCreateNFTController;
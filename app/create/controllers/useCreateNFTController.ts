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
    setNewNFTCollectionSymbol(e.target.value);
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
    if(trait && traitValue) { 
      const newFTtrait = { trait: trait, value: traitValue };
      setNFTtraits([...nftTraits, newFTtrait]);
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
  }
}

export default useCreateNFTController;
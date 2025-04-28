import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Abi } from 'viem';
import CONTRACT_ADDRESS from '../contract-address';
import MARKETPLACE_ABI from "../abi/marketplace-contract-abi.json";

const useMarketplaceContract = () => {
  const marketplaceContractAddress = CONTRACT_ADDRESS.marketplaceContractAddress as `0x${string}`;

  const { 
    data: listings, 
    error: listingsError,
    isPending: isListingsPending
  } = useReadContract({
    address: marketplaceContractAddress,
    abi: MARKETPLACE_ABI.abi as Abi,
    functionName: 'getAllListings'
  });

  const listNewNFT = (collectionAddress: string, tokenId: number, price: string) => {
    // list new NFT to the market
    const { data: hash, writeContract } = useWriteContract();

    writeContract({
      address: marketplaceContractAddress,
      abi: MARKETPLACE_ABI.abi as Abi,
      functionName: 'listNFT',
      args: [collectionAddress, tokenId, price]
    });

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })
  }

  const buyNFT = (collectionAddress: string, tokenId: number) => {
    // buy NFT which are listed
    const { data: hash, writeContract } = useWriteContract();

    writeContract({
      address: marketplaceContractAddress,
      abi: MARKETPLACE_ABI.abi as Abi,
      functionName: 'buyNFT',
      args: [collectionAddress, tokenId]
    });

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })
  }

  const removeListing = (collectionAddress: string, tokenId: number) => {
    // remove the nft from listings
    const { data: hash, writeContract } = useWriteContract();

    writeContract({
      address: marketplaceContractAddress,
      abi: MARKETPLACE_ABI.abi as Abi,
      functionName: 'removeListing',
      args: [collectionAddress, tokenId]
    });

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });
  }

  const updateListingPrice = (collectionAddress: string, tokenId: number, newPrice: string) => {
    // update the listing price
    const { data: hash, writeContract } = useWriteContract();

    writeContract({
      address: marketplaceContractAddress,
      abi: MARKETPLACE_ABI.abi as Abi,
      functionName: 'updateListingPrice',
      args: [collectionAddress, tokenId, newPrice]
    });

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });
  }

  return {
    allListings: listings,
    listNewNFT: listNewNFT,
    buyNFT: buyNFT,
    removeListing: removeListing,
    updateListingPrice: updateListingPrice,
  }
}

export default useMarketplaceContract;
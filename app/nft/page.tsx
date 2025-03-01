"use client";

import { useRouter } from "next/navigation";
import NFTCard from "@/components/ui/nft-card";
import SearchAndFilterHeader from "@/components/ui/Header/SearchAndFilterHeader";
import useNftController from "./useNftController";

const AllNftPage = () => {
  const router = useRouter();
  
  const handleSeeDetail = (nftId: number) => {
    router.push(`/nft/${nftId}`);
  };

  const { allNfts, filteredNfts, onChangeText } = useNftController();
  const items = !filteredNfts?.length ? allNfts : filteredNfts ;

  return ( 
    <div className="w-full h-full px-8 py-6 bg-custom-primaryBackground">
      <h1 className="mb-2 text-page-title text-white">All NFT</h1>

      <div className="mt-12 mb-10">
        <SearchAndFilterHeader onChangeText={onChangeText} itemLen={items.length} />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {items.map((nft) => (
          <NFTCard
            key={`all-nft-${nft.id}`}
            nft={nft}
            handleSeeDetail={handleSeeDetail}
          />
        ))}
      </div>

     {!items.length && (
        <div className="w-full flex flex-row justify-center">
          <button style={{ borderRadius: '8px' }}
            className="px-6 py-2 my-14 bg-custom-purple text-white w-fit self-center">
            Load More
          </button>
        </div>
     )}
    </div>
  );
}

export default AllNftPage;
"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import NFTCard from "@/components/ui/nft-card";
import { allNFTs, collectionsList } from "@/app/(dashboard)/Data";
import { CollectionsObjectType } from "@/app/(dashboard)/Types";
import SearchAndFilterHeader from "@/components/ui/Header/SearchAndFilterHeader";


const AllNftFromCollectionPage = ({ params }: { params: { name: string } }) => {
  const router = useRouter();
  const { name } = params;
  
  const handleSeeDetail = (nftId: number) => {
    router.push(`/nft/${nftId}`);
  };

  const collection: CollectionsObjectType | undefined = collectionsList.find((collection) => collection.title === name);

  return ( 
    <div className="w-full h-full px-8 py-6 bg-custom-primaryBackground">
      {/* <h1 className="mb-2 text-page-title text-white">All NFT</h1> */}

      <div className="flex flex-row gap-2 w-full">
        <div className="w-1/3">
          {collection && (
            <Image 
              src={collection?.baseImage} 
              alt={collection?.title+"-image"}
              width={420} 
              height={280} 
            //   apsectRatio={3/2}
              className="aspect-auto"
              style={{ borderRadius: '12px' }} 
            />
          )}
        </div>
        <div className="w-2/3 text-gray-400 flex flex-col justify-between">
          <div className="pt-4">
            <p className="mb-2 text-page-title text-white">{name}</p>
            <p>Created by 
                <span className="font-semibold text-gray-300 ml-2">
                {collection?.creator}
                </span>
            </p>
            <p>Address 
                <span className="font-semibold text-gray-300 ml-2">
                {collection?.address}
                </span>
            </p>
          </div>

          <div className="mt-10 flex flex-row justify-start items-center gap-12">
            {collection?.demogs.map((demog) => (
                <div key={demog.title} className="flex flex-col gap-1">
                  <p className="text-gray-400">{demog.title}</p>
                  <p className="text-gray-300 font-semibold">{demog.value}</p>
                </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SearchAndFilterHeader />
      </div>

      <div className="mt-14 grid grid-cols-4 gap-8">
        {allNFTs.map((nft) => (
          <NFTCard
            key={`all-nft-${nft.id}`}
            nft={nft}
            handleSeeDetail={handleSeeDetail}
          />
        ))}
      </div>

      <div className="w-full flex flex-row justify-center">
        <button style={{ borderRadius: '8px' }}
            className="px-6 py-2 my-14 bg-custom-purple text-white w-fit self-center">
            Load More
        </button>
      </div>
    </div>
  );
}

export default AllNftFromCollectionPage;
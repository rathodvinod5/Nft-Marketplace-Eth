"use client";

import { collectionsList } from "../(dashboard)/Data";
import NFTCollectionCard from "@/components/ui/NFTCollectionCard/NFTCollectionCard";

const AllCollectionsPage = () => {
  return ( 
    <div className="w-full h-full px-8 py-6 bg-custom-primaryBackground">
      <h1 className="text-page-title text-white">All Collections</h1>

      <div className="grid grid-cols-4 gap-8 mt-12">
        {collectionsList.map((collection, index) => {
          return <NFTCollectionCard key={'collection-item-'+index} collection={collection} />
        })}
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

export default AllCollectionsPage;
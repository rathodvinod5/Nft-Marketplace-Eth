"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import NFTCard from "@/components/ui/nft-card";
import { collectionsList } from "@/app/(dashboard)/Data";
import { CollectionsObjectType } from "@/app/(dashboard)/Types";
import SearchAndFilterHeader from "@/components/ui/Header/SearchAndFilterHeader";
import useCollectionsController from "../useCollectionsController";
import { ListDisplayTypeEnum } from "../constants";
import useCollectionTokens from "../controllers/useCollectionTokens";
import { FiLoader } from "react-icons/fi";

const AllNftFromCollectionPage = () => {
  const router = useRouter();
  const params = useParams();
  const name = params?.name;

  const handleSeeDetail = (nftId: number) => {
    router.push(`/nft/${nftId}`);
  };

  const collection: CollectionsObjectType | undefined = collectionsList.find(
    (collection) => collection.title === name,
  );

  const {
    allNfts,
    filteredNfts,
    onChangeText,
    onFilterCategory,
    listType,
    onFilterListDisplayType,
  } = useCollectionsController();

  const items = !filteredNfts?.length ? allNfts : filteredNfts;

  const collectionAddress = "0x8965DA9A5fe6f8eAB2267Adf4f5B47116E9874F5";
  const {
    collectionTokens,
    isCollectionTokensLoading,
    collectionTokensPending,
    collectionTokensError,
  } = useCollectionTokens(collectionAddress);

  console.log(
    "collectionTokens",
    isCollectionTokensLoading,
    collectionTokensPending,
    collectionTokensError,
    Array.isArray(collectionTokens) &&
      collectionTokens.map((item: any) => String(item)),
  );

  return (
    <div className="w-full h-full px-8 py-6 bg-custom-primaryBackground">
      <div className="flex flex-row gap-2 w-full mt-12">
        <div className="w-1/3">
          {collection && (
            <Image
              src={collection?.baseImage}
              alt={collection?.title + "-image"}
              width={420}
              height={280}
              //   apsectRatio={3/2}
              className="aspect-auto"
              style={{ borderRadius: "12px" }}
            />
          )}
        </div>
        <div className="w-2/3 text-gray-400 flex flex-col justify-between">
          <div className="pt-4">
            <p className="mb-2 text-page-title text-white">{name}</p>
            <p>
              Created by
              <span className="font-semibold text-gray-300 ml-2">
                {collection?.creator}
              </span>
            </p>
            <p>
              Address
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

      <div className="mt-20 mb-16">
        <SearchAndFilterHeader
          onChangeText={onChangeText}
          itemLen={items.length}
          onFilterCategory={onFilterCategory}
          listType={listType}
          onFilterListDisplayType={onFilterListDisplayType}
          optionArray={[
            "Football",
            "Cricket",
            "Tennis",
            "Badminton",
            "Sports",
            "Music",
            "Arts",
            "Others",
          ]}
        />
      </div>

      <p className="mb-8 text-xl font-semibold text-gray-200">
        NFT's from {name}
      </p>
      <Suspense fallback={<LoaderWithDiv />}>
        {listType === ListDisplayTypeEnum.LIST ? (
          <div className="flex flex-col gap-8">
            {items.map((nft) => (
              <NFTCard
                key={`all-nft-${nft.id}`}
                nft={nft}
                handleSeeDetail={handleSeeDetail}
              />
            ))}
          </div>
        ) : listType !== ListDisplayTypeEnum.ALL ? (
          <div
            className={`grid ${listType === ListDisplayTypeEnum.TILE ? "grid-cols-3" : "grid-cols-4"}  gap-8`}
          >
            {items.map((nft) => (
              <NFTCard
                key={`all-nft-${nft.id}`}
                nft={nft}
                handleSeeDetail={handleSeeDetail}
              />
            ))}
          </div>
        ) : null}
      </Suspense>

      <div className="w-full flex flex-row justify-center">
        <button
          style={{ borderRadius: "8px" }}
          className="px-6 py-2 my-14 bg-custom-purple text-white w-fit self-center"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllNftFromCollectionPage;

const LoaderWithDiv = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" />
    </div>
  );
};

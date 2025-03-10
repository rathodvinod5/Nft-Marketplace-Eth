"use client";

import { useState } from "react";
import { Bell, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import NFTCard from "@/components/ui/nft-card";
import { bestCreators, nftCategory, recentActivity, trendingNFTs } from "./(dashboard)/Data";
import Chip from "@/components/ui/Chip";
import useDashboardController from "./(dashboard)/DashboardController";
import ShortList from "@/components/ui/ShortList";
import CreatorItems from "@/components/ui/creator-item";
import CollectionsSection from "./(dashboard)/view/CollectionsSection";
import Link from "next/link";
import NFTCardAlt from "@/components/ui/NFTCardAlt/NFTCardAlt";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSeeDetail = (nftId: number) => {
    router.push(`/nft/${nftId}`);
  };

  const { allNfts, filteredNfts, onFilterCategory, currentCategory, handleOnClickChip } = useDashboardController();
  const items = !filteredNfts?.length ? allNfts : filteredNfts ;

  return (
    <div className="h-full p-8 bg-custom-primaryBackground">
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg bg-custom-secondaryBackground border border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-accent">
            <Bell className="w-5 h-5" color="white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent">
            <Settings className="w-5 h-5" color="white" />
          </button>
          <div className="w-10 h-10 rounded-full bg-accent" />
        </div>
      </div>

      <div className="flex flex-row items-end gap-2">
        <div className="w-full">
          <div className="mb-8 text-white">
            <h1 className="mb-2 text-page-title">Welcome back, Niven 👋</h1>
            <p className="text-gray-400">
              Unlocking the Digital Renaissance, Navigating the NFT Marketplace.
            </p>
          </div>

          <div 
            className="mb-4 bg-custom-secondaryBackground overflow-hidden p-6"
            style={{ borderRadius: '10px' }}
          >
            <div className="flex justify-between items-center mb-4 text-white">
              <h2 className="text-section-title">Trending For You 🔥</h2>
              {/* <Link href="/nft" className="text-card-sub-title text-primary hover:underline">
                <button 
                  className="text-card-sub-title text-primary hover:underline"
                  // onClick={() => router.push('/nft')}
                >
                  See all
                </button>
              </Link> */}
              <button 
                className="text-card-sub-title text-primary hover:underline"
                onClick={() => router.push('/nft')}
              >
                See all
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingNFTs.map((nft) => (
                <NFTCard
                  key={nft.id}
                  nft={nft}
                  handleSeeDetail={handleSeeDetail}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-6/12 h-fit p-4 flex flex-col gap-6">
          <div 
            className="h-1/2 bg-custom-secondaryBackground text-white p-4"
            style={{ borderRadius: "12px" }}
          >
            <p>Your Total Balance</p>
            <div className="h-[200px]" />
            <button
              onClick={() => {}}
              className="mt-2 px-4 py-2 w-full bg-custom-purple rounded-bl-xl rounded-tr-xl text-card-sub-title"
            >
              Top up Balance
            </button>
          </div>
          <div 
            className="h-1/2 bg-custom-secondaryBackground text-white p-4"
            style={{ borderRadius: "12px" }}
          >
            <div className="flex justify-between items-center mb-4 text-white">
              <h2 className="text-card-title">Recent activity 🔥</h2>
              <button className="text-card-sub-title text-primary hover:underline">
                See all
              </button>
            </div>
            {recentActivity.map(item => <ShortList item={item} key={"short-list"+item.id} />)}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-row items-start gap-4">
        <div className="w-full">
          <div className="flex flex-row gap-2">
            {nftCategory.map((item) => (
              <Chip 
                key={"chip-"+item.id}
                currentItem={currentCategory}
                item={item} 
                onClickChip={() => handleOnClickChip(item.tag)} 
                />
            ))}
          </div>
          <div 
            className="bg-custom-secondaryBackground p-4 mt-4"
            style={{ borderRadius: '12px' }}
          >
          </div>
        </div>
        {/* <div 
          className="w-7/12 h-fit bg-custom-secondaryBackground p-4"
          style={{ borderRadius: '12px' }}
        >
          <div className="flex justify-between items-center mb-4 text-white">
            <h2 className="text-card-title font-semibold">Best creator 🔥</h2>
            <button className="text-card-sub-title text-primary hover:underline">
              See all
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {bestCreators.map(item => <CreatorItems key={`creator-item-${item.id}`} item={item} />)}
          </div>
        </div> */}
      </div>

      <div className="mt-14 flex flex-row flex-wrap justify-around">
          {items.map((nft) => (
            <NFTCardAlt
              key={`all-nft-${nft.id}`}
              nft={nft}
              handleSeeDetail={handleSeeDetail}
            />
          ))}
        </div>

      <CollectionsSection />
    </div>
  );
}

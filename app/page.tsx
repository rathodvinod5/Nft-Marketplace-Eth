"use client";

import { useState } from "react";
import { Bell, Settings } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NFTCard from "@/components/ui/nft-card";
import { NFTCardType } from "./(dashboard)/Types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const trendingNFTs: NFTCardType[] = [
    {
      id: 1,
      title: "Woxwing Bird Ethereal",
      category: "Art",
      creator: "@chestertron",
      highestBid: "3.89",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Football Sport Flyer",
      category: "Sports",
      creator: "@dorothea",
      highestBid: "2.61",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Defocused Purple Musical",
      category: "Music",
      creator: "@likesbea",
      highestBid: "4.57",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    }
  ];

  const handleSeeDetail = (nftId: number) => {
    router.push(`/nft/${nftId}`);
  };

  return (
    <div className="h-full p-8 bg-black">
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

      <div className="flex flex-row items-center">
        <div className="w-full">
          <div className="mb-8 text-white">
            <h1 className="font-bold mb-2 text-page-title">Welcome back, Niven 👋</h1>
            <p>
              Unlocking the Digital Renaissance, Navigating the NFT Marketplace.
            </p>
          </div>

          <div 
            className="mb-8 bg-custom-secondaryBackground overflow-hidden p-6"
            style={{ borderRadius: '10px' }}
            >
            <div className="flex justify-between items-center mb-4 text-white">
              <h2 className="text-section-title font-semibold">Trending For You 🔥</h2>
              <button className="text-sm text-primary hover:underline">
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

        <div className="w-5/12 h-fit p-4 flex flex-col gap-4">
          <div className="h-1/2 bg-custom-secondaryBackground text-white p-4">
            <p>Your Total Balance</p>
            <p>Your Total Balance</p>
            <button
              onClick={() => {}}
              className="mt-2 px-4 py-2 w-full bg-custom-purple rounded-bl-xl rounded-tr-xl text-card-title"
            >
              Top up Balance
            </button>
          </div>
          <div className="h-1/2 bg-custom-secondaryBackground text-white p-4">
            <p>Recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

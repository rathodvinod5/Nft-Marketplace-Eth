"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle } from "lucide-react";
import { allNFTs } from "@/app/(dashboard)/Data";
import { useNFTContext } from "@/context/factorycontext";

export default function NFTDetail({ params }: { params: { id: string } }) {
  const { buyNFT, listNewNFT, removeListing } = useNFTContext();

  const item = allNFTs.find((nft) => nft.id === Number(params.id));
  if (!item) return null;

  return (
    <div className="text-gray-50 bg-black">
      <div className="py-[100px] px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card">
            <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 rounded-full text-sm">
              6 In Stock
            </div>
            <div className="absolute top-4 right-4">
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full">
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
            <Image
              // src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=800&auto=format&fit=crop&q=60"
              src={item.image}
              alt="NFT Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Preview Images */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  // src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=800&auto=format&fit=crop&q=60"
                  src={item.image}
                  alt={`Preview ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1
              className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-600 
              inline-block text-transparent bg-clip-text"
            >
              {item.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
                    alt="Creator"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm ">By</p>
                  <Link
                    href="#"
                    className="text-sm font-medium hover:text-primary"
                  >
                    {item.creator}
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm ">In</p>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                >
                  {item.category}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">2.39 ETH</div>
              <div className="flex items-center gap-1 text-sm ">
                <span>[05 Reviews]</span>
                <div className="flex">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>
              </div>
            </div>

            <p className="">
              Proin massa dui, maximus vitae massa in, ullamcorper euismod
              justo. Ut condimentum ipsum id nibh suscipit, eget iaculis mi
              mollis. Proin quis turpis odio. Suspendisse non ex a leo lobortis
              tincidunt condimentum quis sem. Sed ornare nunc vel mi eleifend, a
              posuere mauris efficitur. Duis sed velit est.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm ">Artist</p>
                <p className="font-medium">Jons Bond</p>
              </div>
              <div>
                <p className="text-sm ">Create</p>
                <p className="font-medium">03/12/2022</p>
              </div>
              <div>
                <p className="text-sm ">Size</p>
                <p className="font-medium">390×390</p>
              </div>
              <div>
                <p className="text-sm ">Collection</p>
                <p className="font-medium">{item.collectionName}</p>
              </div>
            </div>
          </div>

          {/* <div className="space-y-4">
            <div className="p-4 bg-card rounded-xl">
              <p className="text-sm  mb-2">Ending Time</p>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { value: "861", label: "Days" },
                  { value: "15", label: "Hours" },
                  { value: "44", label: "Minutes" },
                  { value: "49", label: "Seconds" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xl font-bold">{item.value}</div>
                    <div className="text-sm ">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Place Bid
            </button>
          </div> */}
          <div className="flex flex-row justify-center items-center gap-3">
            <button
              className="px-8 py-3 border border-gray-400 relative shadow-lg before:absolute 
                before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[2px] 
                before:border-t-[2px] before:border-transparent hover:before:w-full hover:before:h-full 
                hover:before:border-primary hover:before:transition-all hover:before:duration-500 
                after:border-r-[2px] after:border-b-[2px] after:border-transparent hover:after:border-primary 
                after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full 
                hover:after:h-full hover:after:transition-all hover:after:duration-500"
              onClick={() => buyNFT("", 1)}
            >
              Buy NFT
            </button>
            <button
              className="px-8 py-3 border border-gray-400 relative shadow-lg before:absolute 
                before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[2px] 
                before:border-t-[2px] before:border-transparent hover:before:w-full hover:before:h-full 
                hover:before:border-primary hover:before:transition-all hover:before:duration-500 
                after:border-r-[2px] after:border-b-[2px] after:border-transparent hover:after:border-primary 
                after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full 
                hover:after:h-full hover:after:transition-all hover:after:duration-500"
              onClick={() => listNewNFT("", 1, "")}
            >
              List NFT
            </button>
            <button
              className="px-8 py-3 border border-gray-400 relative shadow-lg before:absolute 
                before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[2px] 
                before:border-t-[2px] before:border-transparent hover:before:w-full hover:before:h-full 
                hover:before:border-primary hover:before:transition-all hover:before:duration-500 
                after:border-r-[2px] after:border-b-[2px] after:border-transparent hover:after:border-primary 
                after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full 
                hover:after:h-full hover:after:transition-all hover:after:duration-500"
              onClick={() => removeListing("", 1)}
            >
              List From Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

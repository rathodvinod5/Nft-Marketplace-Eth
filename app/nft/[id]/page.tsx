"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle } from "lucide-react";

export default function NFTDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card">
            <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
              6 In Stock
            </div>
            <div className="absolute top-4 right-4">
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </button>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=800&auto=format&fit=crop&q=60"
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
                  src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=800&auto=format&fit=crop&q=60"
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
            <h1 className="text-4xl font-bold">Axtronic Electronics VS-10</h1>

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
                  <p className="text-sm text-muted-foreground">By</p>
                  <Link
                    href="#"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Themesflat
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">In</p>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                >
                  @ 3d Models
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">2.39 ETH</div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
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

            <p className="text-muted-foreground">
              Proin massa dui, maximus vitae massa in, ullamcorper euismod
              justo. Ut condimentum ipsum id nibh suscipit, eget iaculis mi
              mollis. Proin quis turpis odio. Suspendisse non ex a leo lobortis
              tincidunt condimentum quis sem. Sed ornare nunc vel mi eleifend, a
              posuere mauris efficitur. Duis sed velit est.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Artist</p>
                <p className="font-medium">Jons Bond</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Create</p>
                <p className="font-medium">03/12/2022</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Size</p>
                <p className="font-medium">390×390</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Collection</p>
                <p className="font-medium">Art Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-card rounded-xl">
              <p className="text-sm text-muted-foreground mb-2">Ending Time</p>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { value: "861", label: "Days" },
                  { value: "15", label: "Hours" },
                  { value: "44", label: "Minutes" },
                  { value: "49", label: "Seconds" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xl font-bold">{item.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

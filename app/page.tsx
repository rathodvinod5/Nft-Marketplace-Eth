// "use client";

// import { useState } from 'react';
// import { Bell, Settings } from 'lucide-react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const router = useRouter();

//   const trendingNFTs = [
//     {
//       id: 1,
//       title: 'Woxwing Bird Ethereal',
//       category: 'Art',
//       creator: '@chestertron',
//       highestBid: '3.89',
//       image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60'
//     },
//     {
//       id: 2,
//       title: 'Football Sport Flyer',
//       category: 'Sports',
//       creator: '@dorothea',
//       highestBid: '2.61',
//       image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=60'
//     },
//     {
//       id: 3,
//       title: 'Defocused Purple Musical',
//       category: 'Music',
//       creator: '@likesbea',
//       highestBid: '4.57',
//       image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60'
//     }
//   ];

//   const handleSeeDetail = (nftId: number) => {
//     router.push(`/nft/${nftId}`);
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-8">
//         <div className="flex-1 max-w-xl">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full px-4 py-2 rounded-lg bg-card border border-border"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center gap-4">
//           <button className="p-2 rounded-lg hover:bg-accent">
//             <Bell className="w-5 h-5" />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-accent">
//             <Settings className="w-5 h-5" />
//           </button>
//           <div className="w-10 h-10 rounded-full bg-accent" />
//         </div>
//       </div>

//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-2">Welcome back, Niven 👋</h1>
//         <p className="text-muted-foreground">
//           Unlocking the Digital Renaissance, Navigating the NFT Marketplace.
//         </p>
//       </div>

//       <section className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Trending For You 🔥</h2>
//           <button className="text-sm text-primary hover:underline">See all</button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {trendingNFTs.map((nft) => (
//             <div key={nft.id} className="bg-card rounded-xl overflow-hidden">
//               <div className="relative h-48">
//                 {/* <Image
//                   src={nft.image}
//                   alt={nft.title}
//                   fill
//                   className="object-cover"
//                 /> */}
//                 <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-600 text-white text-sm">
//                   {nft.category}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold mb-2">{nft.title}</h3>
//                 <p className="text-sm text-muted-foreground mb-2">{nft.creator}</p>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-xs text-muted-foreground">Highest Bid</p>
//                     <p className="font-semibold">{nft.highestBid} ETH</p>
//                   </div>
//                   <button 
//                     onClick={() => handleSeeDetail(nft.id)}
//                     className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
//                   >
//                     See Detail
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useState } from 'react';
import { Bell, Settings } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const trendingNFTs = [
    {
      id: 1,
      title: 'Woxwing Bird Ethereal',
      category: 'Art',
      creator: '@chestertron',
      highestBid: '3.89',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'Football Sport Flyer',
      category: 'Sports',
      creator: '@dorothea',
      highestBid: '2.61',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'Defocused Purple Musical',
      category: 'Music',
      creator: '@likesbea',
      highestBid: '4.57',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60'
    }
  ];

  const handleSeeDetail = (nftId: number) => {
    router.push(`/nft/${nftId}`);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg bg-card border border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-accent">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-full bg-accent" />
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Niven 👋</h1>
        <p className="text-muted-foreground">
          Unlocking the Digital Renaissance, Navigating the NFT Marketplace.
        </p>
      </div>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Trending For You 🔥</h2>
          <button className="text-sm text-primary hover:underline">See all</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingNFTs.map((nft) => (
            <div key={nft.id} className="bg-card rounded-xl overflow-hidden">
              <div className="relative h-48">
                {/* <Image
                  src={nft.image}
                  alt={nft.title}
                  fill
                  className="object-cover"
                /> */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-600 text-white text-sm">
                  {nft.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{nft.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{nft.creator}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Highest Bid</p>
                    <p className="font-semibold">{nft.highestBid} ETH</p>
                  </div>
                  <button 
                    onClick={() => handleSeeDetail(nft.id)}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
                  >
                    See Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
import nextId from "react-id-generator";
import { MiscType, NFTCardType, NFTCategoryType, CreatorsType, CollectionsObjectType } from "./Types";

export const trendingNFTs: NFTCardType[] = [
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


  export const allNFTs: NFTCardType[] = [
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
    },
    {
      id: 11,
      title: "Woxwing Bird Ethereal",
      category: "Art",
      creator: "@chestertron",
      highestBid: "3.89",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 12,
      title: "Football Sport Flyer",
      category: "Sports",
      creator: "@dorothea",
      highestBid: "2.61",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 13,
      title: "Defocused Purple Musical",
      category: "Music",
      creator: "@likesbea",
      highestBid: "4.57",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 21,
      title: "Woxwing Bird Ethereal",
      category: "Art",
      creator: "@chestertron",
      highestBid: "3.89",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 22,
      title: "Football Sport Flyer",
      category: "Sports",
      creator: "@dorothea",
      highestBid: "2.61",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 23,
      title: "Defocused Purple Musical",
      category: "Music",
      creator: "@likesbea",
      highestBid: "4.57",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    }
  ];

  export const nftCategory: NFTCategoryType[] = [
    {
      id: 0,
      title: 'All',
      tag: 'all'
    },
    {
      id: 1,
      title: 'Art',
      tag: 'art'
    },
    {
      id: 2,
      title: 'Gaming',
      tag: 'gaming'
    },
    {
      id: 3,
      title: 'Sports',
      tag: 'sports'
    },
    {
      id: 3,
      title: 'Music',
      tag: 'music'
    },
    {
      id: 3,
      title: 'Others',
      tag: 'others'
    }
  ];

export const recentActivity: MiscType[] = [
  { 
    id: 0,  
    title: "John",
    desc: "Liked Your comment for the post of next greater version of NFT'w worldwide" 
  },
  { 
    id: 1,  
    title: "Christie",
    desc: "Buy your NFT...Check now" 
  },
  { 
    id: 2,  
    title: "Jagger",
    desc: "Started following you, follow back" 
  },
  { 
    id: 3,  
    title: "Karan",
    desc: "Offered some good deal for NFT" 
  },
  { 
    id: 4,  
    title: "Karan",
    desc: "Offered some good deal for NFT" 
  }
]

export const bestCreators: CreatorsType[] = [
  { id: 0, title: 'John', isFollowing: false, totalItems: 110 },
  { id: 1, title: 'Christie', isFollowing: false, totalItems: 2110 },
  { id: 2, title: 'Jagger', isFollowing: false, totalItems: 120 },
  { id: 3, title: 'Karan', isFollowing: false, totalItems: 120 },
]

export const collectionsList: CollectionsObjectType[] = [ 
  {
    id: nextId("test-id-"),
    title: 'MoonBird',
    baseImage: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
    ],
    numberOfItems: 120,
    creator: 'John',
    isAddedToFavorite: false,
    basePrice: '3.89'
  },
  {
    id: nextId("test-id-"),
    title: 'Cassandra',
    baseImage: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
    ],
    numberOfItems: 320,
    creator: 'John',
    isAddedToFavorite: false,
    basePrice: '3.89'
  },
  {
    id: nextId("test-id-"),
    title: 'Quinn Hariera',
    baseImage: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
    ],
    numberOfItems: 40,
    creator: 'John',
    isAddedToFavorite: false,
    basePrice: '3.89'
  },
  // {
  //   id: nextId("test-id-"),
  //   title: 'Hambert Watts',
  //   baseImage: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //   images: [
  //     'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //     'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //     'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //   ],
  //   numberOfItems: 1233,
  //   creator: 'John',
  //   isAddedToFavorite: false,
  //   basePrice: '3.89'
  // },
  // {
  //   id: nextId("test-id-"),
  //   title: 'Wallace',
  //   baseImage: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //   images: [
  //     'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //     'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //     'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60',
  //   ],
  //   numberOfItems: 948,
  //   creator: 'John',
  //   isAddedToFavorite: false,
  //   basePrice: '3.89'
  // },
]
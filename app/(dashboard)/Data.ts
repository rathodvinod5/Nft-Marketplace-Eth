import nextId from "react-id-generator";
import {
  MiscType,
  NFTCardType,
  NFTCategoryType,
  CreatorsType,
  CollectionsObjectType,
} from "./Types";

export const trendingNFTs: NFTCardType[] = [
  {
    id: 1,
    title: "Woxwing Bird Ethereal",
    category: "Art",
    creator: "@chestertron",
    highestBid: "3.89",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    collectionName: "MoonBird",
  },
  {
    id: 2,
    title: "Football Sport Flyer",
    category: "Sports",
    creator: "@dorothea",
    highestBid: "2.61",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
    collectionName: "Cassandra",
  },
  {
    id: 3,
    title: "Defocused Purple Musical",
    category: "Music",
    creator: "@likesbea",
    highestBid: "4.57",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    collectionName: "Quinn Hariera",
  },
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
    collectionName: "MoonBird",
  },
  {
    id: 2,
    title: "Football Sport Flyer",
    category: "Sports",
    creator: "@dorothea",
    highestBid: "2.61",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop&q=60",
    collectionName: "Cassandra",
  },
  {
    id: 3,
    title: "Defocused Purple Musical",
    category: "Music",
    creator: "@likesbea",
    highestBid: "4.57",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800&auto=format&fit=crop&q=60",
    collectionName: "Quinn Hariera",
  },
  {
    id: 11,
    title: "Woxwing Bird Ethereal",
    category: "Art",
    creator: "@chestertron",
    highestBid: "3.89",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=60",
    collectionName: "MoonBird",
  },
  {
    id: 12,
    title: "Football Sport Flyer",
    category: "Sports",
    creator: "@dorothea",
    highestBid: "2.61",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
    collectionName: "Cassandra",
  },
  {
    id: 13,
    title: "Defocused Purple Musical",
    category: "Music",
    creator: "@likesbea",
    highestBid: "4.57",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60",
    collectionName: "Quinn Hariera",
  },
  {
    id: 21,
    title: "Woxwing Bird Ethereal",
    category: "Art",
    creator: "@chestertron",
    highestBid: "3.89",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60",
    collectionName: "MoonBird",
  },
  {
    id: 22,
    title: "Football Sport Flyer",
    category: "Sports",
    creator: "@dorothea",
    highestBid: "2.61",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    collectionName: "Cassandra",
  },
  {
    id: 23,
    title: "Defocused Purple Musical",
    category: "Music",
    creator: "@likesbea",
    highestBid: "4.57",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60",
    collectionName: "Quinn Hariera",
  },
];

export const nftCategory: NFTCategoryType[] = [
  {
    id: 0,
    title: "All",
    tag: "all",
  },
  {
    id: 1,
    title: "Art",
    tag: "art",
  },
  {
    id: 2,
    title: "Gaming",
    tag: "gaming",
  },
  {
    id: 3,
    title: "Sports",
    tag: "sports",
  },
  {
    id: 3,
    title: "Music",
    tag: "music",
  },
  {
    id: 3,
    title: "Others",
    tag: "others",
  },
];

export const recentActivity: MiscType[] = [
  {
    id: 0,
    title: "John",
    desc: "Liked Your comment for the post of next greater version of NFT'w worldwide",
  },
  {
    id: 1,
    title: "Christie",
    desc: "Buy your NFT...Check now",
  },
  {
    id: 2,
    title: "Jagger",
    desc: "Started following you, follow back",
  },
  {
    id: 3,
    title: "Karan",
    desc: "Offered some good deal for NFT",
  },
  {
    id: 4,
    title: "Karan",
    desc: "Offered some good deal for NFT",
  },
];

export const bestCreators: CreatorsType[] = [
  { id: 0, title: "John", isFollowing: false, totalItems: 110 },
  { id: 1, title: "Christie", isFollowing: false, totalItems: 2110 },
  { id: 2, title: "Jagger", isFollowing: false, totalItems: 120 },
  { id: 3, title: "Karan", isFollowing: false, totalItems: 120 },
];

export const collectionsList: CollectionsObjectType[] = [
  {
    id: nextId("test-id-"),
    title: "MoonBird",
    address: "0x7ffdb03888bd6e3bd8b5ec2706f36a9122328590",
    baseImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    ],
    numberOfItems: 120,
    creator: "John",
    isAddedToFavorite: false,
    basePrice: "3.89",
    demogs: [
      { title: "Floor", value: "120 ETH" },
      { title: "Volumes", value: "120 ETH" },
      { title: "Items", value: "120" },
      { title: "Owners", value: "120" },
    ],
  },
  {
    id: nextId("test-id-"),
    title: "Cassandra",
    address: "0x7ffdb03888bd6e3bd8b5ec2706f36a9122328590",
    baseImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    ],
    numberOfItems: 320,
    creator: "John",
    isAddedToFavorite: false,
    basePrice: "3.89",
    demogs: [
      { title: "Floor", value: "120 ETH" },
      { title: "Volumes", value: "120 ETH" },
      { title: "Items", value: "120" },
      { title: "Owners", value: "120" },
    ],
  },
  {
    id: nextId("test-id-"),
    title: "Quinn Hariera",
    address: "0x7ffdb03888bd6e3bd8b5ec2706f36a9122328590",
    baseImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    ],
    numberOfItems: 40,
    creator: "John",
    isAddedToFavorite: false,
    basePrice: "3.89",
    demogs: [
      { title: "Floor", value: "120 ETH" },
      { title: "Volumes", value: "120 ETH" },
      { title: "Items", value: "120" },
      { title: "Owners", value: "120" },
    ],
  },
  {
    id: nextId("test-id-"),
    title: "Quinn Hariera",
    address: "0x7ffdb03888bd6e3bd8b5ec2706f36a9122328590",
    baseImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    ],
    numberOfItems: 40,
    creator: "John",
    isAddedToFavorite: false,
    basePrice: "3.89",
    demogs: [
      { title: "Floor", value: "120 ETH" },
      { title: "Volumes", value: "120 ETH" },
      { title: "Items", value: "120" },
      { title: "Owners", value: "120" },
    ],
  },
  {
    id: nextId("test-id-"),
    title: "Quinn Hariera",
    address: "0x7ffdb03888bd6e3bd8b5ec2706f36a9122328590",
    baseImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60",
    ],
    numberOfItems: 40,
    creator: "John",
    isAddedToFavorite: false,
    basePrice: "3.89",
    demogs: [
      { title: "Floor", value: "120 ETH" },
      { title: "Volumes", value: "120 ETH" },
      { title: "Items", value: "120" },
      { title: "Owners", value: "120" },
    ],
  },
];

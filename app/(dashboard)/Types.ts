export type NFTCardType = {
  id: number;
  title: string;
  category: string;
  creator: string;
  highestBid: string;
  image: string;
  collectionName: string;
};

export type CategoryType =
  | "all"
  | "art"
  | "gaming"
  | "sports"
  | "music"
  | "others";

export type NFTCategoryType = {
  id: number;
  title: string;
  tag: CategoryType;
  // isSelected: boolean;
};

export type MiscType = {
  id: number;
  title: string;
  desc: string;
};

export type CreatorsType = {
  id: number;
  title: string;
  isFollowing: boolean;
  totalItems: number;
};

export type CollectionsDemogsType = {
  title: string;
  value: string;
};

export type CollectionsObjectType = {
  id: string;
  title: string;
  address: string;
  baseImage: string;
  images: string[];
  numberOfItems: number;
  creator: string;
  isAddedToFavorite: boolean;
  basePrice: string;
  demogs: CollectionsDemogsType[];
};

export type NFTCardType = {
  id: number;
  title: string;
  category: string;
  creator: string;
  highestBid: string;
  image: string;
};

export type CategoryType = "all" | "art" | "gaming" | "sports" | "music" | "others";

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
}

export type CreatorsType = {
  id: number;
  title: string;
  isFollowing: boolean;
  totalItems: number;
}

export type CollectionsObjectType = {
  id: string;
  title: string;
  baseImage: string;
  images: string[];
  numberOfItems: number;
  creator: string;
  isAddedToFavorite: boolean;
  basePrice: string;
};

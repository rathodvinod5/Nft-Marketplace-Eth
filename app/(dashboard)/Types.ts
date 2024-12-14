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

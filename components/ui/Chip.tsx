import { CategoryType } from "@/app/(dashboard)/Types";

export type NFTCategoryType = {
  id: number;
  title: string;
  tag: string;
};

const Chip = ({
  currentItem,
  item,
  onClickChip,
}: {
  currentItem: CategoryType | null;
  item: NFTCategoryType;
  onClickChip: () => void;
}) => {
  return (
    <div
      className={`border border-solid cursor-pointer px-6 py-2 rounded-full
        ${currentItem === item.tag ? "bg-custom-purple border-custom-purple" : "border-white"}`}
      onClick={onClickChip}
    >
      <p className="text-card-sub-title text-white">{item.title}</p>
    </div>
  );
};

export default Chip;

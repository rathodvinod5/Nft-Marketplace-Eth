import { CreatorsType } from "@/app/(dashboard)/Types";
import { Plus } from "lucide-react";

const CreatorItems = ({ item }: { item: CreatorsType }) => {
  return (
    <div className="flex flex-row justify-between items-center text-custom-white-alt">
      <div className="flex flex-row items-center gap-2">
        <div className="w-11 h-11 border border-solid border-gray-500 rounded-full" />
        <div>
          <p className="text-card-title">{item.title}</p>
          <p className="text-[12px] text-gray-400">{item.totalItems}</p>
        </div>
      </div>
      {!item.isFollowing ? (
        <button
          className="flex flex-row items-center gap-1 border border-solid 
                border-gray-400 rounded-[6px] text-card-sub-title py-2 px-3 text-gray-200"
        >
          <Plus width={18} height={18} />
          Follow
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default CreatorItems;

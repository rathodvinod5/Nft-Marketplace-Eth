import { MiscType } from "@/app/(dashboard)/Types";
import { UserRound, CircleUserRound } from "lucide-react";

const ShortList = ({
  item
}: {
  item: MiscType
}) => {
  return(
    <div className="flex flex-row items-center my-2">
      <CircleUserRound className="h-6 w-6" />
      <div className="flex flex-row items-center">
        <p className="text-custom-white-alt text-card-sub-title ml-2">{item.title}</p>
        <p className="text-gray-400 text-[10px] ml-1 truncate 
          overflow-hidden text-ellipsis"
        >
            {item.desc}
        </p>
      </div>
    </div>
  );
}

export default ShortList;
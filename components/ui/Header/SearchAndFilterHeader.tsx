import { ListDisplayTypeEnum } from "@/app/collections/constants";
import SearchInput from "../Input/SearchInput";
import SingleSelect from "../Select/SingleSelect";
import LayoutFilters from "./LayoutFilters";

const SearchAndFilterHeader = ({
  onChangeText,
  itemLen,
  onFilterCategory,
  listType = ListDisplayTypeEnum.TILE, 
  onFilterListDisplayType 
}: {
  onChangeText?: (text: string) => void;
  itemLen?: number;
  onFilterCategory?: (category: string) => void;
  listType?: ListDisplayTypeEnum;
  onFilterListDisplayType?: (type: ListDisplayTypeEnum) => void,
}) => {
  return(
    <div className='w-full flex flex-row justify-start items-center gap-4'>
      <div className="w-2/4">
        <SearchInput onChangeText={onChangeText} />
      </div>
      <div className="w-2/4 flex flex-row justify-between items-center">
        <p className="text-gray-400 text-base w-[240px]">{itemLen}</p>
      
        <div className="w-full flex flex-row justify-end gap-2">
          <div className="w-1/2">
            <SingleSelect onChangeOption={onFilterCategory} />
          </div>
          <LayoutFilters 
            currentLayout={listType}
            onChangeLayout={onFilterListDisplayType}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilterHeader;
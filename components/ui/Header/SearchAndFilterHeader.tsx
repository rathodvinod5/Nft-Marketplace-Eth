import { ListDisplayTypeEnum } from "@/app/collections/constants";
import SingleSelect from "../Select/SingleSelect";
import LayoutFilters from "./LayoutFilters";
import InputWithDebounce from "../Input/InputWithDebounce";

const SearchAndFilterHeader = ({
  onChangeText,
  itemLen,
  onFilterCategory,
  listType = ListDisplayTypeEnum.TILE,
  onFilterListDisplayType,
  optionArray,
}: {
  onChangeText?: (text: string) => void;
  itemLen?: number;
  onFilterCategory?: (category: string) => void;
  listType?: ListDisplayTypeEnum;
  onFilterListDisplayType?: (type: ListDisplayTypeEnum) => void;
  optionArray?: string[];
}) => {
  return (
    <div className="w-full flex flex-row justify-start items-center gap-4">
      <div className="w-2/4">
        <InputWithDebounce
          onChangeText={onChangeText}
          showCloseIcon={true}
          showSearchIcon={true}
        />
      </div>
      <div className="w-2/4 flex flex-row justify-between items-center">
        <p className="text-gray-400 text-base w-[240px]">{itemLen}</p>

        <div className="w-full flex flex-row justify-end gap-2">
          <div className="w-1/2">
            <SingleSelect
              optionArray={optionArray}
              onChangeOption={onFilterCategory}
            />
          </div>
          <LayoutFilters
            currentLayout={listType}
            onChangeLayout={onFilterListDisplayType}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilterHeader;

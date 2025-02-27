import SearchInput from "../Input/SearchInput";
import SingleSelect from "../Select/SingleSelect";
import LayoutFilters from "./LayoutFilters";

const SearchAndFilterHeader = ({
  onChangeText,
  itemLen
}: {
  onChangeText?: (text: string) => void;
  itemLen?: number;
}) => {
  return(
    <div className='w-full flex flex-row justify-start items-center gap-4'>
      <div className="w-2/4">
        <SearchInput onChangeText={onChangeText} />
      </div>
      <div className="w-2/4 flex flex-row justify-between items-center">
        <p className="text-gray-400 text-base w-[240px]">{itemLen}</p>
      
        <div className="w-full flex flex-row justify-end gap-2">
          <div className="w-1/2"><SingleSelect /></div>
          <LayoutFilters />
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilterHeader;
import { useEffect, useState } from "react";
import { Search, CircleX } from "lucide-react";

const InputWithDebounce = ({
  onChangeText,
  delay = 500,
  showCloseIcon = false,
  // keyboardType = "text",
  // placeholder = "Search...",
  customStyles = "",
  inputProps,
  showSearchIcon = false,
}: {
  onChangeText?: (text: string) => void;
  delay?: number;
  showCloseIcon?: boolean;
  // keyboardType?: string;
  // placeholder?: string,
  customStyles?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  showSearchIcon?: boolean;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearText = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    let timer = null;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // console.log('Data Fetched');
      if (onChangeText) {
        onChangeText(searchQuery);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [searchQuery, delay]);

  return (
    <div className="w-full relative">
      {showSearchIcon ? (
        <span
          className="text-gray-500 absolute top-0 left-0 h-full px-5 
          flex items-center justify-center rounded-r-md cursor-pointer"
        >
          <Search className="text-[1.3rem] text-gray-400" />
        </span>
      ) : null}

      <input
        // type={keyboardType}
        // placeholder={placeholder}
        value={searchQuery}
        className={
          customStyles
            ? customStyles
            : `border border-gray-600 py-3 pl-[70px] pr-14 outline-none w-full rounded-md text-gray-50`
        }
        style={{ borderRadius: "12px" }}
        onChange={handleOnChange}
        {...inputProps}
      />

      {searchQuery && showCloseIcon ? (
        <span
          className="text-gray-500 absolute top-0 right-0 h-full px-5 
            flex items-center justify-center rounded-r-md cursor-pointer"
          onClick={handleClearText}
        >
          <CircleX className="text-[1.3rem] text-gray-400" />
        </span>
      ) : null}
    </div>
  );
};

export default InputWithDebounce;

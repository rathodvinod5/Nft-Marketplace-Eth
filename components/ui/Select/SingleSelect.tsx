// icons
import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from "react";

export type SingleSelectProps<T> = {
  onChangeOption?: (option: T) => void;
  optionArray?: T[];
};

function SingleSelect<T>({
  onChangeOption,
  optionArray,
}: SingleSelectProps<T>) {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState<T | String>("Select Option");

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click was outside the dropdown
    if (event.target instanceof Element && !event.target.closest(".dropdown")) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks on the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (onChangeOption) {
      onChangeOption(content as T);
    }
  }, [content]);

  return (
    <div className="relative w-full">
      <button
        className="w-full border bg-transparent border-gray-600 rounded-md px-3 py-2 cursor-pointer dropdown 
          flex flex-row justify-between items-center text-gray-400"
        style={{ borderRadius: "12px" }}
        onClick={() => setIsActive(!isActive)}
      >
        {content as React.ReactNode}
        <ArrowDown
          className={`${
            isActive ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 text-[30px]`}
        />
      </button>
      <div
        className={`${
          isActive
            ? "block opacity-100 scale-[1]"
            : "hidden opacity-0 scale-[0.8]"
        } w-full absolute top-14 left-0 right-0 z-40 bg-custom-secondaryBackground rounded-xl flex flex-col 
        overflow-hidden transition-all duration-300 ease-in-out border border-gray-600`}
        style={{ boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)" }}
      >
        {optionArray?.map((option, index) => (
          <p
            className="py-2 px-4 text-gray-400 hover:bg-[#ececec] hover:text-custom-text transition-all duration-200 "
            key={index}
            onClick={(e) =>
              setContent((e.target as HTMLElement).textContent || "")
            }
          >
            {option as React.ReactNode}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SingleSelect;

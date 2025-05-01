import React, { useEffect, useState } from "react";

// react icons
import { ArrowDown } from "lucide-react";

type ItemType = {
  id: number;
  name: string;
};

const SearchSelect = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOptions, setSelectedOptions] = useState<ItemType[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<ItemType | null>(null);

  const items: ItemType[] = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const isSelected = (item: ItemType) => {
    // return selectedOptions.some(selectedItem => selectedItem.id === item.id);
    return selectedOptions && selectedOptions.id === item.id;
  };

  const toggleSelection = (item: ItemType) => {
    // if (isSelected(item)) {
    //     setSelectedOptions(selectedOptions.filter(selectedItem => selectedItem.id !== item.id));
    // } else {
    //     setSelectedOptions([...selectedOptions, item]);
    // }
    setSelectedOptions(item);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as Element)?.closest(".custom-select")) return;
      handleBlur();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative custom-select">
      {/* Input field with search functionality */}
      <input
        type="text"
        placeholder="Search.."
        value={selectedOptions ? selectedOptions.name : search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className={`w-full border bg-transparent border-gray-600 rounded-md px-3 py-2 focus:outline-none`}
        style={{ borderRadius: "12px" }}
      />

      <ArrowDown
        className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] 
                absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}
      />

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute left-0 w-full mt-1 border border-gray-600 bg-custom-secondaryBackground 
                  rounded-md shadow-lg z-20"
          style={{ borderRadius: "12px" }}
        >
          <div className="w-full overflow-auto">
            {filteredItems.map((item) => (
              <p
                key={item.id}
                onClick={() => toggleSelection(item)}
                className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
              >
                <img
                  src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                  alt="checkicon"
                  className={`${isSelected(item) ? "scale-[1] opacity-100" : "scale-[0.5] opacity-0"} 
                                    mr-2 transition-all duration-300 w-6 h-6`}
                />
                {item.name}
              </p>
            ))}

            {filteredItems?.length === 0 && (
              <p className="text-center text-[0.9rem] text-text py-8">
                No search found!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSelect;


// icons
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const SingleSelect = () => {
  // close the dropdown is clicked outside
  // document.addEventListener("click", function (event) {
  //   let target = event.target as Element;

  //   if (target && !target.closest(".dropdown")) {
  //     setIsActive(false);
  //   }
  // });

  // actions
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  const optionArray = ["Football", "Cricket", "Tennis", "Badminton"];

  return (
    <div className="relative w-full">
      <button
        className="w-full border bg-transparent border-gray-600 rounded-md px-3 py-2 cursor-pointer dropdown 
          flex flex-row justify-between items-center text-gray-400"
        style={{ borderRadius: '12px' }}
        onClick={() => setIsActive(!isActive)}
      >
        {content}
        <ArrowDown
            className={`${
            isActive ? "rotate-[180deg]" : "rotate-0"
            } transition-all duration-300 text-[30px]`}
        />
      </button>
      <div className={`${ isActive ? "block opacity-100 scale-[1]" : "hidden opacity-0 scale-[0.8]"
        } w-full absolute top-14 left-0 right-0 z-40 bg-custom-secondaryBackground rounded-xl flex flex-col 
        overflow-hidden transition-all duration-300 ease-in-out border border-gray-600`}
        style={{ boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)", }}
      >
        {optionArray?.map((option, index) => (
          <p
            className="py-2 px-4 text-gray-400 hover:bg-[#ececec] hover:text-custom-text transition-all duration-200 "
            key={index}
            onClick={(e) => setContent((e.target as HTMLElement).textContent || '')}
          >
            {option}
          </p>
          ))
        }
    </div>
  </div>
  );
};

export default SingleSelect;
                
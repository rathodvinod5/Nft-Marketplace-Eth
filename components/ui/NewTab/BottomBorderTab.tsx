"use client";
import React, { useEffect, useState } from 'react';

const BottomBorderTab = ({
    onChangeIndex
}: {
    onChangeIndex?: (newIndex: number) => void,
}) => {

  const [isActive, setIsActive] = useState(1);

  useEffect(() => {
    if(onChangeIndex) {
        onChangeIndex(isActive);
    }
  }, [isActive]);

  return (
    <ul className='flex items-center gap-5'>
      <li
        className={`${
          isActive === 1 && '!border-[#3B9DF8] !text-[#3B9DF8]'
        } px-6 py-2 border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(1)}> Home
      </li>
      <li
        className={`${
          isActive === 2 && '!border-[#3B9DF8] !text-[#3B9DF8]'
        } px-6 py-2 border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(2)}> About
      </li>
      <li
        className={`${
          isActive === 3 && '!border-[#3B9DF8] !text-[#3B9DF8]'
        } px-6 py-2 border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(3)}> Support
      </li>
    </ul>
  );
};

export default BottomBorderTab; 
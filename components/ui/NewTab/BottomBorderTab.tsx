"use client";
import React, { useEffect, useState } from "react";

const BottomBorderTab = ({
  onChangeIndex,
  currentTab,
}: {
  onChangeIndex?: (newIndex: number) => void;
  currentTab: number;
}) => {
  return (
    <ul className="flex items-center gap-5">
      <li
        className={`${
          currentTab === 1 && "!border-custom-purple !text-custom-white-alt"
        } px-6 py-2 border-b  text-custom-white-alt transition duration-300 border-transparent cursor-pointer`}
        onClick={() => (onChangeIndex ? onChangeIndex(1) : null)}
      >
        New NFT
      </li>
      <li
        className={`${
          currentTab === 2 && "!border-custom-purple !text-custom-white-alt"
        } px-6 py-2 border-b  text-custom-white-alt transition duration-300 border-transparent cursor-pointer`}
        onClick={() => (onChangeIndex ? onChangeIndex(2) : null)}
      >
        New Collection
      </li>
    </ul>
  );
};

export default BottomBorderTab;

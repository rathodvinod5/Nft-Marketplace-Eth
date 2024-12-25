"use client";
import { useState } from 'react';

const useCreatePageController = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const selectTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return {
    currentTab,
    selectTab,
  };
};

export default useCreatePageController;
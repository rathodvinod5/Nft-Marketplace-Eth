import { useState } from "react";
import { CategoryType } from "./Types";

const useDashboardController = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryType | null>(null);

  const handleOnClickChip = (currItem: CategoryType) => {
    setCurrentCategory(currItem);
  }

  return {
    currentCategory: currentCategory,
    handleOnClickChip: handleOnClickChip,
  };
}

export default useDashboardController;
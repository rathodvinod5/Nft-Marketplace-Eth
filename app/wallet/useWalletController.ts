import { useState } from "react";

export type ListType = "collection" | "token";

const optionType: ListType[] = ["collection", "token"];

const useWalletController = () => {
  const [listType, setListType] = useState<ListType[]>(optionType);

  return {
    listType,
  };
};

export default useWalletController;

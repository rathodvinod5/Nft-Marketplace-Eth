"use client";
import SearchAndFilterHeader from "@/components/ui/Header/SearchAndFilterHeader";
import useWalletController from "./useWalletController";
import { useAccount } from "wagmi";

const HeaderContainer = () => {
  const { listType } = useWalletController();
  const { address } = useAccount();

  return (
    <div className="mt-12 mb-10">
      <h1 className="pb-4">
        {address && address.length ? address : "Connect Wallet"}
      </h1>

      <SearchAndFilterHeader
        onChangeText={() => {}}
        itemLen={0}
        onFilterCategory={() => {}}
        //   listType={listType}
        //   onFilterListDisplayType={onFilterListDisplayType}
        optionArray={[
          "Football",
          "Cricket",
          "Tennis",
          "Badminton",
          "Sports",
          "Music",
          "Arts",
          "Others",
        ]}
      />
    </div>
  );
};

export default HeaderContainer;

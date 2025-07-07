"use client";
import GradientBorderContainer from "@/components/ui/GradientBorder/gradient-border-cont";
import BottomBorderTab from "@/components/ui/NewTab/BottomBorderTab";
import { useState } from "react";
import CreateNewCollection from "./CreateNewCollection";
import CreateNewNFT from "./CreateNFT";

const CreatePage = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const onClickAddCollection = () => {
    console.log("onClickAddCollection");
    setCurrentTab(2);
  };

  return (
    <div className="h-full p-8 bg-custom-primaryBackground">
      <p className="text-page-title text-gray-200 mb-4">
        Let's create some Tokens
      </p>
      <GradientBorderContainer>
        <div
          className="h-full bg-card rounded-xl bg-custom-secondaryBackground 
        text-white"
        >
          <BottomBorderTab
            currentTab={currentTab}
            onChangeIndex={(newIndex) => setCurrentTab(newIndex)}
          />
          {currentTab === 1 ? (
            <CreateNewNFT onClickAddCollection={onClickAddCollection} />
          ) : (
            <CreateNewCollection />
          )}
        </div>
      </GradientBorderContainer>
    </div>
  );
};

export default CreatePage;

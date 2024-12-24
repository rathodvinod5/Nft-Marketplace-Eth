"use client";
import GradientBorderContainer from "@/components/ui/GradientBorder/gradient-border-cont";
import BottomBorderTab from "@/components/ui/NewTab/BottomBorderTab";
import useCreatePageController from "./useCreatePageController";
import CreateNFT from "./CreateNFT";
import { useState } from "react";

const CreatePage = () => {
  const [currentTab, setCurrentTab] = useState(1);
//   const { currentTab, selectTab } = useCreatePageController();

  return(
    <div className="h-full p-8 bg-custom-primaryBackground">
      <p className="text-page-title text-gray-200">Create Page</p>
      <GradientBorderContainer>
        <div className="h-full bg-card rounded-xl overflow-hidden bg-custom-secondaryBackground 
        text-white">
          <BottomBorderTab onChangeIndex={(newIndex) => setCurrentTab(newIndex)} />
          {currentTab === 1 ? (
            <div className="p-6">
              <h1 className="text-section-title">Create new Collection</h1>
              <p className="text-gray-400">Create your own NFTs</p>
            </div>
          ) : (
            <CreateNFT />
          )}
        </div>
      </GradientBorderContainer>
    </div>
  );
}

export default CreatePage;
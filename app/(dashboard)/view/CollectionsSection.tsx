import Image from "next/image";
import { useRouter } from "next/navigation";
import { collectionsList } from "../Data";
// import GradientBorderContainer from "@/components/ui/GradientBorder/gradient-border-cont";
import { FiLoader } from "react-icons/fi";
import { useNFTContext } from "@/context/factorycontext";
import { CollectionsObjectType } from "../Types";
import NFTCollectionCard from "@/components/ui/NFTCollectionCard/NFTCollectionCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CollectionsSection = () => {
  const { isCollectionsLoading } = useNFTContext();
  const router = useRouter();

  const handleSeeDetail = () => {
    router.push("/collections");
  };

  return (
    <div className="w-full mt-16 flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-between text-white">
        <p className="text-section-title font-semibold text-white my-8">
          Popular Collections
        </p>
        <button
          className="text-card-sub-title text-primary hover:underline"
          onClick={handleSeeDetail}
        >
          See all
        </button>
      </div>
      {isCollectionsLoading ? (
        <FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" />
      ) : (
        <Carousel
          className="w-full max-w-[92%]"
          opts={{ loop: false, align: "start" }}
        >
          <CarouselContent className="w-full flex flex-row gap-4 px-3">
            {collectionsList.map((collection, index) => (
              <CarouselItem key={index} className="basis-1/4 flex-none px-2">
                <NFTCollectionCard<CollectionsObjectType>
                  key={"collection-card-item" + index}
                  collection={collection}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gray-300 hover:text-gray-300" />
          <CarouselNext className="text-gray-300 hover:text-gray-300" />
        </Carousel>
      )}
      {/* (
        <div className="w-full flex flex-row gap-10 overflow-x-scroll">
          {collectionsList.map((collection, index) => {
            return (
              <NFTCollectionCard<CollectionsObjectType>
                key={"collection-card-item" + index}
                collection={collection}
              />
            );
          })}
        </div>
      )} */}

      {/* <Carousel
        className="w-full max-w-4xl mx-auto"
        opts={{ loop: false, align: "start" }}
      >
        <CarouselContent className="flex flex-row gap-4 px-3">
          {[...Array(15)].map((_, index) => (
            <CarouselItem key={index} className="basis-1/4 flex-none px-2">
              <div
                className="w-40 h-28 flex items-center justify-center text-xl font-bold 
                background-teal-500 border border-gray-300 
                min-w-0 basis-1/4 md:basis-1/4 lg:basis-1/4"
              >
                Slide {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-gray-300 hover:text-gray-300" />
        <CarouselNext className="text-gray-300 hover:text-gray-300" />
      </Carousel> */}
    </div>
  );
};

export default CollectionsSection;

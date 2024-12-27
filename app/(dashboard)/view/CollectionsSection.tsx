import Image from "next/image";
import { collectionsList } from "../Data";
import GradientBorderContainer from "@/components/ui/GradientBorder/gradient-border-cont";

const CollectionsSection = () => {
  return (
    <div className="w-full mt-16">
      <div className="flex flex-row justify-between items-center text-white">
        <p className="text-section-title font-semibold text-white my-4">
          Popular Collections
        </p>
        <button className="text-card-sub-title text-primary hover:underline">
          See all
        </button>
      </div>
      <div className="w-full flex flex-row gap-6 overflow-x-scroll ">
        {collectionsList.map((collection) => {
          return (
            <GradientBorderContainer>
            <div 
              key={collection.id} 
              className="flex flex-col gap-3 p-3 bg-custom-secondaryBackground overflow-hidden"
              style={{ borderRadius: '12px' }}
            >
              <div className="flex flex-row gap-3 justify-center">
                <div>
                    <Image 
                      src={collection.baseImage} 
                      alt={collection.title+"-image"}
                      width={260} 
                      height={180}
                      className="aspect-auto"
                      style={{ borderRadius: '12px' }} 
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <Image 
                      src={collection.images[0]} 
                      alt={collection.title+"-image1"} 
                    //   className="w-20 h-14 rounded-sm" 
                      width={120} 
                      height={80}
                      style={{ borderRadius: '12px' }} 
                    />
                    <Image 
                      src={collection.images[1]} 
                      alt={collection.title+"-image2"} 
                    //   className="w-full h-14 rounded-md" 
                        width={120} 
                        height={80}
                      style={{ borderRadius: '12px' }} 
                    />
                </div>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center">
                <div 
                  className="h-12 w-16 border border-solid border-gray-600" 
                  style={{ borderRadius: '50%'}} 
                />
                {/* <div className="w-11 h-11 border border-solid border-gray-500 rounded-full" /> */}
                <p className="w-full text-card-title text-left text-custom-white-alt">{collection.title}</p>
                <p className="text-card-sub-title text-green-700 font-semibold">{collection.numberOfItems}</p>
              </div>
              <div className="border-b border-solid border-gray-600" />
              <div className="flex flex-row gap-3 justify-center items-center">
                <div className="w-full">
                  <p className="text-card-title text-left text-custom-white-alt">{collection.basePrice} eth</p>
                  <p className="text-card-sub-title text-green-700 font-semibold">{collection.numberOfItems}</p>
                </div>
                <div 
                  className="h-12 w-16 border border-solid border-gray-600" 
                  style={{ borderRadius: '50%'}} 
                />
              </div>
            </div>
            </GradientBorderContainer>
          );
        })}
      </div>
    </div>
  );
}

export default CollectionsSection;
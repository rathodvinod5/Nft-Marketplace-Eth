import Image from "next/image";
import { useRouter } from "next/navigation";
import { collectionsList } from "../Data";
import GradientBorderContainer from "@/components/ui/GradientBorder/gradient-border-cont";
import NFTCollectionCard from "@/components/ui/NFTCollectionCard/NFTCollectionCard";

const CollectionsSection = () => {
  const router = useRouter();

  const handleSeeDetail = () => {
    router.push('/collections');
  };

  return (
    <div className="w-full mt-16">
      <div className="flex flex-row justify-between items-center text-white">
        <p className="text-section-title font-semibold text-white my-4">
          Popular Collections
        </p>
        <button 
          className="text-card-sub-title text-primary hover:underline"
          onClick={handleSeeDetail}
        >
          See all
        </button>
      </div>
      <div className="w-full flex flex-row gap-6 overflow-x-scroll">
        {collectionsList.map((collection) => {
          return <NFTCollectionCard collection={collection} />;
        })}
      </div>
    </div>
  );
}

export default CollectionsSection;
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CollectionsObjectType } from "@/app/(dashboard)/Types";
import GradientBorderContainer from "../GradientBorder/gradient-border-cont";

const NFTCollectionCard = ({
  collection,
}: {
  collection: CollectionsObjectType;
}) => {
  const router = useRouter();

  const handleSeeDetail = (CollectionTitle: string) => {
    router.push(`/collections/${CollectionTitle}`);
  };

  return (
    <GradientBorderContainer>
      <div
        key={`connections-${collection.id}`}
        className="flex flex-col gap-3 p-3 bg-custom-secondaryBackground overflow-hidden cursor-pointer"
        onClick={() => handleSeeDetail(collection.title)}
        style={{ borderRadius: "12px" }}
      >
        <div className="flex flex-row gap-3 justify-center">
          <div>
            <Image
              src={collection.baseImage}
              alt={collection.title + "-image"}
              // width={260}
              // height={180}
              width={240}
              height={140}
              className="aspect-auto"
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src={collection.images[0]}
              alt={collection.title + "-image1"}
              // width={120}
              // height={80}
              width={110}
              height={70}
              style={{ borderRadius: "12px" }}
            />
            <Image
              src={collection.images[1]}
              alt={collection.title + "-image2"}
              // width={120}
              // height={80}
              width={110}
              height={70}
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div
            className="border border-solid border-gray-600"
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          />
          <p className="w-full text-card-title text-left text-custom-white-alt">
            {collection.title}
          </p>
          <p className="text-card-sub-title text-green-700 font-semibold">
            {collection.numberOfItems}
          </p>
        </div>
        <div className="border-b border-solid border-gray-600" />
        <div className="flex flex-row gap-3 justify-center items-center">
          <div className="w-full">
            <p className="text-card-title text-left text-custom-white-alt">
              {collection.basePrice} eth
            </p>
            <p className="text-card-sub-title text-green-700 font-semibold">
              {collection.numberOfItems}
            </p>
          </div>
          <div
            className="h-12 w-16 border border-solid border-gray-600"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </GradientBorderContainer>
  );
};

export default NFTCollectionCard;

import Image from "next/image";
import { NFTCardType } from "@/app/(dashboard)/Types";
import GradientBorderContainer from "./GradientBorder/gradient-border-cont";

const NFTCard = ({
  nft,
  handleSeeDetail,
}: {
  nft: NFTCardType;
  handleSeeDetail: (id: number) => void;
}) => {
  return (
    <GradientBorderContainer customCss="transition duration-200 hover:-translate-y-3">
      <div
        className="bg-card rounded-xl overflow-hidden bg-custom-secondaryBackground 
      text-white relative"
      >
        {" "}
        {/* border-2 border-solid border-custom-purple */}
        <div className="h-[360px]">
          <Image
            src={nft.image}
            alt={nft.title}
            // width={300}
            // height={360}
            fill
            className="object-cover h-48"
            // layout="fill"
            // objectFit="fill" // Options: "cover", "contain", "fill", "none", "scale-down"
          />
        </div>
        <div className="p-4 absolute bottom-0 left-0 right-0">
          <h3 className="mb-2 text-card-title">{nft.title}</h3>
          <p className="text-sm text-muted-foreground mb-2 text-gray-400">
            {nft.creator}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-muted-foreground text-gray-400">
                Highest Bid
              </p>
              <p className="font-semibold">{nft.highestBid} ETH</p>
            </div>
            <button
              onClick={() => handleSeeDetail(nft.id)}
              className="px-4 py-2 text-card-sub-title bg-custom-purple rounded-bl-xl rounded-tr-xl"
            >
              See Detail
            </button>
          </div>
        </div>
        <div
          className="w-20 px-3 py-2 rounded-br-xl bg-custom-purple text-white 
          text-center text-card-sub-title bg-opacity-65 absolute top-0 left-0"
        >
          {nft.category}
        </div>
      </div>
    </GradientBorderContainer>
  );
};

export default NFTCard;

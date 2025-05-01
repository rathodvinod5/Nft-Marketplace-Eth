import Image from "next/image";
import { NFTCardType } from "@/app/(dashboard)/Types";
import GradientBorderContainer from "./GradientBorder/gradient-border-cont";

const NFTCardAsList = ({
  nft,
  handleSeeDetail,
}: {
  nft: NFTCardType;
  handleSeeDetail: (id: number) => void;
}) => {
  return (
    <GradientBorderContainer>
      <div
        className="bg-card rounded-xl overflow-hidden bg-custom-secondaryBackground 
      text-white relative flex flex-row justify-start gap-3"
      >
        {" "}
        {/* border-2 border-solid border-custom-purple */}
        <div>
          <Image
            src={nft.image}
            alt={nft.title}
            width={340}
            height={10}
            // fill
            className="object-cover"
            // layout="fill"
            // objectFit="scale-down" // Options: "cover", "contain", "fill", "none", "scale-down"
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-card-title">{nft.title}</h3>
            <p className="text-sm text-muted-foreground mb-2 text-gray-400">
              {nft.creator}
            </p>
          </div>
          <div className="flex justify-between items-center gap-10">
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

export default NFTCardAsList;

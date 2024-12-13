import Image from "next/image";
import { NFTCardType } from "@/app/(dashboard)/Types";

const NFTCard = ({
  nft,
  handleSeeDetail,
}: {
  nft: NFTCardType;
  handleSeeDetail: (id: number) => void;
}) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden bg-custom-secondaryBackground 
      text-white border-2 border-solid border-custom-purple">
      <div className="w-20 px-3 py-1 rounded-br-xl bg-custom-purple text-white 
        text-center text-sm">
        {nft.category}
      </div>
      <div className="h-48">
        {/* <Image
          src={nft.image}
          alt={nft.title}
          // width={100}
          // height={undefined}
          // className="w-full h-full object-cover"
          // fill
          // className="object-cover"
          // layout="fill"
          objectFit="contain" // Options: "cover", "contain", "fill", "none", "scale-down"
        />   */}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 text-card-title">{nft.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{nft.creator}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-muted-foreground">Highest Bid</p>
            <p className="font-semibold">{nft.highestBid} ETH</p>
          </div>
          <button
            onClick={() => handleSeeDetail(nft.id)}
            className="px-4 py-2 text-sm bg-custom-purple rounded-bl-xl rounded-tr-xl"
          >
            See Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;

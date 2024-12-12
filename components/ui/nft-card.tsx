import { NFTCardType } from "@/app/(dashboard)/Types";

const NFTCard = ({
    nft,
    handleSeeDetail,
}: {
    nft: NFTCardType,
    handleSeeDetail: (id: number) => void
}) => {
  return(
    <div  className="bg-card rounded-xl overflow-hidden bg-custom-secondaryBackground text-white">
        <div className="w-[60px] px-3 py-1 rounded-full bg-purple-600 text-white text-sm">
            {nft.category}
        </div>
        <div className="h-48">
            {/* <Image
                src={nft.image}
                alt={nft.title}
                fill
                className="object-cover"
            /> */}
        </div>
        <div className="p-4">
            <h3 className="font-semibold mb-2">{nft.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{nft.creator}</p>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-xs text-muted-foreground">Highest Bid</p>
                    <p className="font-semibold">{nft.highestBid} ETH</p>
                </div>
                <button 
                    onClick={() => handleSeeDetail(nft.id)}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
                >
                    See Detail
                </button>
            </div>
        </div>
    </div>
  );
}

export default NFTCard;
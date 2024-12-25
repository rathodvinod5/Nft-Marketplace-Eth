import SingleSelect from "@/components/ui/Select/SingleSelect";
import { Plus } from "lucide-react";


const CreateNewNFT = () => {
    return (
        <div className="flex flex-row gap-5 p-5">
            <div className="w-1/3 h-[220px]">
                <label htmlFor="imageUpload" className="block mb-2">Upload Image:</label>
                <div className="w-full h-full flex flex-row justify-center items-center border border-gray-600 rounded-xl">
                    <input type="file" id="imageUpload" name="imageUpload"  />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-2/3">
                <div className="w-2/3">
                    <label htmlFor="tokenSymbol" className="block mb-2">Select a Collection</label>
                    <div className="flex flex-row gap-2 w-full">
                        <SingleSelect />
                        <div className="flex flex-row justify-center items-center cursor-pointer border 
                            border-solid border-gray-600 px-2" style={{ borderRadius: '12px' }}>
                            <Plus className="text-[24px] text-gray-400" />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="nftName" className="block mb-2">NFT Name</label>
                    <input 
                        type="text" 
                        id="nftName" 
                        name="nftName" 
                        className="w-2/3 block h-12 bg-transparent border border-gray-600 rounded-xl" 
                    />
                </div>
                <div>
                    <label htmlFor="nftName" className="block mb-2">Number of supply</label>
                    <input 
                        type="number" 
                        id="nftName" 
                        name="nftName" 
                        className="block h-12 bg-transparent border border-gray-600 rounded-xl" 
                    />
                </div>
                <div>
                    <label htmlFor="nftName" className="block mb-2">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Description of the token"
                        className="w-2/3 block bg-transparent border border-gray-600 rounded-xl px-4 py-3 min-h-[200px] focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                </div>
                <div>
                    <label htmlFor="nftName" className="block mb-2">URI link</label>
                    <input 
                        type="number" 
                        id="nftName" 
                        placeholder="https://demo.com/item/123"
                        name="nftName" 
                        className="w-2/3 h-12 bg-transparent border border-gray-600 rounded-xl px-2" 
                    />
                </div>
                <div className="w-2/3 mt-4">
                    <label className="block mb-2 text-[20px]">Traits</label>
                    <p className="text-card-title text-gray-600">Traits describe attributes of your item. They appear as filters 
                        inside your collection page and are also listed out inside your item page.
                    </p>

                    <div className="flex flex-row justify-center items-center cursor-pointer border 
                        border-solid border-gray-600 mt-4 pl-3 pr-4 py-2 w-fit text-gray-400 font-semibold" 
                        style={{ borderRadius: '12px' }}
                    >
                        <Plus className="text-[24px] " />
                        <p>Add Trait</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewNFT;
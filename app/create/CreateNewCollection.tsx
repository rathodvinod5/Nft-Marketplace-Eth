import SingleSelect from "@/components/ui/Select/SingleSelect";
import useCreateNFTController from "./controllers/useCreateNFTController";
import { AllChains } from "./Utility";
import InputWithDebounce from "@/components/ui/Input/InputWithDebounce";

const CreateNewCollection = () => {

    const {  
        newNFTCollection,
        onChangeNFTCollection,
        newNFTCollectionSymbol,
        onChangeNFTCollectionSymbol,
    } = useCreateNFTController();

    return (
        <div className="flex flex-row gap-5 p-5">
            <div className="w-1/3 h-[220px]">
                <label htmlFor="imageUpload" className="block mb-2">Upload Image:</label>
                <div className="w-full h-full flex flex-col justify-center items-center border border-gray-600 rounded-xl">
                    <input type="file" id="imageUpload" name="imageUpload"  />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-2/3">
                <div className="w-full flex flex-col gap-4">
                    <div>
                        <label htmlFor="nftName" className="block mb-2">Collection Name</label>
                        <InputWithDebounce
                            customStyles="w-2/3 block h-12 bg-transparent border border-gray-600 rounded-xl px-2" 
                            onChangeText={(newValue: string) => onChangeNFTCollection(newValue)}
                            inputProps={{
                                id: "collectionNameID",
                                name: "collectionName",
                                placeholder: "Enter name of the collection",
                                required: true,
                            }}
                        />
                        {/* <input
                            value={newNFTCollection} 
                            onChange={onChangeNFTCollection}
                            type="text" 
                            id="nftName" 
                            name="nftName" 
                            className="w-2/3 px-4 block h-12 bg-transparent border border-gray-600 rounded-xl" 
                        /> */}
                    </div>
                    <div>
                        <label htmlFor="nftName" className="block mb-2">Token Symbol</label>
                        <InputWithDebounce
                            customStyles="w-2/3 block h-12 bg-transparent border border-gray-600 rounded-xl px-2" 
                            onChangeText={(newValue: string) => onChangeNFTCollectionSymbol(newValue)}
                            inputProps={{
                                id: "collectionNameID",
                                name: "collectionName",
                                required: true,
                            }}
                        />
                        {/* <input 
                            value={newNFTCollectionSymbol}
                            onChange={onChangeNFTCollectionSymbol}
                            type="text" 
                            id="nftName" 
                            name="nftName" 
                            className="block px-4 h-12 bg-transparent border border-gray-600 rounded-xl" 
                        /> */}
                    </div>
                </div>
                <div className="w-2/3">
                    <label htmlFor="tokenSymbol" className="block mb-2">Select Chain</label>
                    <SingleSelect optionArray={AllChains} />
                </div>
            </div>
        </div>
    );
};

export default CreateNewCollection;
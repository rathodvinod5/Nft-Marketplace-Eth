import { useId } from "react";
import SingleSelect from "@/components/ui/Select/SingleSelect";
import { Plus, CircleX } from "lucide-react";
import useCreateNFTController from "./controllers/useCreateNFTController";
import { AllCollections } from "./Utility";
import InputWithDebounce from "@/components/ui/Input/InputWithDebounce";

const CreateNewNFT = ({
  onClickAddCollection,
}: {
  onClickAddCollection: () => void;
}) => {
  const {
    nftName,
    onChangeNFTName,
    nftDescription,
    onChangeNFTDescription,
    nftSupply,
    onChangeNFTSupply,
    nftPrice,
    onChangeNFTPrice,
    nftURILink,
    onChangeNFTURILink,
    nftTraits,
    addNewTrait,
    onEditTraitValue,
    onRemoveTraitItem,
    createNewNft,
    userCollections,
    onChangeCollectionSelected,
  } = useCreateNFTController();
  // console.log("nftTraits: ", nftTraits);

  return (
    <div className="flex flex-row gap-5 p-5">
      <div className="w-1/3 h-[220px]">
        <label htmlFor="imageUpload" className="block mb-2">
          Upload Image:
        </label>
        <div className="w-full h-full flex flex-col justify-center items-center border border-gray-600 rounded-xl">
          <input type="file" id="imageUpload" name="imageUpload" />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        <div className="w-2/3">
          <label htmlFor="tokenSymbol" className="block mb-2">
            Select a Collection *
          </label>
          <div className="flex flex-row gap-2 w-full">
            <SingleSelect
              optionArray={AllCollections}
              onChangeOption={onChangeCollectionSelected}
            />
            <div
              className="flex flex-row justify-center items-center cursor-pointer border 
                border-solid border-gray-600 px-2"
              style={{ borderRadius: "12px" }}
              onClick={onClickAddCollection}
            >
              <Plus className="text-[24px] text-gray-400" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="nftName" className="block mb-2">
            NFT Name *
          </label>
          <InputWithDebounce
            customStyles="w-2/3 block h-12 bg-transparent border border-gray-600 rounded-xl px-2"
            onChangeText={(newValue: string) => onChangeNFTName(newValue)}
            inputProps={{
              id: "nftNameID",
              name: "nftName",
              placeholder: "Enter the of the token",
              required: true,
            }}
          />
        </div>
        {/* <div>
          <label htmlFor="nftName" className="block mb-2">
            Number of supply *
          </label>
          <InputWithDebounce
            customStyles="w-2/3 h-12 bg-transparent border border-gray-600 rounded-xl px-2"
            onChangeText={(newValue: string) => onChangeNFTSupply(newValue)}
            inputProps={{
              id: "nftSupplyID",
              name: "nftSupply",
              placeholder: "Number of supply",
              required: true,
            }}
          />
        </div> */}
        <div>
          <label htmlFor="nftName" className="block mb-2">
            Description
          </label>
          <textarea
            value={nftDescription}
            name="description"
            id="description"
            placeholder="Description of the token"
            className="w-2/3 block bg-transparent border border-gray-600 rounded-xl px-4 py-3 min-h-[200px] 
              focus:border-[#3B9DF8] transition-colors duration-300"
            onChange={onChangeNFTDescription}
          />
        </div>
        <div>
          <label htmlFor="nftName" className="block mb-2">
            URI link *
          </label>
          <InputWithDebounce
            customStyles="w-2/3 h-12 bg-transparent border border-gray-600 rounded-xl px-2"
            onChangeText={(newValue: string) => onChangeNFTURILink(newValue)}
            inputProps={{
              type: "link",
              id: "nftURIlinkID",
              name: "nftURIlink",
              placeholder: "https://abc",
              required: true,
            }}
          />
        </div>
        <div className="w-2/3 mt-4">
          <label className="block mb-2 text-[20px]">Traits</label>
          <p className="text-card-title text-gray-600">
            Traits describe attributes of your item. They appear as filters
            inside your collection page and are also listed out inside your item
            page.
          </p>

          <div className="pt-4 flex flex-col gap-3">
            {nftTraits.map((item, index) => {
              return (
                <div
                  key={"trait-item-" + item.id}
                  className="flex flex-row items-center gap-4"
                >
                  <InputWithDebounce
                    customStyles="w-full block h-12 bg-transparent border border-gray-600 rounded-xl px-2"
                    onChangeText={(newValue: string) =>
                      onEditTraitValue(newValue, "trait", index)
                    }
                    inputProps={{
                      id: "nftNameId",
                      name: "nftName",
                      placeholder: "Enter trait key",
                      required: true,
                    }}
                  />
                  <InputWithDebounce
                    customStyles="w-full block h-12 bg-transparent border border-gray-600 rounded-xl px-2"
                    onChangeText={(newValue: string) =>
                      onEditTraitValue(newValue, "value", index)
                    }
                    inputProps={{
                      id: "nftValueId",
                      name: "nftValue",
                      placeholder: "Enter trait value",
                      required: true,
                    }}
                  />
                  <CircleX
                    className={
                      "text-[30px] cursor-pointer text-gray-600 w-[40px] h-[40px]"
                    }
                    onClick={() => onRemoveTraitItem(item.id)}
                  />
                </div>
              );
            })}
          </div>

          <div
            className="flex flex-row justify-center items-center cursor-pointer border 
              border-solid border-gray-600 mt-4 pl-3 pr-4 py-2 w-fit text-gray-400 font-semibold"
            style={{ borderRadius: "12px" }}
            onClick={addNewTrait}
          >
            <Plus className="text-[24px] " />
            <p>Add Trait</p>
          </div>
        </div>

        <div className="w-2/3 mt-8">
          <button
            className="w-full relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium 
              text-primary border border-solid border-gray-600 rounded-full hover:text-white group
            hover:bg-custom-purple"
            onClick={createNewNft}
          >
            <span
              className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 
                group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
            ></span>
            <span
              className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 
                transform translate-x-full group-hover:translate-x-0 ease"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="w-full relative text-[1rem] group-hover:pr-4 transition-all duration-400 text-center">
              Mint NFT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewNFT;

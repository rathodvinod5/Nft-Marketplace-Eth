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
    createCollection,
    handleChangeImage,
  } = useCreateNFTController();

  return (
    <div className="flex flex-row gap-5 p-5">
      <div className="w-1/3 h-[220px]">
        <label htmlFor="imageUpload" className="block mb-2">
          Upload Image:
        </label>
        <div className="w-full h-full flex flex-col justify-center items-center border border-gray-600 rounded-xl">
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            name="imageUpload"
            onChange={handleChangeImage}
          />
        </div>
        {/* <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleChange} />
          <button type="submit">Upload</button>
        </form> */}
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        <div className="w-full flex flex-col gap-4">
          <div>
            <label htmlFor="nftName" className="block mb-2">
              Collection Name
            </label>
            <InputWithDebounce
              customStyles="w-2/3 block h-12 bg-transparent border border-gray-600 rounded-xl px-2"
              onChangeText={(newValue: string) =>
                onChangeNFTCollection(newValue)
              }
              inputProps={{
                id: "collectionNameID",
                name: "collectionName",
                placeholder: "Enter name of the collection",
                required: true,
              }}
            />
          </div>
          <div>
            <label htmlFor="nftName" className="block mb-2">
              Token Symbol
            </label>
            <InputWithDebounce
              customStyles="w-2/3 block h-12 bg-transparent border border-gray-600 rounded-xl px-2"
              onChangeText={(newValue: string) =>
                onChangeNFTCollectionSymbol(newValue)
              }
              inputProps={{
                id: "collectionNameID",
                name: "collectionName",
                required: true,
              }}
            />
          </div>
        </div>
        <div className="w-2/3">
          <label htmlFor="tokenSymbol" className="block mb-2">
            Select Chain
          </label>
          <SingleSelect optionArray={AllChains} />
        </div>
        <div className="w-2/3 mt-8">
          <button
            className="w-full relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium 
              text-primary border border-solid border-gray-600 rounded-full hover:text-white group
            hover:bg-custom-purple"
            onClick={createCollection}
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
              Create Collection
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCollection;

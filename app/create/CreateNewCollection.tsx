import { FiLoader } from "react-icons/fi";
import { X } from "lucide-react";
import SingleSelect from "@/components/ui/Select/SingleSelect";
import useCreateNFTController from "./controllers/useCreateNFTController";
import { AllChains } from "./Utility";
import InputWithDebounce from "@/components/ui/Input/InputWithDebounce";
import { useNFTContext } from "@/context/factorycontext";
import { Button } from "@/components/ui/button";

const CreateNewCollection = () => {
  const {
    isProcessing,
    newNFTCollection,
    onChangeNFTCollection,
    newNFTCollectionSymbol,
    onChangeNFTCollectionSymbol,
    createCollection,
    handleChangeImage,
    setIsProcessingToFalse,
  } = useCreateNFTController();

  const {
    isWritePending,
    isWriteError,
    isConfirming,
    isConfirmed,
    isReceiptError,
  } = useNFTContext();

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
        <div className="w-2/3 mt-8 relative">
          {isProcessing ? (
            <div
              className="absolute w-full left-0 bottom-14 transition-all duration-300 ease-out 
                flex flex-col justify-center gap-2 border border-teal-100 rounded-xl
                bg-custom-secondaryBackground px-6 py-4 text-white text-left"
            >
              {isConfirmed || isWriteError || isReceiptError ? (
                <Button
                  className="absolute top-2 right-3 p-1"
                  onClick={setIsProcessingToFalse}
                >
                  <X />
                </Button>
              ) : null}

              {/* {true && <p>🕐 Sending transaction to the network...</p>}
              {true && <p>⏳ Waiting for confirmation...</p>}
              {true && <p>✅ Collection created successfully!</p>}
              {true && <p>❌ Error while submitting transaction</p>}
              {true && <p>❌ Error while confirming transaction</p>} */}

              {isWritePending && (
                <p>🕐 Sending transaction to the network...</p>
              )}
              {isConfirming && <p>⏳ Waiting for confirmation...</p>}
              {isConfirmed && <p>✅ Collection created successfully!</p>}
              {isWriteError && <p>❌ Error while submitting transaction</p>}
              {isReceiptError && <p>❌ Error while confirming transaction</p>}
            </div>
          ) : isConfirmed && !isProcessing ? (
            <div
              className="absolute w-full left-0 bottom-14 transition-all duration-300 ease-out 
                flex flex-col justify-center gap-2 border border-teal-100 rounded-xl
                bg-custom-secondaryBackground px-6 py-4 text-white text-left"
            >
              <p>✅ Collection created successfully!</p>
            </div>
          ) : null}

          <button
            className="w-full relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium 
              text-primary border border-solid border-gray-600 rounded-full hover:text-white group
            hover:bg-custom-purple"
            onClick={createCollection}
            disabled={!isConfirmed && isProcessing}
          >
            {!isConfirmed && isProcessing ? (
              <div className="flex items-center justify-center w-full h-full">
                <FiLoader className="text-[1.8rem] animate-spin text-white" />
              </div>
            ) : (
              <>
                <span
                  className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 
                    group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
                />
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
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCollection;

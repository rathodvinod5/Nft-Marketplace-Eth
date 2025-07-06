import { Ban, X } from "lucide-react";
import React from "react";

const CustomAlert = ({
  title,
  initialValue = false,
  showCrossButton,
  callback,
}: {
  title?: string;
  initialValue?: boolean;
  showCrossButton?: boolean;
  callback?: () => void;
}) => {
  const [showAlert, setShowAlert] = React.useState(initialValue);

  const handleClose = () => {
    setShowAlert(false);
    if (callback) callback();
  };

  if (!showAlert) return null;

  return (
    <div
      //   className=" w-full absolute left-[45%] top-4"
      className="fixed top-4 left-0 w-full z-[9999]"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div>
        <div className="p-3 flex items-center justify-between dark:bg-red-800/40 bg-[#fdeded] rounded w-fit">
          <div className="flex items-center gap-3">
            <Ban className="text-[#d74242] text-[1.5rem] dark:text-red-500" />
            <p className="text-[#d74242] text-[1rem] dark:text-red-500">
              {title ? title : "Error Alert"}
            </p>
          </div>
          <X
            className="text-[#d74242] dark:text-red-500 text-[1.8rem] p-1 rounded-full 
            hover:bg-[#d7424215] active:scale-[0.9] cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;

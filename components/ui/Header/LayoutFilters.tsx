import { Grid3X3, LayoutGrid, LayoutList } from "lucide-react";
import { useState } from "react";

type LayoutType = "grid" | "list" | "grid-small";

const LayoutFilters = () => {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("grid");

  const onChangeLayout = (layout: LayoutType) => {
    setCurrentLayout(layout);
  }

  return (
    <div className="flex flex-row justify-around items-center gap-2 text-4xl text-gray-200
      border border-solid border-gray-600 overflow-hidden"
      style={{ borderRadius: '12px' }}
    >
        <IconButton 
          onClick={() => onChangeLayout("grid")}
          isActive={currentLayout === "grid"}
        >
          <LayoutGrid className="" />
        </IconButton>
      
        <IconButton 
          onClick={() => onChangeLayout("list")}
          isActive={currentLayout === "list"}
        >
          <LayoutList className="" />   
        </IconButton>

        <IconButton 
          onClick={() => onChangeLayout("grid-small")}
          isActive={currentLayout === "grid-small"}
        >
          <Grid3X3 className="" />
        </IconButton>
    </div>
  )
}

export default LayoutFilters;


const IconButton = ({ children, onClick, isActive = false }: {
    children: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
}) => {
  return (
    <div 
      className={`flex flex-row justify-center items-center h-full px-2 cursor-pointer 
        ${isActive ? 'bg-gray-600' : ''}`}
      style={{ borderRadius: '8px' }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
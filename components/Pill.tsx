// components/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full border 
        px-4 py-1 text-sm font-medium 
        transition-colors duration-150
        ${active 
          ? "bg-blue-500 text-white border-transparent"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;

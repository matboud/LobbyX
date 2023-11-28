"use client";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type FilterProps = {
  active?: boolean;
  text: string;
  onToggle?: (isActive: boolean) => void;
};

const ToggleFilter: React.FC<FilterProps> = ({
  active = false,
  text,
  onToggle,
}) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active); // Update state if the `active` prop changes
  }, [active]);

  const handleClick = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    if (onToggle) {
      onToggle(newActiveState); // Notify parent component of the state change
    }
  };

  return (
    <div
      className={`bg-gradient-to-t  ${
        isActive ? "from-cyan-800/20" : "from-gray-900"
      } to-gray-950 flex items-center px-4 py-2 mb-6 rounded-md cursor-pointer duration-300`}
      onClick={handleClick}
    >
      <CheckCircleIcon
        className={`w-5 h-5 duration-300 ${
          isActive ? "text-lime-400" : "text-gray-600"
        } mr-4`}
      />
      <div
        className={`${
          isActive ? "text-lime-200" : "text-gray-600"
        } duration-300`}
      >
        {text}
      </div>
    </div>
  );
};

export default ToggleFilter;

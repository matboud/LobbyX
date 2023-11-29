"use client";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/atoms";

type FilterProps = {
  active?: boolean;
  text: string;
  onToggle?: (isActive: boolean) => void;
  disabled?: boolean;
};

const ToggleFilter: React.FC<FilterProps> = ({
  active = false,
  text,
  onToggle,
  disabled,
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

  const ButtonStyle = `
  bg-gradient-to-t 
  w-full 
  ${isActive ? "from-cyan-800/20" : "from-gray-900"}
  ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
  to-gray-950 
  flex 
  items-center 
  px-4 
  py-2 
  mb-6 
  rounded-md 
  duration-300
`;

  return (
    <Button
      className={ButtonStyle}
      onClick={handleClick}
      disabled={disabled}
      srText="Toggle Filter"
    >
      <CheckCircleIcon
        className={`w-5 h-5 duration-300 ${
          isActive
            ? disabled
              ? "text-lime-400/60"
              : "text-lime-400"
            : "text-gray-600"
        } mr-4`}
      />
      <div
        className={`${
          isActive
            ? disabled
              ? "text-lime-400/60"
              : "text-lime-400"
            : "text-gray-600"
        } duration-300`}
      >
        {text}
      </div>
    </Button>
  );
};

export default ToggleFilter;

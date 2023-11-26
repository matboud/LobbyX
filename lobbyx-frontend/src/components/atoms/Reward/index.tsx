import React, { ReactNode } from "react";
import { Image } from "@/components/atoms";

interface RewardProps {
  imageUrl: string;
  altText: string;
  srText: string;
  className?: string;
  additionalText?: string | ReactNode;
  imageClassName?: string;
}

const Reward: React.FC<RewardProps> = ({
  imageUrl,
  altText,
  srText,
  className,
  additionalText,
  imageClassName,
}) => {
  return (
    <div className={` ${className}`}>
      <Image
        src={imageUrl}
        width={90}
        height={90}
        alt={altText}
        srText={srText}
        className={imageClassName}
      />

      {additionalText && (
        <div className="text-left w-[70%] h-full flex flex-col justify-center">
          <div className="text-gray-300 text-xs">{additionalText}</div>
        </div>
      )}
    </div>
  );
};

export default Reward;

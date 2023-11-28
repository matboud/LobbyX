import React, { ReactNode } from "react";
import { Image } from "@/components/atoms";
import classNames from "classnames";

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
    <div className={classNames("flex items-center space-x-4", className)}>
      <Image
        src={imageUrl}
        width={45}
        height={45}
        alt={altText}
        srText={srText}
        className={classNames("flex-shrink-0 w-20 h-20", imageClassName)}
      />

      {additionalText && (
        <div className="flex flex-col justify-center text-gray-300 text-xs">
          {typeof additionalText === "string" ? (
            <p>{additionalText}</p>
          ) : (
            additionalText
          )}
        </div>
      )}
    </div>
  );
};

export default Reward;

import React from "react";
import Image, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
  srText?: string; // sr-only span's text
}

const CustomImage: React.FC<ImageProps> = ({ srText, ...rest }) => {
  return (
    <div className="relative">
      {srText && <span className="sr-only">{srText}</span>}
      <Image {...rest} />
    </div>
  );
};

export default CustomImage;

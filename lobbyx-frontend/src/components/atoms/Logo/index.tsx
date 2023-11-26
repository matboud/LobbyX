import React from "react";
import { Image } from "@/components/atoms";
import classNames from "classnames";

interface LogoProps {
  showShadow?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ showShadow = true, className }) => {
  return (
    <div className="flex items-center justify-center">
      {showShadow && (
        <div
          className={classNames(
            "w-8 h-8 rounded-full z-0 bg-white absolute shadow-[-5px_-2px_20px_10px_rgba(63,255,255,1.000),5px_2px_20px_10px_rgba(244,121,198,1.000)] opacity-50 animate-spin ",
            className
          )}
        />
      )}
      <Image
        src="/LobbyX.png"
        width="100"
        height="100"
        alt="LobbyX logo"
        srText="LobbyX logo"
      />
    </div>
  );
};

export default Logo;

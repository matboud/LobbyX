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
            "sm:w-8 sm:h-8 w-4 h-4 rounded-full z-0 bg-white absolute",
            "shadow-[-5px_-2px_20px_10px_rgba(63,255,255,1.000),5px_2px_20px_10px_rgba(244,121,198,1.000)] opacity-50 animate-spin ",
            className
          )}
        />
      )}
      <Image
        src="/LobbyX.png"
        width="71"
        height="40"
        alt="LobbyX logo"
        srText="LobbyX logo"
        className=""
      />
    </div>
  );
};

export default Logo;

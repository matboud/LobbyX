import React from "react";
import { Image } from "@/components/atoms";

type WinnersCardProps = {
  picture: string;
  name: string;
  winningAmount: number;
  gameName: string;
};

const WinnersCard: React.FC<WinnersCardProps> = ({
  picture,
  name,
  winningAmount,
  gameName,
}) => {
  return (
    <div className="flex items-start bg-gradient-to-t from-neon_cyan/10 to-neon_magenta/10 rounded-lg px-4 py-3 gap-3 mb-6">
      <div className="flex-1">
        <Image
          src={picture}
          alt="profile picture"
          srText="persom profile picture of winner"
          className="rounded-full z-[1] border-2 border-lime-400"
          width={"37"}
          height={"37"}
        />
      </div>

      <div className="flex-[4]">
        <h3 className="text-md text-yellow-400 underline pb-2">{name}</h3>
        <p className="text-xs text-green-500">+ {winningAmount}$</p>
        <p className="text-sm">Game: {gameName}</p>
      </div>
    </div>
  );
};

export default WinnersCard;

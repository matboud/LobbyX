import WinnersCard from "@/components/molecules/WinnersCard";
import React, { ReactNode } from "react";

type Winner = {
  id: string;
  name: string;
  image: string;
  win: number;
  game: string;
};

type WinnersGalleryProps = {
  title: ReactNode;
  winners: Winner[];
};

const WinnersGallery: React.FC<WinnersGalleryProps> = ({ title, winners }) => {
  return (
    <div className="relative h-auto max-h-[calc(100vh-10rem)] overflow-auto rounded-lg pb-4 bg-gray-900/60  border-2 border-gray-700/40 shadow-sm shadow-lime-400/20">
      <div className="sticky top-0 w-full text-md font-bold bg-opacity-30 bg-gray-700 backdrop-blur-md py-4 px-4 rounded-t-lg z-50">
        {title}
      </div>
      <div className="list-none pt-4 px-4">
        {winners.map((winner) => (
          <WinnersCard
            key={winner.id}
            name={winner.name}
            winningAmount={winner.win}
            gameName={winner.game}
            picture={winner.image}
          />
        ))}
      </div>
    </div>
  );
};

export default WinnersGallery;

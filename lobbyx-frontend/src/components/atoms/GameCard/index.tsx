"use client";
import React, { useState } from "react";
import classNames from "classnames";
import { Image } from "@/components/atoms";
import { UserIcon, HeartIcon as LikedHeart } from "@heroicons/react/24/solid";
import { HeartIcon as UnlikedHeart } from "@heroicons/react/24/outline";

interface CardProps {
  numberOfPlayers: number;
  isLiked: boolean;
  gameName: string;
  image: string;
  className?: string;
  imageClassName?: string;
  onClick: () => void;
}

const GameCard: React.FC<CardProps> = ({
  numberOfPlayers,
  isLiked,
  gameName,
  image,
  className,
  imageClassName,
  onClick,
}) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onClick of the card when liking
    setLiked(!liked);
  };

  return (
    <div
      className={classNames(
        "relative rounded-lg overflow-hidden cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={gameName}
        srText={`Image of ${gameName}`}
        width={160}
        height={130}
        className={classNames("w-full object-cover", imageClassName)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30 flex flex-col justify-between px-3 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-white">
            <UserIcon className="w-4 h-4" />
            <span className="text-sm">{numberOfPlayers}</span>
          </div>
          <button
            onClick={handleLikeClick}
            className="p-1 rounded-full text-white hover:bg-white/10"
            aria-label={liked ? "Unlike game" : "Like game"}
          >
            {liked ? (
              <LikedHeart className="w-4 h-4" />
            ) : (
              <UnlikedHeart className="w-4 h-4" />
            )}
          </button>
        </div>
        <div className="text-md font-bold text-white mb-2 ml-4">{gameName}</div>
      </div>
    </div>
  );
};

export default GameCard;

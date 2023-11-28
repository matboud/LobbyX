import { GameCard, Spinner } from "@/components/atoms";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

interface GamesGalleryProps {
  items?: string[];
  gamesData: any[];
  top5Games: any[] | undefined;
  handleModal: (game: any, isOpen: boolean) => void;
  top5Loading: boolean;
  loading: boolean;
}

const GamesGallery: React.FC<GamesGalleryProps> = ({
  gamesData,
  top5Games,
  top5Loading,
  loading,
  handleModal,
}) => {
  return (
    // TODO:checkout why the width grows slowly
    <div className="w-full ">
      {/* most popular games based on like count added to the API */}

      <h2 className="text-2xl font-bold text-white mb-2">Most Popular</h2>

      <div className="flex flex-wrap gap-2 justify-center items-center">
        {!top5Games || (top5Games.length < 1 && top5Loading) ? (
          <Spinner className="m-auto" />
        ) : (
          top5Games?.slice(0, 4)?.map((item, index) => {
            return (
              <GameCard
                key={index}
                numberOfPlayers={item.likesCount}
                isLiked={false}
                gameName={item.name}
                image={item.icon2 || item.icon1}
                className=" w-full max-w-[49%] sm:max-w-[49%] max-h-44"
                onClick={() => handleModal(item, true)}
                {...item}
              />
            );
          })
        )}
      </div>

      <h2 className="text-2xl font-bold text-white mb-2 pt-10">All Games</h2>
      <div className="flex flex-wrap gap-2 justify-between items-center">
        {gamesData.map((item, index) => {
          return (
            <GameCard
              key={index}
              numberOfPlayers={item.likesCount}
              isLiked={false}
              gameName={item.name}
              image={item.icon2 || item.icon1}
              className=" w-full max-w-[49%] sm:max-w-[32%]"
              onClick={() => handleModal(item, true)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GamesGallery;

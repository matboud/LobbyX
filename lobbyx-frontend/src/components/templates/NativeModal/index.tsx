import { Button, Details, Image } from "@/components/atoms";
import React from "react";
import { Game } from "@/redux/types/game";
import { XMarkIcon } from "@heroicons/react/24/solid";

type NativeModalProps = {
  gameData: Game | null;
  handleModal: (game: Game | null, isOpen: boolean) => void;
};

const NativeModal: React.FC<NativeModalProps> = ({ gameData, handleModal }) => {
  return (
    <div className="bg-gray-900/90 z-[1000] flex justify-center items-center w-screen h-screen top-0 px-8 fixed left-0 right-0 bottom-0 ">
      <div className="relative w-full max-w-3xl min-h-[70%] bg-black rounded-lg">
        <div
          onClick={() => handleModal(null, false)}
          className=" absolute -top-8 right-0 cursor-pointer"
        >
          <XMarkIcon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inline-block  w-full h-full">
          {/* TODO: add default image if !background */}
          <Image
            src={gameData?.background || ""}
            alt="banner"
            srText="banner"
            className="block w-full opacity-40"
            width={100}
            height={100}
          />
          <div className="absolute bottom-0 left-0 w-full h-[80%] bg-fade-bottom" />
        </div>

        <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className=" px-8 overflow-hidden text-white shadow sm:rounded-lg">
            <div className="px-4 py-6 sm:px-6 flex items-center">
              <div className="flex-1 pr-5">
                <Image
                  src={gameData?.icon2 || ""}
                  alt="game icon"
                  srText="game icon"
                  className="block w-full h-auto rounded-md"
                  width={80}
                  height={60}
                />
              </div>
              <div className="flex-[2]">
                <h3 className="text-lg font-semibold leading-7 text-white">
                  {gameData?.name.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Random description / instruction could go here.
                </p>
              </div>
            </div>
            <div className="">
              <dl className="">
                <Details dt="Number Of Likes" dd={gameData?.likesCount || ""} />

                <Details dt="Provider" dd={gameData?.providerTitle || ""} />

                <Details
                  dt="About"
                  dd="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio velit quibusdam nihil illum nesciunt atque ex ut. Quibusdam laborum delectus cupiditate quam natus vel numquam eligendi labore, rem neque."
                />

                <Details
                  dt=""
                  dd={
                    <Button
                      srText="Play"
                      className=" text-lg border-2 px-8 py-2 border-lime-400 rounded-md text-lime-400"
                      onClick={() => {
                        handleModal(null, false);
                      }}
                    >
                      Play
                    </Button>
                  }
                />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NativeModal;

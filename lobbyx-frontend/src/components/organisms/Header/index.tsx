import { Button, Image, Logo } from "@/components/atoms";
import Reward from "@/components/atoms/Reward";
import { SearchBar } from "@/components/molecules";
import { ContainerFluid } from "@/components/templates";
import { BellIcon, CurrencyEuroIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <>
      <header className="shrink-0  bg-gray-900 z-50 relative">
        <ContainerFluid className="min-h-[5.5rem] m-auto">
          <div className="flex items-center justify-between w-full ">
            <div className="flex md:static z-50 top-12 md:top-0 absolute left-1/2 transform md:transform-none -translate-x-1/2 md:-translate-x-0 min-w-[120px]">
              <Logo />
            </div>

            <div className="md:flex-grow md:order-1 mx-4">
              <SearchBar />
            </div>

            <div className=" lg:relative absolute right-0 top-24 lg:top-0 lg:flex lg:flex-grow-0">
              <Reward
                imageUrl="/box_.png"
                altText="gift box reward"
                srText="reward gift"
                imageClassName="right-0 fixed lg:static mt-4 animate-bounce"
                className="w-auto lg:w-[16rem] lg:bg-gradient-to-t bg-none from-black/30 flex items-center justify-end cursor-pointer"
                additionalText={
                  <div className="hidden lg:flex text-left w-[70%] h-full flex-col justify-center">
                    <div className="text-xl text-neon_cyan">Rewards</div>
                    <div className="text-gray-300 text-xs">
                      Weekly bonus awaits!
                    </div>
                  </div>
                }
              />
            </div>

            <div className=" order-4 lg:order-5 flex items-center">
              <Button
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300 pr-8"
                srText="View notifications"
              >
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </Button>

              <div className="flex items-center">
                <div className="hidden md:block px-4 ">
                  <div className=" whitespace-nowrap text-white">John Doe</div>
                  <div className="flex items-center whitespace-nowrap text-sm text-lime-400 bg-slate-950/75 rounded-full pl-1 pr-2 gap-1">
                    <span>
                      <CurrencyEuroIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                    72000
                  </div>
                </div>
                <div className="border-2 min-w-[40px] rounded-full p-[4px] border-neon_cyan shadow-[0px_0px_20px_-4px_rgba(63,255,255,1.000)] hover:shadow-[0px_0px_20px_-8px_rgba(63,255,255,1.000)] duration-150 cursor-pointer">
                  <Image
                    className="rounded-full bg-gray-800"
                    src="/avatar.avif"
                    width="40"
                    height="40"
                    alt="gamer profile picture - avatar"
                    srText="profile picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerFluid>
      </header>
    </>
  );
}

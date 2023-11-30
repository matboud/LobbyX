"use client";
import React, { Suspense, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, fetchTop5Games } from "@/redux/actions/game";
import { RootState, AppDispatch } from "@/redux/store/store";
import { WinnersHeader } from "@/components/molecules";
import {
  ContainerFluid,
  SideBars,
  WinnersSidebar,
} from "@/components/templates";
import { TrophyIcon } from "@heroicons/react/24/solid";
import { FiltersContainer, GamesGallery } from "@/components/organisms";
import InfiniteScroll from "react-infinite-scroll-component";
import winnersData from "@/data/mocked_data/winners.json";
import FiltersData from "@/data/mocked_data/filterBy.json";
import { Spinner } from "@/components/atoms";
import NativeModal from "@/components/templates/NativeModal";
import { Game } from "@/redux/types/game";

const WinnersGallery = React.lazy(
  () => import("@/components/organisms/WinnersGallery")
);

/**
 * Represents the page component.
 *
 * @remarks
 * This component is responsible for rendering the page and retrieving the top 5 games from the Redux store.
 *
 * @example
 * ```tsx
 * <Page />
 * ```
 *
 * @returns The JSX element representing the page component.
 */
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );

  const {
    top5Games,
    loading: top5Loading,
    error: top5Error,
  } = useSelector((state: RootState) => state.top5Games);
  const filterData = useSelector((state: RootState) => state.filter.data);

  const [page, setPage] = useState(0);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchGames({ page, perPage: 12 }));
    dispatch(fetchTop5Games());
  }, [dispatch, page]);

  const loadMoreGames = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const memoizedGames = useMemo(() => games, [games]);
  const memoizedTop5Games = useMemo(() => top5Games, [top5Games]);
  const memoizedFilteredGames = useMemo(() => filterData, [filterData]);

  if (top5Error || error) {
    return (
      <div className="w-full flex justify-center items-center">
        Error: {top5Error || error}
      </div>
    );
  }

  const handleModal = (game: Game | null, isOpen: boolean) => {
    setSelectedGame(game);
    setIsModalOpen(isOpen);
  };

  return (
    <main className="w-full h-full">
      <ContainerFluid className="m-auto w-full">
        <div className="relative mx-auto flex w-full max-w-[90rem] items-start gap-x-4 m-auto  md:px-10 h-20  justify-between px-4 sm:px-8">
          <aside className="lg:sticky lg:top-6 hidden lg:block w-64 shrink-0 bg-gray-900/20">
            <Suspense
              fallback={
                <div className="animate-pingw-4 h-4 absolute inline-flex rounded-full bg-sky-400 opacity-75" />
              }
            >
              <div className="fixed w-64">
                <FiltersContainer filters={FiltersData} />
              </div>
            </Suspense>
          </aside>
          <main className="flex-1 px-4 pb-6 rounded-md">
            <div className="flex flex-nowrap  gap-6 justify-between items-center">
              <InfiniteScroll
                dataLength={memoizedGames.length}
                next={loadMoreGames}
                hasMore={memoizedFilteredGames.length > 0 ? false : true}
                loader={<></>}
              >
                <GamesGallery
                  gamesData={
                    memoizedFilteredGames.length > 0
                      ? memoizedFilteredGames
                      : memoizedGames
                  }
                  top5Games={memoizedTop5Games}
                  top5Loading={top5Loading}
                  loading={loading}
                  handleModal={handleModal}
                />
                {loading && <Spinner className="m-auto" />}
              </InfiniteScroll>
            </div>
          </main>

          <aside className="lg:sticky lg:top-8 hidden xl:block w-64 shrink-0 max-h-[calc(100vh - 90rem)]">
            <Suspense
              fallback={
                <div className="animate-pingw-4 h-4 absolute inline-flex rounded-full bg-sky-400 opacity-75" />
              }
            >
              <div className="fixed w-64">
                <WinnersGallery
                  title={
                    <div className="w-full z-50">
                      <div className="flex items-center text-lg">
                        <span className="pr-4">
                          <TrophyIcon
                            className="h-5 w-5 text-lime-400"
                            aria-hidden="true"
                          />
                        </span>
                        Live Winners:
                      </div>
                      <WinnersHeader />
                    </div>
                  }
                  winners={winnersData}
                />
              </div>
            </Suspense>
          </aside>
        </div>
      </ContainerFluid>

      <SideBars>
        <FiltersContainer filters={FiltersData} />
      </SideBars>

      <WinnersSidebar>
        <Suspense
          fallback={
            <div className="animate-pingw-4 h-4 absolute inline-flex rounded-full bg-sky-400 opacity-75" />
          }
        >
          <div className="fixed w-64">
            <WinnersGallery
              title={
                <div className="w-full z-50">
                  <div className="flex items-center text-lg">
                    <span className="pr-4">
                      <TrophyIcon
                        className="h-5 w-5 text-lime-400"
                        aria-hidden="true"
                      />
                    </span>
                    Live Winners:
                  </div>
                  <WinnersHeader />
                </div>
              }
              winners={winnersData}
            />
          </div>
        </Suspense>
      </WinnersSidebar>

      {isModalOpen && (
        <NativeModal gameData={selectedGame} handleModal={handleModal} />
      )}
    </main>
  );
}

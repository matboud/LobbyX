"use client";
import { useState, useEffect, useCallback } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import classNames from "classnames";
import { Game } from "@/redux/types/game";
import { Image } from "@/components/atoms";
import NativeModal from "@/components/templates/NativeModal";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [suggestions, setSuggestions] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const debounce = useCallback(
    <T extends (...args: any[]) => any>(func: T, wait: number) => {
      let timeout: NodeJS.Timeout;

      return function executedFunction(...args: Parameters<T>) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    []
  );

  // Fetch suggestions from API

  const fetchSuggestions = useCallback(
    debounce((query: string) => {
      setLoading(true); // Set loading state to true before fetching suggestions
      fetch(`http://localhost:9080/api/suggestion/${query}`)
        .then((response) => response.json())
        .then((data: Game[]) => {
          setSuggestions(data);
          setLoading(false); // Set loading state to false after suggestions are fetched
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
          setLoading(false); // Set loading state to false if there's an error
        });
    }, 300),
    [debounce]
  );

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetchSuggestions(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, fetchSuggestions]);

  const handleModal = (game: Game | null, isOpen: boolean) => {
    setSelectedGame(game);
    setIsModalOpen(isOpen);
  };

  return (
    <Combobox
      as="div"
      value={selectedGame}
      onChange={(selectedGame) => {
        handleModal(selectedGame, true);
      }}
      className="max-w-[30rem]"
    >
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-gray-900 py-1.5 pl-3 pr-12 text-white shadow-sm sm:text-sm sm:leading-6"
          onChange={(event) => setSearchTerm(event.target.value)}
          displayValue={(game: Game) => game?.name}
          placeholder="Search..."
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {suggestions.length > 0 ? (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {suggestions.map((game: Game) => (
              <Combobox.Option
                key={game?.id}
                value={game}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-200"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <Image
                        src={game?.icon2}
                        alt=""
                        className="h-6 w-6 flex-shrink-0"
                        width={24}
                        height={24}
                      />
                      <span
                        className={classNames(
                          "ml-3 truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {game?.name}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        ) : loading ? (
          <div className="absolute -bottom-8 text-blue-500">Loading...</div>
        ) : (
          searchTerm.length >= 3 &&
          loading == false && (
            <div className="absolute -bottom-8 text-blue-500">
              No result found for{" "}
              <span className="text-blue-300 font-thin">"{searchTerm}"</span>
            </div>
          )
        )}
      </div>
      {isModalOpen && (
        <NativeModal gameData={selectedGame} handleModal={handleModal} />
      )}
    </Combobox>
  );
}

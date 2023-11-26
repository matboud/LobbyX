import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="flex items-center md:max-w-[25rem] max-w-[8rem] sm:max-w-[11rem]   w-full bg-gray-800 rounded-full text-white overflow-hidden focus-within:ring-0 relative">
      <input
        type="text"
        placeholder="Search.."
        className="flex-grow px-4 py-2 bg-transparent outline-none placeholder-gray-400 text-white text-sm"
      />
      <div className="p-2 cursor-pointer absolute right-0">
        <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-400 " />
      </div>
    </div>
  );
};

export default SearchBar;

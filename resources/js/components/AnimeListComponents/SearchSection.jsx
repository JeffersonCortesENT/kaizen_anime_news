import { ArrowUpIcon, ArrowDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchSection = () => {
  const [isAscending, setIsAscending] = useState(true);

  const handleSortToggle = () => {
    setIsAscending(!isAscending);
  };

  return (
    <>
      <div className="bg-light-navy p-6">
        <div className="flex flex-row justify-center items-center">
          <input
            type="text"
            name="search_text"
            className="form-input px-4 py-3 rounded-l-lg sm:w-1/3"
            placeholder="Search Anime..."
          />
          <button className="bg-blue-500 text-white rounded-r-lg px-4 py-4">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 2nd Row */}
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="p-1 lg:p-4">
            <select
              id="orderBy"
              name="orderBy"
              className="form-select mt-1 rounded-lg"
              defaultValue={"Order By"}
            >
              <option value="Order By" disabled>Order By</option>
              <option value="title">Title</option>
              <option value="type">Type</option>
              <option value="rating">Rating</option>
              <option value="releaseDate">Release Date</option>
              <option value="rank">Rank</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="animeType"
              name="animeType"
              className="form-select mt-1 rounded-lg"
              defaultValue={"Type"}
            >
              <option value="Type" disabled>Type</option>
              <option value="TV">TV</option>
              <option value="OVA">OVA</option>
              <option value="Movie">Movie</option>
              <option value="Special">Special</option>
              <option value="ONA">ONA</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="animeStatus"
              name="animeStatus"
              className="form-select mt-1 rounded-lg"
              defaultValue={"Status"}
            >
              <option value="Status" disabled>Status</option>
              <option value="Airing">Airing</option>
              <option value="Complete">Complete</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="animeRating"
              name="animeRating"
              className="form-select mt-1 rounded-lg"
              defaultValue={"Rating"}
            >
              <option value="Rating" disabled>Rating</option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <button
              className="bg-white text-black py-2 px-4 rounded-lg"
              onClick={handleSortToggle}
            >
              {isAscending ? (
                <ArrowUpIcon className="w-4 h-4 inline-block mr-1" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 inline-block mr-1" />
              )}
              Sort
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchSection;
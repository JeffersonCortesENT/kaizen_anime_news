import { ArrowUpIcon, ArrowDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchSection = () => {
  const [isAscending, setIsAscending] = useState(true);

  const orderByValues = [
    {
      value: null,
      display: 'Order By'
    },
    {
      value: 'title',
      display: 'Title',
    },
    {
      value: 'type',
      display: 'Type',
    },
    {
      value: 'rating',
      display: 'Rating',
    },
    {
      value: 'release_date',
      display: 'Release',
    },
    {
      value: 'rank',
      display: 'Rank',
    },
    {
      value: 'popularity',
      display: 'Popularity',
    },
  ];

  const animeTypeValues = [
    {
      value: null,
      display: 'Type'
    },
    {
      value: 'ova',
      display: 'OVA',
    },
    {
      value: 'movie',
      display: 'Movie',
    },
    {
      value: 'special',
      display: 'Special',
    },
    {
      value: 'ona',
      display: 'ONA',
    },
    {
      value: 'music',
      display: 'Music',
    },
  ];

  const animeStatusValues = [
    {
      value: null,
      display: 'Status'
    },
    {
      value: 'airing',
      display: 'Airing',
    },
    {
      value: 'complete',
      display: 'Complete',
    },
    {
      value: 'upcoming',
      display: 'Upcoming',
    },
  ];

  const animeRatingValues = [
    {
      value: null,
      display: 'Rating'
    },
    {
      value: 'g',
      display: 'G',
    },
    {
      value: 'pg',
      display: 'PG',
    },
    {
      value: 'pg-13',
      display: 'PG-13',
    },
    {
      value: 'r',
      display: 'R',
    },
  ];

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
              defaultValue={null}
            >
              {orderByValues?.map((oValue, iKey) => (
                <option key={iKey} value={oValue.value}>{oValue.display}</option>
              ))}
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="animeType"
              name="animeType"
              className="form-select mt-1 rounded-lg"
              defaultValue={null}
            >
              {animeTypeValues?.map((oValue, iKey) => (
                <option key={iKey} value={oValue.value}>{oValue.display}</option>
              ))}
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="animeStatus"
              name="animeStatus"
              className="form-select mt-1 rounded-lg"
              defaultValue={null}
            >
              {animeStatusValues?.map((oValue, iKey) => (
                <option key={iKey} value={oValue.value}>{oValue.display}</option>
              ))}
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="animeRating"
              name="animeRating"
              className="form-select mt-1 rounded-lg"
              defaultValue={null}
            >
              {animeRatingValues?.map((oValue, iKey) => (
                <option key={iKey} value={oValue.value}>{oValue.display}</option>
              ))}
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
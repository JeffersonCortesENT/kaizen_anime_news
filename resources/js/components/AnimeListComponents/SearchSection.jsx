import { ArrowUpIcon, ArrowDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { getAnimeSearch, selectSearchParams, setSearchParams } from "../../features/AnimeSlice";
import { useDispatch, useSelector } from "react-redux";
import { ASC, DESC, SCORE_VALUE } from "../../constants";

const SearchSection = ({ setLoading }) => {
  const [bAscending, setIsAscending] = useState(false);
  const dispatch = useDispatch();
  const oParams = useSelector(selectSearchParams);

  const orderByValues = [
    {
      value: SCORE_VALUE,
      display: 'Order By'
    },
    {
      value: 'title',
      display: 'Title',
    },
    {
      value: SCORE_VALUE,
      display: 'Rating',
    },
    {
      value: 'start_date',
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
      value: '',
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
      value: '',
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
      value: '',
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

  const handleSearchForm = (oEvent) => {
    const {name, value} = oEvent.target;
    dispatch(setSearchParams({name, value}));
  }

  const handleSortToggle = () => {
    setIsAscending(!bAscending);
    const sSort = bAscending ? DESC : ASC;
    setLoading(true);
    Promise.all([
      dispatch(setSearchParams({ name: 'sort', value: sSort})),
      dispatch(getAnimeSearch({...oParams, sort: sSort})),
    ]).then(() => {
      setLoading(false);
    });
  };

  const applySearchFilter = () => {
    setLoading(true);
    Promise.all([
      dispatch(getAnimeSearch(oParams)),
    ]).then(() => {
      setLoading(false);
    })
  }

  return (
    <>
      <div className="bg-light-navy p-6">
        <div className="flex flex-row justify-center items-center">
          <input
            type="q"
            name="q"
            className="form-input px-4 py-3 rounded-l-lg sm:w-1/3"
            placeholder="Search Anime..."
            defaultValue={oParams.q}
            onChange={handleSearchForm}
          />
          <button className="bg-blue-500 text-white rounded-r-lg px-4 py-4" onClick={applySearchFilter}>
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 2nd Row */}
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="p-1 lg:p-4">
            <select
              id="order_by"
              name="order_by"
              className="form-select mt-1 rounded-lg"
              onChange={handleSearchForm}
              defaultValue={oParams.order_by}
            >
              {orderByValues?.map((oValue, iKey) => (
                <option key={iKey} value={oValue.value}>{oValue.display}</option>
              ))}
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="type"
              name="type"
              className="form-select mt-1 rounded-lg"
              onChange={handleSearchForm}
              defaultValue={oParams.type}
            >
              {animeTypeValues?.map((oValue, iKey) => (
                <option key={iKey} value={oValue.value}>{oValue.display}</option>
              ))}
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="status"
              name="status"
              className="form-select mt-1 rounded-lg"
              onChange={handleSearchForm}
              defaultValue={oParams.status}
            >
              {animeStatusValues?.map((oValue, iKey) => (
                <option key={iKey} value={oValue.value}>{oValue.display}</option>
              ))}
            </select>
          </div>
          <div className="p-1 lg:p-4">
            <select
              id="rating"
              name="rating"
              className="form-select mt-1 rounded-lg"
              onChange={handleSearchForm}
              defaultValue={oParams.rating}
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
              {bAscending ? (
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
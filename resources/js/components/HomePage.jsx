import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeNews, getTop10Anime, getTop10Seasonal, getUpcoming, selectAnimeNews } from "../features/AnimeSlice";
import NavBar from "./Common/NavBar";
import Upcoming from "./HomePageComponents/Upcoming";

const HomePage = () => {
  const dispatch = useDispatch();
  const aAnimeData = useSelector(selectAnimeNews);

  useEffect(() => {
    dispatch(getUpcoming());
    dispatch(getAnimeNews());
    dispatch(getTop10Seasonal());
    dispatch(getTop10Anime());
  }, [])

  return (
    <>
      <div>
        <NavBar/>
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div> */}
        <div className="grid grid-cols-1">
          <Upcoming/>

          <div className="bg-red-500 text-white h-24">
            <p>News</p>
          </div>
          <div className="bg-green-500 text-white h-24">
            <p>Top Seasonal</p>
          </div>
        </div>

        {/* <div className="flex flex-wrap flex-col">
          <div className="bg-lightBlue text-white h-26">
            <p>Upcoming</p>
          </div>
          <div className="bg-red-500 text-white h-26">
            <p>News</p>
          </div>
          <div className="bg-green-500 text-white h-26">
            <p>Top Seasonal</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeNews, getTop10Anime, getTop10Seasonal, getUpcoming, selectAnimeNews, selectLoading, setLoadingStatus } from "../features/AnimeSlice";
import NavBar from "./Common/NavBar";
import Upcoming from "./HomePageComponents/Upcoming";
import Loader from "./Common/Loader";
import News from "./HomePageComponents/News";
import TopSeasonal from "./HomePageComponents/TopSeasonal";

const HomePage = () => {
  const dispatch = useDispatch();
  const bLoading = useSelector(selectLoading);



  const getHomePageData = () => {
    dispatch(setLoadingStatus({value: true}));
    Promise.all([
      dispatch(getUpcoming()),
      dispatch(getAnimeNews()),
      dispatch(getTop10Seasonal()),
      dispatch(getTop10Anime())
    ]).then(() => {
      dispatch(setLoadingStatus({value: false}));
    });
  }

  useEffect(() => {
    getHomePageData();
  }, [])

  return (
    <>
      <div>
        {bLoading === true && (
          <Loader/>
        )}
        <NavBar/>
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div> */}
        <div className="grid grid-cols-1">
          <Upcoming/>

          <News/>

          <TopSeasonal/>

          <div className="bg-celeste text-white h-24">
            <p>Footer</p>
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
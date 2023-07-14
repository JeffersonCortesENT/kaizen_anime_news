import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeNews, getTop10Anime, getTop10Seasonal, selectAnimeNews } from "../features/AnimeSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const aAnimeData = useSelector(selectAnimeNews);

  useEffect(() => {
    dispatch(getAnimeNews());
    dispatch(getTop10Seasonal());
    dispatch(getTop10Anime());
  }, [])

  return (
    <>
      <div>
        <h1>Hello Everyone!</h1>
      </div>
    </>
  );
}

export default HomePage;
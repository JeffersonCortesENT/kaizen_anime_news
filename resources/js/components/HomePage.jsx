import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeNews, getTop10Anime, getTop10Seasonal, getUpcoming, selectAnimeNews, selectLoading, setLoadingStatus } from "../features/AnimeSlice";
import NavBar from "./Common/NavBar";
import Upcoming from "./HomePageComponents/Upcoming";
import Loader from "./Common/Loader";
import News from "./HomePageComponents/News";
import TopSeasonal from "./HomePageComponents/TopSeasonal";
import Footer from "./HomePageComponents/Footer";
import VideoPlayerModal from "./Common/VideoPlayerModal";

const HomePage = () => {
  const dispatch = useDispatch();
  const bLoading = useSelector(selectLoading);
  const [bShowModal, setShowModal] = useState(false);
  const [oVideoUrl, setVideoUrl] = useState({});

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
        <NavBar sCurrentPage={'Home'}/>
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div> */}
        <div className="grid grid-cols-1">
          <Upcoming/>

          <News/>

          <TopSeasonal
            setShowModal={setShowModal}
            setVideoUrl={setVideoUrl}
          />

          <Footer/>

          <VideoPlayerModal 
            bShowModal={bShowModal}
            setShowModal={setShowModal}
            oVideoUrl={oVideoUrl}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeNews, getTop10Anime, getTop10Seasonal, getUpcoming, selectAnimeNews, selectLoading, setLoadingStatus } from "../features/AnimeSlice";
import NavBar from "./Common/NavBar";
import Upcoming from "./HomePageComponents/Upcoming";
import Loader from "./Common/Loader";
import News from "./HomePageComponents/News";
import TopSeasonal from "./HomePageComponents/TopSeasonal";
import Footer from "./HomePageComponents/Footer";
import sweetAlert from "../alertMessages";
import { ERROR_MULTIPLE_REQUESTS, ERROR_MULTIPLE_REQUESTS_MESSAGE, HOME } from "../constants";
import Modal from "./Common/Modal";
import ModalTrailer from "./HomePageComponents/ModalTrailer";

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
    ]).finally(() => {
      dispatch(setLoadingStatus({value: false}));
    }).catch(() => {
      sweetAlert.error(ERROR_MULTIPLE_REQUESTS, ERROR_MULTIPLE_REQUESTS_MESSAGE).then((oResult) => {
        if (oResult.isConfirmed === true) {
          window.location.reload();
        }
      });
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
        <NavBar sCurrentPage={HOME}/>
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div> */}
        <div className="grid grid-cols-1">
          <Upcoming/>

          <News/>

          <TopSeasonal
            setShowModal={setShowModal}
            setVideoUrl={setVideoUrl}
          />

          <Footer/>

          <Modal
            bShowModal={bShowModal}
            setShowModal={setShowModal}
            oContent={ <ModalTrailer sUrl={oVideoUrl.url} /> }
            sTitle={oVideoUrl.title}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
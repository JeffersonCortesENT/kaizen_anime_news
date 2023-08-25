import { useLocation, useParams } from "react-router";
import NavBar from "./Common/NavBar";
import { useEffect, useState } from "react";
import Footer from "./HomePageComponents/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeChars, getAnimeFull, getAnimePictures, getAnimeStaff, selectLoading, setLoadingStatus } from "../features/AnimeSlice";
import TitleSection from "./AnimeDetailsComponents/TitleSection";
import Loader from "./Common/Loader";
import SubDetailsSection from "./AnimeDetailsComponents/SubDetailsSection";
import TrailerSection from "./AnimeDetailsComponents/TrailerSection";
import sweetAlert from "../alertMessages";
import { ERROR_MULTIPLE_REQUESTS, ERROR_MULTIPLE_REQUESTS_MESSAGE } from "../constants";
import CharactersSection from "./AnimeDetailsComponents/CharactersSection";
import Modal from "./Common/Modal";
import CastModal from "./AnimeDetailsComponents/CastModal";
import StaffSection from "./AnimeDetailsComponents/StaffSection";
import StaffModal from "./AnimeDetailsComponents/StaffModal";



const AnimeDetails = () => {
  const dispatch = useDispatch();
  const [bLoading, setLoading] = useState(true);
  const { mal_id } = useParams();
  const [bShowCastModal, setShowCastModal] = useState(false);
  const [bShowStaffModal, setShowStaffModal] = useState(false);
  const MAX_RETRIES = 3;
  const iWidth = window.innerWidth;
  const oBreakPoints = {
    sm: (iWidth >= 640 && iWidth < 768),
    md: (iWidth >= 768 && iWidth < 1024),
    lg: (iWidth >= 1024 && iWidth < 1280),
    xl: (iWidth >= 1280),
  };

  const retryPromise = async (promise, retries) => {
    try {
      return await promise();
    } catch (oError) {
      if (retries > 0) {
        console.error(`Retrying due to error: ${oError}`);
        return retryPromise(promise, retries - 1);
      }
      throw oError; // If no retries left, throw the error
    }
  };

  const getAnimeData = async () => {
    const aPromises = [
      dispatch(getAnimeFull(mal_id)),
      dispatch(getAnimeChars(mal_id)),
      dispatch(getAnimeStaff(mal_id)),
    ];

    await Promise.all(
      aPromises.map(promise => retryPromise(() => promise, MAX_RETRIES))
    ).finally(() => {
      setLoading(false);
    }).catch(() => {
      sweetAlert.error(ERROR_MULTIPLE_REQUESTS, ERROR_MULTIPLE_REQUESTS_MESSAGE).then((oResult) => {
        if (oResult.isConfirmed === true) {
          window.location.reload();
        }
      });
    });
  }

  useEffect(() => {
    getAnimeData();
  }, [mal_id]);

  return (
    <>
      <div>
        {
          bLoading === true ? (
            <Loader/>
          ) : (
            <>
              <NavBar/>
                <TitleSection/>
                <div className="flex flex-col md:flex-row justify-between bg-light-navy p-4">
                  <SubDetailsSection/>
                  <div className="flex flex-col w-full">
                    <TrailerSection/>
                    <CharactersSection
                      setShowCastModal={setShowCastModal}
                      oBreakPoints={oBreakPoints}
                    />
                    <StaffSection
                      setShowStaffModal={setShowStaffModal}
                      oBreakPoints={oBreakPoints}
                    />
                  </div>
                </div>
              <Footer/>

              <Modal
                bShowModal={bShowCastModal}
                setShowModal={setShowCastModal}
                oContent={ <CastModal/> }
                sTitle={'Characters and Voice Actors'}
              />
              <Modal
                bShowModal={bShowStaffModal}
                setShowModal={setShowStaffModal}
                oContent={ <StaffModal/> }
                sTitle={'Staff'}
              />
            </>
          )
        }
      </div>
    </>
  );
}

export default AnimeDetails;
import { useParams } from "react-router";
import NavBar from "./Common/NavBar";
import { useEffect } from "react";
import Footer from "./HomePageComponents/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeChars, getAnimeFull, getAnimePictures, getAnimeStaff, selectLoading, setLoadingStatus } from "../features/AnimeSlice";
import TitleSection from "./AnimeDetailsComponents/TitleSection";
import Loader from "./Common/Loader";
import SubDetailsSection from "./AnimeDetailsComponents/SubDetailsSection";
import TrailerSection from "./AnimeDetailsComponents/TrailerSection";



const AnimeDetails = () => {
  const dispatch = useDispatch();
  const bLoading = useSelector(selectLoading);
  const { mal_id } = useParams();
  const MAX_RETRIES = 3;

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
      dispatch(setLoadingStatus({value: false}));
    }).catch((oError) => {

    });
  }

  useEffect(() => {
    getAnimeData();
  }, [mal_id]);

  return (
    <>
      {
        bLoading === true ? 
        (
          <Loader/>
        )
        :
        (
          <>
            <NavBar/>
              <TitleSection/>
              <div className="flex flex-col md:flex-row justify-between bg-light-navy p-4">
                <SubDetailsSection/>
                <div className="flex flex-col items-center justify-center w-full h-32">
                  <TrailerSection/>
                  <div className="flex w-full h-32 bg-light-gray-blue">
                  </div>
                  <div className="flex w-full h-32 bg-silver-shade">
                  </div>
                </div>
              </div>
            <Footer/>
          </>
        )
      }
    </>
  );
}

export default AnimeDetails;
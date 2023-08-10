import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Common/NavBar";
import Footer from "./HomePageComponents/Footer";
import { getAnimeSearch, selectLoading, selectSearchParams, setLoadingStatus } from "../features/AnimeSlice";
import Loader from "./Common/Loader";
import SearchSection from "./AnimeListComponents/SearchSection";
import AnimeTable from "./AnimeListComponents/AnimeTable";
import { useEffect } from "react";

const AnimeList = () => {
  const dispatch = useDispatch();
  // const bLoading = useSelector(selectLoading);
  const bLoading = useSelector(selectLoading);
  const oParams = useSelector(selectSearchParams);

  const searchAnime = () => {
    dispatch(setLoadingStatus({value: true}));
    Promise.all([
      dispatch(getAnimeSearch(oParams)),
    ]).then(() => {
      dispatch(setLoadingStatus({value: false}));
    });
  }

  useEffect(() => {
    searchAnime();
  }, []);

  return (
    <>
      <div>
        {bLoading === true && (
          <Loader/>
        )}
        <NavBar sCurrentPage={'Search'}/>

        <div className="grid grid-cols-1">
          <SearchSection/>
          <AnimeTable/>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default AnimeList;
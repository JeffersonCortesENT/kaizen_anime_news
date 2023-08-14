import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Common/NavBar";
import Footer from "./HomePageComponents/Footer";
import { getAnimeSearch, selectLoading, selectSearchParams, setLoadingStatus } from "../features/AnimeSlice";
import Loader from "./Common/Loader";
import SearchSection from "./AnimeListComponents/SearchSection";
import AnimeTable from "./AnimeListComponents/AnimeTable";
import { useEffect, useState } from "react";
import { SEARCH } from "../constants";

const AnimeList = () => {
  const dispatch = useDispatch();
  const bLoading = useSelector(selectLoading);
  const oParams = useSelector(selectSearchParams);
  const [bTableLoading, setLoading] = useState(false);

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
        <NavBar sCurrentPage={SEARCH}/>

        <div className="grid grid-cols-1">
          <SearchSection
            setLoading={setLoading}
          />
          <AnimeTable
            bTableLoading={bTableLoading}
            setLoading={setLoading}
          />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default AnimeList;
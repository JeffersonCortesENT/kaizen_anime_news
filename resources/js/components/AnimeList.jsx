import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Common/NavBar";
import Footer from "./HomePageComponents/Footer";
import { selectLoading } from "../features/AnimeSlice";
import Loader from "./Common/Loader";
import SearchSection from "./AnimeListComponents/SearchSection";

const AnimeList = () => {
  const dispatch = useDispatch();
  // const bLoading = useSelector(selectLoading);
  const bLoading = false;

  return (
    <>
      {bLoading === true && (
        <Loader/>
      )}
      <NavBar sCurrentPage={'Search'}/>

      <div className="grid grid-cols-1">
        <SearchSection/>
        <div className="w-1/3 h-16 bg-cyan-500 mb-4 rounded"></div>
        <div className="w-1/3 h-16 bg-indigo-500 mb-4 rounded"></div>
      {/* Add more section boxes as needed */}
      </div>

      <Footer/>
    </>
  );
}

export default AnimeList;
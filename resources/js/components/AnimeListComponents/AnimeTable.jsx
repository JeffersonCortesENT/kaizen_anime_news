import { useSelector } from "react-redux";
import { selectAnimeSearch, selectTopSeasonal } from "../../features/AnimeSlice";
import Pagination from "../Common/Pagination";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AnimeTable = ({ bTableLoading, setLoading }) => {
  const aAnime = useSelector(selectAnimeSearch);
  const navigate = useNavigate;

  return (
    <>
      <div className="bg-light-purple p-6">
      {bTableLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="flex items-center bg-white bg-opacity-60 p-4 rounded-lg shadow-lg">
          <svg aria-hidden="true" className="animate-spin h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
      )}
      <div className="flex flex-wrap -mx-3">
        {
          aAnime.length > 0 ? 
          (
            aAnime?.map((aData, iKey) => (
              <a href={`/anime/${aData.mal_id}`} key={iKey} className="w-1/4 h-[100px] sm:h-[200px] md:h-[200px] lg:h-[600px] p-3 cursor-pointer">
                <div className="relative h-full">
                  <img src={aData.images.webp.large_image_url} className="w-full h-full object-cover" alt={aData.title}/>
                  <div className="absolute bottom-0 left-0 w-full bg-gray-500/50 text-teal-50 hidden sm:block" style={{ maxHeight: "25%" }}>
                    <div className="px-4 py-3 flex flex-col h-3/5">
                      <h3 className="font-sans font-bold text-sm md:text-lg lg:text-2xl truncate">{aData.title}</h3>
                      <div className="my-2 text-xs md:text-base lg:text-lg hidden lg:block">
                        <p className="line-clamp-3">{aData.synopsis}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-500/50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-sans font-bold text-sm md:text-base lg:text-xl text-center">{aData.title}</h3>
                  </div>
                </div>
              </a>
              // <Link to={`/anime/${aData.mal_id}`} key={iKey} className="w-1/4 h-[100px] sm:h-[200px] md:h-[200px] lg:h-[600px] p-3 cursor-pointer">
                
              // </Link>
            ))
          ) 
          : 
          (
            <div className="flex grow items-center justify-center h-[400px] lg:h-[500px]">
              <h1 className="text-center font-bold text-teal-50 text-3xl">No results found!</h1>
            </div>
          )
        }
      </div>
      {
        aAnime.length > 0 && (
          <div className="flex flex-row justify-center items-center">
            <Pagination
              setLoading={setLoading}
            />
          </div>
        )
      }
    </div>
    </>
  );
}

export default AnimeTable;
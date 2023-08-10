import { useSelector } from "react-redux";
import { selectAnimeSearch, selectTopSeasonal } from "../../features/AnimeSlice";
import Pagination from "../Common/Pagination";

const AnimeTable = () => {
  const aAnime = useSelector(selectAnimeSearch);

  return (
    <>
      <div className="bg-light-purple p-6">
        <div className="flex flex-wrap -mx-3">
          {aAnime?.map((aData, iKey) => (
            // <div key={iKey} className="w-1/4 p-4 cursor-pointer">
            //   <div className="relative">
            //     <img src={aData.images.webp.large_image_url} className="w-full" alt={aData.title}/>
            //     <div className="absolute bottom-0 left-0 w-full bg-gray-500/50 text-teal-50 hidden sm:block" style={{ maxHeight: "25%" }}>
            //       <div className="px-4 py-3 flex flex-col h-full">
            //         <h3 className="font-sans font-bold text-sm md:text-lg lg:text-2xl truncate">{aData.title}</h3>
            //         <div className="my-2 text-xs md:text-base lg:text-lg hidden lg:block">
            //           <p className="line-clamp-3">{aData.synopsis}</p>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="absolute inset-0 flex items-center justify-center bg-gray-500/50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            //       <h3 className="font-sans font-bold text-sm md:text-base lg:text-xl text-center">{aData.title}</h3>
            //     </div>
            //   </div>
            // </div>
            <div key={iKey} className="w-1/4 h-[100px] sm:h-[200px] md:h-[200px] lg:h-[600px] p-3 cursor-pointer">
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
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center">
          <Pagination/>
        </div>
      </div>
    </>
  );
}

export default AnimeTable;
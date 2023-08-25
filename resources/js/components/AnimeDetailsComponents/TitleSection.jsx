import { useSelector } from "react-redux";
import { selectAnimeFull, selectAnimePictures } from "../../features/AnimeSlice";
import { useEffect, useState } from "react";
import { StarIcon, ChartBarIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import numeral from 'numeral';

const TitleSection = () => {
  const oAnimeFull = useSelector(selectAnimeFull);
  const [bExpanded, setExpanded] = useState(false);
  const mLineHeight = 1.5; // Adjust this based on your design

  const toggleReadMore = () => {
    setExpanded(!bExpanded);
  };

  useEffect(() => {
    if (oAnimeFull.synopsis) {
      const iElementHeight = oAnimeFull.synopsis.clientHeight;
      const mMaxElementHeight = mLineHeight * 5;
      setExpanded(iElementHeight > mMaxElementHeight);
    }
  }, [oAnimeFull]);

  return (
    <>
      <div 
        className="flex flex-col bg-light-navy md:flex-row md:items-start p-4 md:p-8"
      >
        {/* Left Section - Image Frame */}
        <div className="w-70 h-64 md:w-80 md:h-96 border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src={oAnimeFull.images.jpg.large_image_url}
            alt={oAnimeFull.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 p-4 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-teal-50">{oAnimeFull.title}</h2>
          <p className="text-teal-50 mb-2 md:text-lg">
            <span className="font-semibold">Genre:</span>
            {
              oAnimeFull.genres.length > 0 ? 
              (
                <em>
                  {
                    oAnimeFull.genres?.map((oGenre, iGenreKey) => (
                      ' ' + oGenre.name + ((iGenreKey + 1) < oAnimeFull.genres.length ? (', '): (''))
                    ))
                  }
                </em>
              ) 
              : 
              'Genre not available.'
            }
          </p>
          <p className={`text-teal-50 mb-2 md:text-lg text-justify ${
            bExpanded ? 'max-h-none' : 'line-clamp-5'
          }`}>
            <span className="font-semibold">Synopsis:</span> {oAnimeFull.synopsis}
          </p>
          {oAnimeFull.synopsis.length > 100 && (
            <button
              onClick={toggleReadMore}
              className={`text-gray-500 underline`}
            >
              {bExpanded ? 'Read less' : 'Read more...'}
            </button>
          )}

          <div className="mt-4 flex flex-row text-teal-50">
            {
              oAnimeFull.score !== null && (
                <div className="flex items-center mr-4 space-x-2">
                  <StarIcon className="w-5 h-5 text-yellow"/> 
                  <span>{ oAnimeFull.score }</span>
                </div>
              )
            }
            {
              oAnimeFull.popularity !== null && (
                <div className="flex items-center mr-4 space-x-2">
                  <ChartBarIcon className="w-5 h-5 text-yellow"/> 
                  <span>{ oAnimeFull.popularity }</span>
                </div>
              )
            }
            {
              oAnimeFull.members !== null && (
                <div className="flex items-center space-x-2">
                  <UserGroupIcon className="w-5 h-5 text-yellow"/> 
                  <span>{ numeral(oAnimeFull.members).format() }</span>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleSection;
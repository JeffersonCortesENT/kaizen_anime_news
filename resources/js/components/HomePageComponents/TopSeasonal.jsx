import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from "react-redux";
import { selectTopSeasonal } from "../../features/AnimeSlice";
import { isMobile } from 'react-device-detect';

const TopSeasonal = ({ setShowModal, setVideoUrl }) => {
  const aSeason = useSelector(selectTopSeasonal);

  const oResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1920 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1919, min: 954 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 880, min: 521 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  //Device Detector package: https://www.npmjs.com/package/react-device-detect

  const openVideoModal = (sUrl) => {
    setShowModal(true);
    setVideoUrl(sUrl);
  }
  

  return (
    <>
      <div className="bg-light-purple p-6 sm:content-center">
        <h1 className="text-white text-4xl font-bold font-sans text-center py-3">This Season</h1>
        <Carousel
          autoPlay={isMobile === false}
          autoPlaySpeed={5000}
          responsive={oResponsive}
          keyBoardControl={true}
          rewind={true}
          rewindWithAnimation={true}
        >
          {
            aSeason?.map((aData, iKey) => (      
            <div key={iKey} className="max-w-sm bg-white border m-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:shadow-black">
                <a>
                    <img className="rounded-t-lg select-none" src={aData.images.webp.large_image_url} alt="" />
                </a>
                <div className="p-5" title={aData.title}>
                    <a target="_blank" href={aData.url}>
                        <h5 className="mb-2 text-base xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{aData.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2" title={aData.synopsis}>{aData.synopsis}</p>
                    <a onClick={ () => { openVideoModal({url: aData.trailer.embed_url, title: aData.title}) } } className="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Watch Trailer
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </>
  );
}

export default TopSeasonal;


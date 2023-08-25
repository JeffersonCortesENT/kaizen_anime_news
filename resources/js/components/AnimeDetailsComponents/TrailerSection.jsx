import { useSelector } from "react-redux";
import { selectAnimeFull } from "../../features/AnimeSlice";
import { useEffect, useState } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const TrailerSection = () => {
  const oAnimeFull = useSelector(selectAnimeFull);
  const [iTrailerViewPort, setTrailerViewPort] = useState(100);
  const oStreamingServices = {
    'Crunchyroll': '/images/streaming/crunchyroll.png',
    'Funimation': '/images/streaming/funimation.png',
    'Netflix': '/images/streaming/netflix.png',
    'Animax Korea': '/images/streaming/animax.png',
    'Animax Mongolia': '/images/streaming/animax.png',
    'Bilibili Global': '/images/streaming/bilibili.png',
    'iQIYI': '/images/streaming/iqiyi.png',
  };

  const getViewPort = () => {
    const iWidth = window.innerWidth;
    const oBreakPoints = {
      sm: (iWidth >= 640 && iWidth < 768),
      md: (iWidth >= 768 && iWidth < 1024),
      lg: (iWidth >= 1024 && iWidth < 1280),
      xl: (iWidth >= 1280),
    };

    if (oBreakPoints.xl === true || oBreakPoints.lg === true) {
      setTrailerViewPort(60);
    } else if (oBreakPoints.md === true || oBreakPoints.sm === true) {
      setTrailerViewPort(100);
    }
  };

  useEffect(() => {
    getViewPort();
  }, [])

  return (
    <>
      {
        (oAnimeFull.trailer.embed_url !== null || oAnimeFull.streaming.length > 0) && (
          <>
            <div className="flex flex-col w-full p-6 justify-center items-center bg-dark-blue-gray">
              { 
                oAnimeFull.trailer.embed_url !== null && (
                  <div className="aspect-wrapper" style={{ width: iTrailerViewPort + '%', height: 'calc('+ iTrailerViewPort +'vw * 9 / 16)' }}>
                    <iframe
                      src={oAnimeFull.trailer.embed_url.replace('autoplay=1', 'autoplay=0')}
                      className="w-full h-full"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) 
              }
              {
                oAnimeFull.streaming.length > 0 && (
                  <>
                    <div className="text-teal-50 my-3">
                      <span className="font-bold">Available on: </span>
                    </div>
                    <div className="flex flex-row flex-wrap justify-between space-x-4">
                      {
                        oAnimeFull.streaming?.map((oStream, iKey) => (
                          typeof oStreamingServices[oStream.name] === 'undefined' ? 
                          (
                            <a key={iKey} href={oStream.url} target="_blank" rel="noopener noreferrer">
                              <PlayCircleIcon className="w-7 h-7 lg:w-10 lg:h-10 text-teal-50" alt={oStream.name}/>
                              <span className="text-sm">{oStream.name}</span>
                            </a>
                          )
                          :
                          (
                            <a key={iKey} href={oStream.url} target="_blank" rel="noopener noreferrer">
                              <img src={oStreamingServices[oStream.name]} alt={oStream.name} className="w-7 h-7 lg:w-10 lg:h-10" />
                            </a>
                          )
                        ))
                      }
                    </div>
                  </>
                )
              }
            </div>
          </>
        )
      }
    </>
  );
}

export default TrailerSection;
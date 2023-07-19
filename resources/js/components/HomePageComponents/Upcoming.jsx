import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useSelector } from "react-redux";
import { selectUpcoming } from "../../features/AnimeSlice";

const Upcoming = () => {
  const aUpcoming = useSelector(selectUpcoming);

  return (
    <>
      <div className="bg-header-upcoming p-5">
        <h1 className="text-teal-50 text-4xl font-bold font-sans text-center py-3">Most Anticipated</h1>
        <Splide aria-label="My Favorite Images"
            options={{
              autoplay: true,
              type: "fade",
          }}
        >
        {aUpcoming?.map((aData, iKey) => (
            <SplideSlide key={iKey}>
              <div className="container mx-auto">
                <div className="hidden flex flex-wrap gap-x-3 p-6 h-full md:flex justify-center">
                  <div className="h-full">
                    <img src={aData.images.webp.large_image_url} alt={aData.title}/>
                  </div>
                  <div className="text-teal-50 w-1/2 md:text-center xl:text-left">
                    <h3 className="font-sans font-bold text-5xl">{aData.title}</h3>
                    <div className="my-5 text-xl">
                      <p className="my-3 max-h-52 w-full line-clamp-4">{aData.synopsis}</p>
                      <p>{aData.type}</p>
                      {
                        aData.themes.length > 0 ? (
                          <p>
                            {
                              aData.themes?.map((aTheme, iThemeKey) => (
                                aTheme.name + ((iThemeKey + 1) < aData.themes.length ? (', '): (''))
                              ))
                            }
                          </p>
                        ) : (
                          <p>Themes not available</p>
                        )
                      }
                      <p>{aData.aired.string}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Version */}
                <div className="w-full relative md:hidden sm:block"> 
                  <img src={aData.images.webp.large_image_url} className="w-full" alt={aData.title}/> 
                  <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full text-teal-50"> 
                    <h3 className="font-sans font-bold text-2xl">{aData.title}</h3>
                    <div className="sm:my-2 md:my-3 text-lg">
                      <p className="line-clamp-2">{aData.synopsis}</p>
                      <p>{aData.type}</p>
                      {
                        aData.themes.length > 0 ? (
                          <p>
                            {
                              aData.themes?.map((aTheme, iThemeKey) => (
                                aTheme.name + ((iThemeKey + 1) < aData.themes.length ? (', '): (''))
                              ))
                            }
                          </p>
                        ) : (
                          <p>Themes not available</p>
                        )
                      }
                      <p>{aData.aired.string}</p>
                    </div>
                  </div> 
                </div>
              </div>
            </SplideSlide>
          ))}  
        </Splide> 
      </div>
    </>
  );
}

export default Upcoming;
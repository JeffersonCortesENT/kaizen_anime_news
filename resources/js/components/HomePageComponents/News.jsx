import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from "react-redux";
import { selectAnimeNews } from "../../features/AnimeSlice";


const News = () => {
  const aNews = useSelector(selectAnimeNews);

  //Reference for Carousel used in this component: https://www.npmjs.com/package/react-multi-carousel
  const oResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1170 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    console.log(aNews);
  })

  return (
    <>
      <div className="bg-white p-6">
      <h1 className="text-black text-4xl font-bold font-sans text-center py-3">Anime and Manga News</h1>
        <Carousel responsive={oResponsive}>
            {
              aNews?.map((oNews, iKey) => (
                <div key={iKey} className="p-4 md:h-80" title={oNews.title}>
                  <a href={oNews.link} target="_blank" className="h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-40 xl:w-48 md:rounded-none md:rounded-l-lg" title={oNews.title} src={oNews.thumbnail} alt=""/>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 xs:text-sm md:text-base break-normal font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{oNews.title}</h5>
                          <p className="mb-3 xs:text-sm md:text-base break-normal font-normal text-gray-700 dark:text-gray-400 line-clamp-4">{oNews.description}</p>
                      </div>
                  </a>
                </div>
              ) )
            }
        </Carousel>
      </div>
    </>
  );
}

export default News;
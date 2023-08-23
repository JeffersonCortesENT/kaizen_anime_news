import { useSelector } from "react-redux";
import { selectAnimeChars } from "../../features/AnimeSlice";
import { useEffect, useState } from "react";

const CharactersSection = () => {
  const oAnimeChars = useSelector(selectAnimeChars);
  const [aDisplayedChars, setDisplayedChars] = useState([]);

  const getItemCount = () => {
    const iWidth = window.innerWidth;
    const oBreakPoints = {
      sm: (iWidth >= 640 && iWidth < 768),
      md: (iWidth >= 768 && iWidth < 1024),
      lg: (iWidth >= 1024 && iWidth < 1280),
      xl: (iWidth >= 1280),
    };

    if (oBreakPoints.xl === true) {
      return 6;
    } else if (oBreakPoints.lg === true) {
      return 4;
    }

    return 3;
  }

  useEffect(() => {
    const oDeepCopy = JSON.parse(JSON.stringify(oAnimeChars));
    setDisplayedChars(oDeepCopy.slice(0, getItemCount()));
  }, [])

  return (
    <>
      <div className="flex flex-col lg:flex-row flex-wrap w-full p-5 justify-center gap-4 lg:gap-12 xl:gap-10 bg-light-gray-blue">
        <span className="w-full text-center font-bold text-teal-50 text-lg lg:text-xl">Characters and Voice Actors</span>
        {
          aDisplayedChars?.map((oChar, iKey) => (
          <div key={iKey} className="flex flex-row w-full lg:w-1/3 xl:w-1/4 min-w-0 h-20 lg:h-32 bg-teal-50 relative">
            <img 
              src={oChar.character.images.webp.image_url}
              alt={oChar.character.name}
              className="h-full object-cover self-start"
            />
            <div className="ml-2 flex flex-col justify-between h-full">
              <p className="font-medium text-xs lg:text-sm">{oChar.character.name}</p>
              <p className="font-light text-xs lg:text-sm text-gray-500">{oChar.role}</p>
            </div>
            <div className="grow"></div>
            <div className="mr-2 flex flex-col justify-between h-full">
              <p className="font-medium text-right text-xs lg:text-sm">{oChar.voice_actors[0].person.name}</p>
              <p className="font-light text-right text-xs lg:text-sm text-gray-500">{oChar.voice_actors[0].language}</p>
            </div>
            <img 
              src={oChar.voice_actors[0].person.images.jpg.image_url}
              alt={oChar.voice_actors[0].person.name}
              className="h-full object-cover items-end"
            />
          </div>
          ))
        }
        <span className="w-full text-center font-bold text-teal-50 text-base lg:text-lg">See more...</span>
      </div>
    </>
  );
}

export default CharactersSection;
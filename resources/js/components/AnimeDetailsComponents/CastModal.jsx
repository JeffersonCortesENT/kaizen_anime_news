import { useSelector } from "react-redux";
import { selectAnimeChars } from "../../features/AnimeSlice";
import Dropdown from "../Common/Dropdown";
import { useState, useEffect } from "react";

const CastModal = () => {
  const oCast = useSelector(selectAnimeChars);
  const aLanguages = [
    {
      item: 'japanese',
      value: 'Japanese'
    },
    {
      item: 'english',
      value: 'English',
    },
    {
      item: 'portuguese',
      value: 'Portuguese (BR)',
    },
    {
      item: 'spanish',
      value: 'Spanish',
    },
    {
      item: 'italian',
      value: 'Italian',
    },
    {
      item: 'french',
      value: 'French',
    }
  ];
  const [aDisplayedCast, setDisplayedCast] = useState([]);
  const [sSelectedLang, setLanguage] = useState('Japanese');

  const filterByLanguage = () => {
    const oDeepCopy = JSON.parse(JSON.stringify(oCast));
    oDeepCopy.map((aData) => {
      aData.voice_actors = aData.voice_actors?.filter(oVA => oVA.language === sSelectedLang);
    });
    setDisplayedCast(oDeepCopy);
  }

  useEffect(() => {
    filterByLanguage();
  }, [oCast]);

  useEffect(() => {
    filterByLanguage();
  }, [sSelectedLang])

  return (
    <>
      <div className="bg-teal-50 p-4 h-64 lg:h-96 overflow-y-auto">
        <div className="flex flex-col gap-x-0 lg:gap-x-2 gap-y-3">
          <div className="w-full lg:w-32 lg:ml-auto relative">
            <Dropdown
              sTitle={'Language'}
              aList={aLanguages}
              oFunction={setLanguage}
              sCurrentValue={sSelectedLang}
            />
          </div>

          {
            aDisplayedCast?.map((oChar, iKey) => (
              <div key={iKey} className="flex flex-row w-55 md:w-full min-w-0 h-20 lg:h-32 bg-white border-black relative">
                <img 
                  src={oChar.character.images.webp.image_url}
                  alt={oChar.character.name}
                  className="w-[30%] md:w-[20%] lg:w-[20%] xl:w-[15%] h-full object-cover self-start"
                />
                <div className="ml-2 flex flex-col justify-between h-full">
                  <p className="font-medium text-[0.5rem] lg:text-sm">{oChar.character.name}</p>
                  <p className="font-light text-[0.5rem] lg:text-sm text-gray-500">{oChar.role}</p>
                </div>
                <div className="grow"></div>
                {
                  oChar.voice_actors.length > 0 && (
                    <>
                      <div className="mr-2 flex flex-col justify-between h-full">
                        <p className="font-medium text-right text-[0.5rem] lg:text-sm">{oChar.voice_actors?.[0]?.person?.name}</p>
                        <p className="font-light text-right text-[0.5rem] lg:text-sm text-gray-500">{oChar.voice_actors?.[0]?.language}</p>
                      </div>
                      <img 
                        src={oChar.voice_actors?.[0]?.person?.images?.jpg?.image_url}
                        alt={oChar.voice_actors?.[0]?.person?.name}
                        className="w-[30%] md:w-[20%] lg:w-[20%] xl:w-[15%] h-full object-cover items-end"
                      />
                    </>
                  )
                }
              </div>
              ))
          }
        </div>
      </div>
    </>
  );
}

export default CastModal;
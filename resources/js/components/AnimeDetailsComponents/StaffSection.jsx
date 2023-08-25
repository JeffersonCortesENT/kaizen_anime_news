import { useSelector } from "react-redux";
import { selectAnimeStaff } from "../../features/AnimeSlice";
import { useEffect, useState } from "react";

const StaffSection = ({ setShowStaffModal, oBreakPoints }) => {
  const oStaff = useSelector(selectAnimeStaff);
  const [aDisplayedStaff, setDisplayedStaff] = useState([]);

  const getItemCount = () => {
    if (oBreakPoints.xl === true) {
      return 6;
    } else if (oBreakPoints.md === true || oBreakPoints.lg === true) {
      return 4;
    }

    return 3;
  }

  const openStaffModal = () => {
    console.log('Hello');
  }

  useEffect(() => {
    const oDeepCopy = JSON.parse(JSON.stringify(oStaff));
    setDisplayedStaff(oDeepCopy.slice(0, getItemCount()));
  }, [oStaff])

  return (
    <>
      <div className="flex flex-row flex-wrap w-full p-5 justify-center gap-4 lg:gap-12 xl:gap-10 bg-silver-shade">
        <span className="w-full text-center font-bold text-white text-lg lg:text-xl">Staff</span>
        {
          aDisplayedStaff.length === 0 ?
          (
            <span className="text-center m-10 text-lg font-semi-bold text-white">Data unavailable!</span>
          )
          :
          (
            aDisplayedStaff?.map((oData, iKey) => (
              <div key={iKey} className="flex flex-row w-full md:w-1/3 lg:w-1/4 xl:w-1/6 min-w-0 h-20 lg:h-32 bg-white relative">
                <img 
                  src={oData.person.images.jpg.image_url}
                  alt={oData.person.name}
                  className="w-[20%] md:w-[30%] lg:[w-40%] xl:w-[40%] h-full object-cover self-start"
                />
                <div className="ml-2 flex flex-col justify-between h-full">
                  <p className="font-medium text-[0.5rem] md:text-sm">{oData.person.name}</p>
                  <p className="font-light text-[0.5rem] md:text-sm text-gray-500">{oData.positions?.[0]}</p>
                </div>
              </div>
            ))
          )
        }
        <a onClick={() => { setShowStaffModal(true) }} className="w-full text-center font-bold text-white text-base lg:text-lg cursor-pointer">
          <span>See more...</span>
        </a>
      </div>
    </>
  );
}

export default StaffSection;
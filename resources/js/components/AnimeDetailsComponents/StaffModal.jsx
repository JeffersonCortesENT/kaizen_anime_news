import { useSelector } from "react-redux";
import { selectAnimeStaff } from "../../features/AnimeSlice";

const StaffModal = () => {
  const oStaff = useSelector(selectAnimeStaff);

  return (
    <>
      <div className="bg-teal-50 p-4 h-64 lg:h-96 overflow-y-auto">
        <div className="flex flex-row flex-wrap justify-center gap-x-0 lg:gap-x-2 gap-y-3">
          {
            oStaff?.map((oData, iKey) => (
              <div key={iKey} className="flex flex-row w-full lg:w-[45%] xl:1/4 min-w-0 h-20 lg:h-32 mx-2 bg-white relative">
                <img 
                  src={oData.person.images.jpg.image_url}
                  alt={oData.person.name}
                  className="w-[30%] md:w-[20%] lg:w-[35%] h-full object-cover self-start"
                />
                <div className="ml-2 flex flex-col justify-between h-full">
                  <p className="font-medium text-[0.5rem] md:text-sm">{oData.person.name}</p>
                  <p className="font-light text-[0.5rem] md:text-sm text-gray-500">{oData.positions?.[0]}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default StaffModal;
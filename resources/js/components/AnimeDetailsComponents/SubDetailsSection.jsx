import { useSelector } from "react-redux";
import { selectAnimeFull } from "../../features/AnimeSlice";

const SubDetailsSection = () => {
  const oAnimeFull = useSelector(selectAnimeFull);

  return (
    <>
      <div className="flex flex-row md:flex-col flex-wrap justify-between bg-mid-blue text-xs lg:text-sm text-teal-50 p-4 w-full md:w-40">
        <div className="mb-4">
          <p className="font-bold">Rating</p>
          <p className="font-normal">{ oAnimeFull.rating }</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Status</p>
          <p className="font-normal">{ oAnimeFull.status }</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Format</p>
          <p className="font-normal">{ oAnimeFull.type }</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Aired</p>
          <p className="font-normal">{ oAnimeFull.aired.string }</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Studios</p>
          <ul className="list-inside">
            {
              oAnimeFull.studios?.map((oStudio, iKey) => (
                <li key={iKey} className="list-disc">
                  {oStudio.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-bold">Producers</p>
          <ul className="list-inside">
            {
              oAnimeFull.producers?.map((oProducer, iKey) => (
                <li key={iKey} className="list-disc">
                  {oProducer.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-bold">Alternate Titles</p>
          <ul className="list-inside">
            {
              oAnimeFull.titles?.map((oTitle, iKey) => (
                <li key={iKey} className="list-disc">
                  {oTitle.title}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default SubDetailsSection;
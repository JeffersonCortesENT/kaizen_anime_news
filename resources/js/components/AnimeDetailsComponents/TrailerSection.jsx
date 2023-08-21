import { useSelector } from "react-redux";
import { selectAnimeFull } from "../../features/AnimeSlice";

const TrailerSection = () => {
  const oAnimeFull = useSelector(selectAnimeFull);

  return (
    <>
      <div className="flex w-full h-full bg-dark-blue-gray">
        {/* <div className="w-full h-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={oAnimeFull.trailer.embed_url}
            className="absolute inset-0 w-full h-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
        <div className="relative w-2/3 h-96 rounded xl:block">
            <iframe
                src={oAnimeFull.trailer.embed_url}
                title="hehe"
                frameborder="0"
                className="absolute top-0 bottom-0 w-full h-full"
            ></iframe>
        </div>
      </div>
    </>
  );
}

export default TrailerSection;
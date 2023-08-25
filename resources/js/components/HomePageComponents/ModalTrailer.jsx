
const ModalTrailer = ({ sUrl }) => {

  return (
    <>
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={sUrl} className="w-full aspect-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </>
  );
}

export default ModalTrailer;
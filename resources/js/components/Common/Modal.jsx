
const Modal = ({ bShowModal, setShowModal, oContent, sTitle }) => {

  return (
    <>
      {
        bShowModal && (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-64 md:w-1/2 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="bg-navy border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-sm md:text-base font-semibold text-teal-50">
                      {sTitle}
                    </h3>
                  </div>
                  {/*body*/}
                  {
                    oContent
                  }
                  {/*footer*/}
                  <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-teal-50 background-transparent font-bold uppercase px-6 py-2 text-sm lg:text-base outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )
      }
    </>
  );
}

export default Modal;
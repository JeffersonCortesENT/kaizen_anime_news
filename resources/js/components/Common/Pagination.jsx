import { useDispatch, useSelector } from "react-redux";
import { getAnimeSearch, selectPagination, selectSearchParams, setCurrentPage } from "../../features/AnimeSlice";
import { useEffect } from "react";

const Pagination = ({ setLoading }) => {
  const oPagination = useSelector(selectPagination);
  const aPages = Array.from({ length: oPagination.last_visible_page }, (_, index) => index + 1);
  const oParams = useSelector(selectSearchParams);
  const dispatch = useDispatch();

  const getPage = async (iPage) => {
    setLoading(true);
    Promise.all([
      dispatch(setCurrentPage({ value: iPage })),
      dispatch(getAnimeSearch({...oParams, page: iPage})),
    ]).then(() => {
      setLoading(false);
    })
  }

  return (
    <>
      <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a 
          className="flex items-center cursor-pointer justify-center px-3 h-8 ml-0 leading-tight rounded-l-lg text-teal-50 bg-navy border border-pagination-border hover:bg-pagination-border hover:text-white"
          onClick={(oEvent) => { oPagination.current_page === 1 ? oEvent.preventDefault() : getPage(1); }}
          >
            First
          </a>
        </li>
        <li>
          <a 
          className="flex items-center cursor-pointer justify-center px-3 h-8 ml-0 leading-tight text-teal-50 bg-navy border border-pagination-border hover:bg-pagination-border hover:text-white"
          onClick={(oEvent) => { oPagination.current_page === 1 ? oEvent.preventDefault() : getPage((oPagination.current_page - 1)); }}
          >
            Prev
          </a>
        </li>
        {
          aPages?.map((iValue, iKey) => {
            const isActivePage = iValue === oPagination.current_page;
            const pageClass = isActivePage
              ? 'flex items-center justify-center px-3 h-8 text-teal-50 border border-pagination-border bg-light-navy hover:bg-light-blue hover:text-teal-50'
              : 'flex items-center justify-center px-3 h-8 leading-tight text-teal-50 bg-navy border border-pagination-border hover:bg-pagination-border hover:text-white';


            if (
              (iValue < oPagination.current_page && Math.abs(oPagination.current_page - iValue) <= 1) ||
              iValue === oPagination.current_page ||
              (iValue > oPagination.current_page && Math.abs(iValue - oPagination.current_page) <= 1)
              ) {
              return (
                <li key={iKey}>
                  <a
                    className={`cursor-pointer ${pageClass}`}
                    onClick={() => { getPage(iValue) }}
                  >
                    {iValue}
                  </a>
                </li>
              );
            }
            return null;
          })
        }
        <li>
          <a 
          className="flex items-center cursor-pointer justify-center px-3 h-8 leading-tight text-teal-50 bg-navy border border-pagination-border hover:bg-pagination-border hover:text-white"
          onClick={(oEvent) => { oPagination.current_page === oPagination.last_visible_page ? oEvent.preventDefault() : getPage((oPagination.current_page + 1)); }}
          >
            Next
          </a>
        </li>
        <li>
          <a 
          className="flex items-center cursor-pointer justify-center px-3 h-8 ml-0 leading-tight rounded-r-lg text-teal-50 bg-navy border border-pagination-border hover:bg-pagination-border hover:text-white"
          onClick={() => { oPagination.current_page === oPagination.last_visible_page ? oEvent.preventDefault() : getPage(oPagination.last_visible_page); }}
          >
            Last
          </a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Pagination;
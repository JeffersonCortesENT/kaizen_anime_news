import { useDispatch, useSelector } from "react-redux";
import { getAnimeSearch, selectPagination, selectSearchParams, setCurrentPage } from "../../features/AnimeSlice";
import { useEffect } from "react";

const Pagination = () => {
  const oPagination = useSelector(selectPagination);
  const aPages = Array.from({ length: oPagination.last_visible_page }, (_, index) => index + 1);
  const oParams = useSelector(selectSearchParams);
  const dispatch = useDispatch();

  const getPage = async (iPage) => {
    dispatch(setCurrentPage({ value: iPage })); //this is reducer function
    dispatch(getAnimeSearch({...oParams, page: iPage})); //this is async thunk
  }

  return (
    <>
      <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm">
        {/* <li>
          <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
        </li> */}
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        {
          aPages?.map((iValue, iKey) => {
            const isActivePage = iValue === oPagination.current_page;
            const pageClass = isActivePage
              ? 'flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';


            if (
              (iValue < oPagination.current_page && Math.abs(oPagination.current_page - iValue) <= 2) ||
              iValue === oPagination.current_page ||
              (iValue > oPagination.current_page && Math.abs(iValue - oPagination.current_page) <= 2)
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
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Pagination;
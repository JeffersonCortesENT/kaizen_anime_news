import { useState } from "react";

const Dropdown = ({ sTitle, aList, oFunction }) => {
  const [bMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!bMenuVisible);
  };

  const executeFunction = (mValue) => {
    oFunction(mValue);
    setMenuVisible(false);
  }

  return (
    <>
      <div className="relative w-full">
      <button
        id="dropdownDelayButton"
        onClick={toggleMenu}
        className="text-black bg-white hover:bg-gray-100 border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {sTitle}
        <svg
          className={`w-2.5 h-2.5 ml-auto transform ${bMenuVisible ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdownDelay"
        className={`absolute z-10 ${bMenuVisible ? '' : 'hidden'} bg-white divide-y mt-1 divide-gray-100 rounded-lg shadow w-full`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
          {aList?.map((aData, iKey) => (
            <li key={iKey}>
              <a onClick={() => { executeFunction(aData.value) }} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {aData.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Dropdown;
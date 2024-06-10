import React from "react";

function LangSelect({ changeLanguages, toggleDropdown, i18n, dropdownOpen }) {
  return (
    <div className=" relative ">
      <button onClick={toggleDropdown} className="dropdown-btn text-white py-1 md:px-3 rounded-lg  ">
        {i18n.language.toUpperCase()}
      </button>
      {dropdownOpen && (
        <div className="dropdown-content absolute left-[50%] translate-x-[-50%] mt-2 w-20 bg-white rounded shadow-lg">
          <span
            onClick={() => changeLanguages("az")}
            className="block bg px-4 py-2 text-gray-300 hover:bg-[#303030d3] cursor-pointer"
          >
            AZ
          </span>
          <span
            onClick={() => changeLanguages("ru")}
            className="block bg px-4 py-2 text-gray-300 hover:bg-[#303030d3] cursor-pointer"
          >
            RU
          </span>
        </div>
      )}
    </div>
  );
}

export default LangSelect;

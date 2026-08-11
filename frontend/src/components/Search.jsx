import React from "react";
import locationIcon from "../assests/location.svg";
import magnifyingIcon from "../assests/magnifying.svg";
function Search() {
  return (
    <div className="h-[8rem]   flex items-center justify-center w-full bg-[#36f4c2]">
      <div className="bg-[#ffffff] relative shadow-sm shadow-grey-300 rounded-xl h-[3.50rem] w-[70rem]">
        <div className="flex relative flex-row h-full">
          <img
            src={magnifyingIcon}
            className="h-[2rem] absolute left-[1.70rem] top-[.70rem] w-[2rem]"
            alt="location-img"
          />
          <input
            className="absolute text-lg left-[4.50rem] border-none outline-none h-full w-[28rem]"
            placeholder="Job title, keywords, or company"
          />
        </div>
        <div className=" flex flex-row absolute left-[32.50rem] w-[29rem] top-0 h-full ">
          <img
            src={locationIcon}
            className="h-[2.20rem]  absolute left-[1.50rem] top-[.50rem] w-[2rem]"
            alt="location-img"
          />
          <input
            className="h-full text-lg outline-none absolute w-[25rem] left-[4rem]"
            placeholder="City, state, or 'Remote'"
          />
        </div>

        <button className="bg-[#0050cb] rounded-lg absolute right-[1rem] top-[.50rem] text-white pl-8 pr-8 pt-2 pb-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;

import React from "react";
import locationIcon from "../assests/location.svg";
import buildingIcon from "../assests/building-solid-full.svg";
import clockIcon from "../assests/clock-regular-full.svg";
import moneyIcon from "../assests/money-bill-1-regular-full.svg";
import bookmarkIcon from "../assests/bookmark-regular-full.svg";
function JobDetails() {
  return (
    <div className="h-screen w-screen">
      <div className="h-[10rem] relative  w-full bg-red-300">
        <h2 className="text-4xl absolute left-[2rem] top-[2rem] font-medium">
          Senior Frontend Engineer
        </h2>
        <ul className="flex absolute left-[2rem] top-[6rem] flex-row text-[rgba(0,0,0,0.4)] gap-6">
          <li className="flex  flex-row">
            <img
              src={buildingIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="building Icon"
            />
            TechFlow Inc.
          </li>
          <li className="flex  flex-row">
            <img
              src={locationIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="locationIcon"
            />
            San Francisco, CA (Hybrid)
          </li>
          <li className="flex flex-row">
            <img
              src={clockIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="clockIcon"
            />
            Full-time
          </li>
          <li className="flex flex-row">
            <img
              src={moneyIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="moneyIcon"
            />
            $140k - $180k
          </li>
        </ul>
        <div className="flex gap-4 absolute right-[2rem] top-[3.20rem] flex-row">
          <button className="bg-[#f2f3ff] gap-1 text-[#0050cb] flex flex-row rounded-lg pl-6 pr-6 pt-2 pb-2 border-[#0050cb] border">
            <img
              src={bookmarkIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="bookmarkIcon"
            />
            Save Job
          </button>
          <button className="bg-[#0050cb] rounded-lg pl-6 pr-6 pt-2 pb-2 text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;

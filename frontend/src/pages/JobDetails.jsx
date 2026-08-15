import React from "react";
import locationIcon from "../assests/location.svg";
import buildingIcon from "../assests/building-solid-full.svg";
import clockIcon from "../assests/clock-regular-full.svg";
import moneyIcon from "../assests/money-bill-1-regular-full.svg";
import bookmarkIcon from "../assests/bookmark-regular-full.svg";
import circleIcon from "../assests/circle.svg";

function JobDetails() {
  return (
    <div className="h-[60rem] w-screen">
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
      <div className="bg-red-300 pt-2 pb-2 pl-4 pr-4 flex flex-col justify-evenly absolute rounded-lg left-[2rem] top-[17rem] h-[20rem] border border-black w-[48rem]">
        <h3 className="text-2xl  font-medium ">About the Role</h3>
        <p className="text-left text-lg">
          We are looking for an experienced Senior Frontend Engineer to join our
          core product team. You will be responsible for architecting and
          building scalable user interfaces that power our enterprise analytics
          platform. The ideal candidate has a deep understanding of React,
          modern state management, and web performance optimization. In this
          role, you will collaborate closely with product managers, designers,
          and backend engineers to deliver seamless experiences to our thousands
          of corporate clients. You will also mentor junior engineers and help
          shape our frontend engineering standards.
        </p>
      </div>
      <div className="bg-red-300 pt-2 pb-2 pl-4 pr-4 flex flex-col justify-evenly absolute rounded-lg left-[2rem] top-[54rem] h-[14rem] border border-black w-[48rem]">
        <h3 className="text-2xl  font-medium ">Requirements</h3>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-row">
            <img
              src={circleIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="circleIcon"
            />
            Lead the development of complex frontend features using React and
            Typescript.
          </li>
          <li className="flex flex-row">
            <img
              src={circleIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="circleIcon"
            />
            Collaborate with UX/UI designers to translate design mockups into
            high quality code.
          </li>
          <li className="flex flex-row">
            <img
              src={circleIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="circleIcon"
            />
            Optimize application for maximum speed, scalability, and
            accessibility.
          </li>
          <li className="flex flex-row">
            <img
              src={circleIcon}
              alt="circleIcon"
              className="h-[1.50rem] w-[1.50rem]"
            />
            Participate in code reviews and advocate for engineering best
            practices.
          </li>
        </ul>
      </div>
      <div className="bg-red-300 pt-2 pb-2 pl-4 pr-4 flex flex-col justify-evenly absolute rounded-lg left-[2rem] top-[39rem] h-[14rem] border border-black w-[48rem]">
        <h3 className="text-2xl  font-medium ">Key Responsibilities</h3>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-row">
            <img
              src={circleIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="circleIcon"
            />
            Lead the development of complex frontend features using React and
            Typescript.
          </li>
          <li className="flex flex-row">
            <img
              src={circleIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="circleIcon"
            />
            Collaborate with UX/UI designers to translate design mockups into
            high quality code.
          </li>
          <li className="flex flex-row">
            <img
              src={circleIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="circleIcon"
            />
            Optimize application for maximum speed, scalability, and
            accessibility.
          </li>
          <li className="flex flex-row">
            <img
              src={circleIcon}
              alt="circleIcon"
              className="h-[1.50rem] w-[1.50rem]"
            />
            Participate in code reviews and advocate for engineering best
            practices.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JobDetails;

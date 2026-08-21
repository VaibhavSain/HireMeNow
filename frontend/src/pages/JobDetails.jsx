import React, { useEffect, useState } from "react";
import locationIcon from "../assests/location.svg";
import buildingIcon from "../assests/building-solid-full.svg";
import clockIcon from "../assests/clock-regular-full.svg";
import moneyIcon from "../assests/money-bill-1-regular-full.svg";
import bookmarkIcon from "../assests/bookmark-regular-full.svg";
import circleIcon from "../assests/circle.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };
    fetchJobs();
  }, [id]);

  if (!job) {
    return (
      <div className="w-screen h-screen flex font-medium items-center justify-center text-3xl">
        Please Wait A Sec...
      </div>
    );
  }
  return (
    <div className="min-h-[50rem] max-h-max w-screen">
      <div className="h-[10rem] relative  w-full bg-red-300">
        <h2 className="text-4xl absolute left-[2rem] top-[2rem] font-medium">
          {job.title}
        </h2>
        <ul className="flex absolute left-[2rem] top-[6rem] flex-row text-[rgba(0,0,0,0.4)] gap-6">
          <li className="flex  flex-row">
            <img
              src={buildingIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="building Icon"
            />
            {job.company}
          </li>
          <li className="flex  flex-row">
            <img
              src={locationIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="locationIcon"
            />
            {job.location}
          </li>
          <li className="flex flex-row">
            <img
              src={clockIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="clockIcon"
            />
            {job.jobType}
          </li>
          <li className="flex flex-row">
            <img
              src={moneyIcon}
              className="h-[1.50rem] w-[1.50rem]"
              alt="moneyIcon"
            />
            {job.salary}
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
          <button
            onClick={() => {
              window.location.href = job.jobLink;
            }}
            className="bg-[#0050cb] rounded-lg pl-6 pr-6 pt-2 pb-2 text-white"
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className="flex mt-[2rem] items-center justify-center  gap-10 flex-col">
        <div className="bg-red-300 pt-2 pb-2 pl-4 pr-4 flex flex-col justify-evenly  rounded-lg left-[2rem] top-[17rem] min-h-[10rem]max-h-max border border-black w-[48rem]">
          <h3 className="text-2xl  font-medium ">About the Role</h3>
          <p className="text-left text-lg">{job.description}</p>
        </div>
        <div className="bg-red-300 pt-2 pb-2 pl-4 pr-4 flex flex-col justify-evenly  rounded-lg left-[2rem] top-[55rem] min-h-[14rem] max-h-max border border-black w-[48rem]">
          <h3 className="text-2xl  font-medium ">Requirements</h3>
          <ul className="flex flex-col gap-2">
            {job.requirements.map((ind, key) => (
              <li key={key} className="flex flex-row">
                <img
                  src={circleIcon}
                  className="h-[1.50rem] w-[1.50rem]"
                  alt="circleIcon"
                />
                {ind}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-300 pt-2 pb-2 pl-4 pr-4 flex flex-col justify-evenly  rounded-lg left-[2rem] top-[39rem] min-h-[14rem] max-h-max border border-black w-[48rem]">
          <h3 className="text-2xl  font-medium ">Key Responsibilities</h3>
          <ul className="flex flex-col gap-2">
            {job.responsibilities.map((ind, key) => (
              <li key={key} className="flex flex-row">
                <img
                  src={circleIcon}
                  className="h-[1.50rem] w-[1.50rem]"
                  alt="circleIcon"
                />
                {ind}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;

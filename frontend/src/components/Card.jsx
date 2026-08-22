import React from "react";
import bookmark from "../assests/bookmark-regular-full.svg";
import bag from "../assests/bag.png";
import { useNavigate } from "react-router-dom";

function Card({ job }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/details/${job._id}`)}
      className="bg-red-300 lg:w-[80rem] cursor-pointer rounded-lg left-0 lg:left-[3rem] border-[1px] border-grey-300 relative min-h-[8rem] w-[20rem]"
    >
      <img
        className="h-[3rem] absolute top-[2rem] border-2 border-black left-[2rem] w-[3rem]"
        src={bag}
        alt="bag"
      />
      <h2 className=" text-xl absolute left-[6.50rem] top-[1.50rem] font-bold">
        {job.title}
      </h2>
      <ul className="absolute flex gap-4 flex-row left-[6.40rem] top-[4rem]">
        <li>{job.company}</li>
        <li>{job.jobType}</li>
        <li>{job.salary}</li>
      </ul>
      <img
        src={bookmark}
        className="h-[2rem] cursor-pointer absolute right-[2rem] top-[1.50rem] w-[2rem]"
        alt="bookmark"
      />
    </div>
  );
}

export default Card;

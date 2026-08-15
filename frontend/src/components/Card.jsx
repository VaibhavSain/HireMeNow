import React from "react";
import bookmark from "../assests/bookmark-regular-full.svg";
import bag from "../assests/bag.png";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/details")}
      className="bg-[#ffffff]   cursor-pointer rounded-lg left-[3rem] border-[1px] border-grey-300 relative min-h-[8rem] w-[80rem]"
    >
      <img
        className="h-[3rem] absolute top-[2rem] border-2 border-black left-[2rem] w-[3rem]"
        src={bag}
        alt="bag"
      />
      <h2 className=" text-xl absolute left-[6.50rem] top-[1.50rem] font-bold">
        Senior Frontend Engineer
      </h2>
      <ul className="absolute flex flex-row left-[6.40rem] top-[3.50rem]">
        <li>TechFlow Inc.</li>
        <li>SF (Hybrid)</li>
        <li>$140k - 180K</li>
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

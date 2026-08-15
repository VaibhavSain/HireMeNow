import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Listing() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#faf8ff] pb-20 h-screen overflow-scroll pt-4 absolute top-[13rem] left-0 gap-4 flex flex-col  w-full">
      <Card />
    </div>
  );
}

export default Listing;

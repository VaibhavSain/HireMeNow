import React from "react";
import Card from "./Card";

function Listing() {
  return (
    <div className="bg-[#faf8ff] pb-20 h-screen overflow-scroll pt-4 absolute top-[13rem] left-0 gap-4 flex flex-col  w-full">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Listing;

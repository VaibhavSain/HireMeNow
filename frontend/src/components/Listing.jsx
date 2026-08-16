import React, { useState } from "react";
import Card from "./Card";

function Listing() {
  const [data, setData] = useState();

  return (
    <div className="bg-[#faf8ff] pb-20 h-screen overflow-scroll pt-4 absolute top-[13rem] left-0 gap-4 flex flex-col  w-full">
      <Card />
    </div>
  );
}

export default Listing;

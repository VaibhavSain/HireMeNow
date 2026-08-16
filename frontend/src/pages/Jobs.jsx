import React, { useState } from "react";
import Search from "../components/Search";
import Listing from "../components/Listing";
function Jobs() {


  return (
    <div className="h-screen w-screen">
      <Search />
      <Listing />
    </div>
  );
}

export default Jobs;

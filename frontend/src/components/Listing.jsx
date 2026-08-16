import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Listing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/jobs");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-[#faf8ff] pb-20 h-screen overflow-scroll pt-4 absolute top-[13rem] left-0 gap-4 flex flex-col w-full">
      {data.map((job) => (
        <Card key={job._id} />
      ))}
    </div>
  );
}

export default Listing;

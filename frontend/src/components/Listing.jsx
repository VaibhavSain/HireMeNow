import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Listing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://hiremenow-backend-qxi6.onrender.com/api/jobs",
        );

        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        console.error("Response:", error.response);
        console.error("Message:", error.message);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-[#faf8ff] pb-20 h-screen overflow-scroll pt-4 absolute top-[13rem] left-0 gap-4 flex flex-col w-full">
      {data.map((job) => (
        <Card key={job._id} job={job} />
      ))}
    </div>
  );
}

export default Listing;

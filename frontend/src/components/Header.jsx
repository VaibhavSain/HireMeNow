import React from "react";
import logo from "../assests/hiremenow.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleFindJob = () => {
    navigate("/");
  };
  return (
    <header className="h-[5rem] lg:h-[5rem] bg-[#f6cb61] relative top-0 left-0 shadow-sm shadow-gray-400 w-full">
      <div className="absolute flex top-[1.50rem] left-[2rem]">
        <img
          src={logo}
          onClick={handleFindJob}
          alt="logo-img"
          className="h-[2rem] rounded-2xl cursor-pointer w-[2rem]"
        />
        <h1
          onClick={handleFindJob}
          className="lg:text-2xl text-xl cursor-pointer ml-2 font-medium"
        >
          HireMeNow
        </h1>
      </div>
      <div className="absolute hidden lg:flex top-[1.50rem] right-[2rem]">
        <nav className="flex font-medium text-lg  flex-row gap-8">
          <Link to="/">Find Jobs</Link>
          <Link>My Applications</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

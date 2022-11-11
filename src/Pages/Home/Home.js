import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "../Others/AboutMe/AboutMe";
import Gallery from "../Others/Gallery/Gallery";
import DataLimit from "./ServiceData/DataLimit/DataLimit";

const Home = () => {
  // console.log(service.discription);
  return (
    <div>
      <DataLimit></DataLimit>
      <div className="py-5">
        <Link
          to={"/services"}
          className="text-black  bg-gradient-to-tr from-rose-900 via-rose-100 to-rose-900  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition  rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-105 duration-300 w-56"
          aria-label="Sign up"
          title="View All More"
        >
       View ALL
        </Link>
      </div>
<Gallery></Gallery>
          
<AboutMe></AboutMe>

    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import about from "../../../images/banner/about.jpg";
import { GiLoveMystery, GiLovers } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { AuthContext } from "../../../Context/UserContext/UserContext";
import { Spinner } from "flowbite-react";


const AboutMe = () => {
    const { loading} = useContext(AuthContext);
    
    if(loading){
        return  <Spinner animation="border" className="text-7xl" varient="info"  />
             
    }


  return (
    <div class="flex items-center justify-between border-8 inset-8 border-rose-400 bg-rose-50 ">
      <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-bold tracking-wide font-serif text-rose-800 dark:text-white lg:text-5xl">
              About Me
            </h1>

            <div class="mt-8 space-y-5">
              <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <GiLoveMystery  className="text-rose-500  w-7 h-7" ></GiLoveMystery>

                <span class="mx-2">7 years Exprience</span>
              </p>

              <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              
              <GrCertificate className="text-rose-500  w-7 h-7"></GrCertificate>
                <span class="mx-2">Certified Makeup Artist</span>
              </p>

              <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
             
               <GiLovers  className="text-rose-500  w-7 h-7"  ></GiLovers>

                <span class="mx-2">Friendly for Everyone</span>
                          </p>
                          <p  className="text-gray-400"  >
              I love makeup,i love also my work.It's not my work it's my
              passion,love.I provides only face make-up and our in-house artists/assistants provide other services.
            </p>
            </div>
          </div>

          <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
          <div className="py-5">
        <Link
          to={"/services"}
          className="text-black  bg-gradient-to-tr from-rose-900 via-rose-100 to-rose-900  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition  rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-105 duration-300 w-56"
          aria-label="Sign up"
          title="View All More"
        >
     About More
        </Link>
      </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src={about}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

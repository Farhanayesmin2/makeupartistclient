import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoDiamondSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/UserContext/UserContext";
const Service = ({ service }) => {
  const { name,_id, img, title, description, price, packages } = service;

  const text = description.slice(0, 100);
  const { loading} = useContext(AuthContext);

  if(loading){
    return  <Spinner animation="border" className="text-rose-900 text-5xl" varient="info"  />
}
  return (
    <div>
    <div className="py-3 container mx-auto my-3">
      <div class="  wrapper antialiased text-gray-900">
        <div>
          <h4 class="mt-1 bg-rose-50 text-pink-900 py-2 text-xl font-semibold  leading-tight truncate">
            Package: {packages}
          </h4>
          <img
            src={img}
            alt=" random imgee"
            class="w-full h-96 mx-0 p-0 object-cover object-center rounded-lg shadow-md"
          />

          <div class="relative px-4 -mt-16  ">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex items-baseline">
                <h4 class="mt-1 text-rose-900 px-4 text-2xl font-bold uppercase leading-tight truncate">
                  {name}
                </h4>
                <span class="  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  <IoDiamondSharp className="w-6 h-6 text-cyan-600 animate-pulse"  ></IoDiamondSharp>
                </span>
             
              </div>

              <h4 class="mt-1 text-pink-900 text-lg text-start font-semibold  leading-tight truncate">
                {title}
              </h4>
              <span class="mt-1 text-sm  text-start">{text + "..."}</span>
              <div class="mt-1  text-start  text-xl font-bold text-rose-700">
                Price:{price}
                <span class="text-gray-600 text-sm"> /-</span>
              </div>
              <div class="mt-4 ">
             
                <span class="text-yellow-500 text-start pb-5 flex items-center justify-start text-md font-semibold">
               <span className="text-pink-900 font-bold pr-2 " >Ratings</span>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiOutlineStar ></AiOutlineStar>
                </span>
                <Link
                to={`/services/${_id}`}
                className="text-white  bg-gradient-to-r from-rose-50 via-rose-600 to-rose-50  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition  rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-105 duration-300 w-56"
                aria-label="Details"
                title="Please Book Now"
              >
               View Details
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </div>



     
    </div>
  );
};

export default Service;

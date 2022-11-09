import React from "react";
import { Link } from "react-router-dom";
//src="https://ibb.co/bHMqDX1"

import banner1 from "../../../../images/banner/banner1.jpeg";
const Banner = () => {
  return (
    <div className="relative">
      <img
        src={banner1}
        className="absolute  object-cover w-auto h-auto right-0 "
        alt=""
      />
      <div className="relative bg-gray-900 bg-blend-color bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a{" "}
                <span className="text-teal-accent-400">lazy dog</span>
              </h2>
              <p className="max-w-xl text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <Link
                href="/"
                aria-label=""
                className="py-2 text-white  inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
              <div className="shadow-gray-900 bg-opacity-75  shadow-2xl py-6 px-4 rounded bg-gradient-to-l from-pink-200 via-rose-400 to-pink-600 text-gray-50">
                <div className="container mx-auto">
                  <div className="flex flex-col lg:flex-row  items-center justify-between">
                    <h2 className="text-center animate-pulse text-3xl tracking-tighter font-bold">
                      Up to
                      <br className="sm:hidden" />
                      50% Off
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                      <span>
                        Yah!Bride Season Offer <br /> Use code:{" "}
                      </span>
                      <span className="font-bold text-lg"> Bride</span>
                    </div>

                    <button
                      type="button"
                      class="text-black bg-gradient-to-r from-pink-900 via-pink-200 to-pink-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      <Link>Book Now </Link>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10"> */}
            {/* <div className=" my-20 p-6 py-8 bg-rose-600 text-gray-50">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row  items-center justify-between">
                  <h2 className="text-center text-4xl tracking-tighter font-bold">
                    Up to
                    <br className="sm:hidden" />
                    50% Off
                  </h2>
                  <div className="space-x-2 text-center py-2 lg:py-0">
                    <span>Plus free shipping! Use code:</span>
                    <span className="font-bold text-lg">MAMBA</span>
                  </div>
                  <Link
                    href="#"
                    rel="noreferrer noopener"
                    className="px-4 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

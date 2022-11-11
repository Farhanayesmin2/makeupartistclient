import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoDiamondSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../../../Context/UserContext/UserContext";
import { Spinner } from "flowbite-react";
import Review from "../../../../PrivatePage/Review/Review";
const DetailsPage = () => {
  const service = useLoaderData();

  const { name, img, title, description, price, packages, _id } = service;

  const { loading,user } = useContext(AuthContext);
  

  if (loading) {
    return (
      <Spinner
        animation="border"
        className="text-rose-900 text-5xl"
        varient="info"
      />
    );
  }

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const userLogin = user?.uid;
    const reviewData = form.review.value;
    const time = new Date().toLocaleString();
    console.log(reviewData);
    const reviews = {
      reviewData,
      email,
      userLogin,
      name: name,
      price: price,
      time
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review Added");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className=" ">
      <div className="py-3 container mx-auto my-3">
        <div class="  wrapper antialiased text-gray-900">
          <div>
            <h4 class="mt-1 bg-rose-50 text-pink-900 py-2 text-xl font-semibold  leading-tight truncate">
              Package: {packages}
            </h4>

            <PhotoProvider>
              <div className="foo">
                <PhotoView key={img._id} src={img}>
                  <img
                    src={img}
                    alt=" random imgee"
                    class="w-full h-96 mx-0 p-0 object-cover object-center rounded-lg shadow-md"
                  />
                </PhotoView>
              </div>
            </PhotoProvider>
            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <h4 class="mt-1 text-rose-900 px-4 text-2xl font-bold uppercase leading-tight truncate">
                    {name}
                  </h4>
                  <span class="  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    <IoDiamondSharp className="w-6 h-6 text-cyan-600 animate-pulse"></IoDiamondSharp>
                  </span>
                </div>

                <h4 class="mt-1 text-pink-900 text-lg text-start font-semibold  leading-tight truncate">
                  {title}
                </h4>
                <span class="mt-1 text-sm  text-start">{description}</span>

                <div class="mt-1  text-start  text-xl font-bold text-rose-700">
                  Price:{price}
                  <span class="text-gray-600 text-sm"> /-</span>
                </div>
                <div class="mt-4 ">
                  <span class="text-yellow-500 text-start pb-5 flex items-center justify-start text-md font-semibold">
                    <span className="text-pink-900 font-bold pr-2 ">
                      Ratings
                    </span>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                  </span>
                  <Link
                    to={"/book"}
                    className="text-white  bg-gradient-to-r from-rose-50 via-rose-600 to-rose-50  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition  rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-j5 duration-300 w-56"
                    aria-label="Sign up"
                    title="Please Book Now"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800 ">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <button
                  type="button"
                  title="Rate 1 stars"
                  aria-label="Rate 1 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 2 stars"
                  aria-label="Rate 2 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 3 stars"
                  aria-label="Rate 3 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 4 stars"
                  aria-label="Rate 4 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 5 stars"
                  aria-label="Rate 5 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 text-gray-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <form onSubmit={handleReview}>
              <div className="flex flex-col w-full">
                <textarea
                  rows="3"
                  name="review"
                  placeholder="Give Your feedback..."
                  className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
                ></textarea>
                <button
                  type="submit"
                  className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-rose-600"
                >
                  Leave feedback
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm text-gray-600"
            >
              Maybe later
            </a>
          </div>
        </div>

        <div>
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

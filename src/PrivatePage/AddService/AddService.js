import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddService = () => {
 
   


  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.servicename.value;
    const packnumber = form.packnumber.value;
    const price = form.price.value;
    const discription = form.discription.value;
    const photourl = form.photourl.value;
    const title = form.title.value;

      

    const addservice = {
      name: name,
      packages: packnumber,
      title: title,
      img: photourl,
      price: price,
      description: discription,
    };

    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch("https://makeup-artist-server.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addservice),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
            toast.success("Successfully Added Service");
      
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
      <div>
          <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
      <div class="mx-auto container flex items-center" id="nav">
        <div class="w-full pt-2 p-4">
          <div class="mx-auto md:p-6 md:w-1/2">
            <div class="flex flex-wrap justify-between">
              <h1 class="text-3xl font-extrabold text-rose-500 hover:text-rose-500 transition duration-500 p-4">
                <i class="fas fa-sign-in-alt fa-fw fa-lg"></i>
                Add Service
              </h1>
              <Link
                to={"/home"}
                class="mt-8 text-rose-400 hover:text-rose-600 transition duration-500"
              >
                <svg
                  class=" w-6 h-6 inline-block align-bottom"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Back to Home
                <i class="fas fa-chevron-circle-left fa-fw"></i>
              </Link>
            </div>

            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form onSubmit={handleAddService} action="#login">
                <div class="mb-8">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span class="text-red-500">&nbsp;*</span>
                    Service Name
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      name="servicename"
                      type="name"
                      class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                      placeholder="your service name"
                      required
                    />
                  </div>
                </div>
                <div class="mb-8">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span class="text-red-500">&nbsp;*</span>
                    Package Id:
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      name="packnumber"
                      type="number"
                      class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                      placeholder="your package id"
                      required
                    />
                  </div>
                </div>
                <div class="mb-8">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span class="text-red-500">&nbsp;*</span>
                    Package Title:
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      name="title"
                      type="text"
                      class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                      placeholder="your package title"
                      required
                    />
                  </div>
                </div>
                <div class="mb-8">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span class="text-red-500">&nbsp;*</span>
                    PhotoURL:
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      name="photourl"
                      type="text"
                      class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                      placeholder="your photo url"
                      required
                    />
                  </div>
                </div>
                <div class="mb-8">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span class="text-red-500">&nbsp;*</span>
                    Price:
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      name="price"
                      type="number"
                      class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                      placeholder="Please use coma"
                      required
                    />
                  </div>
                </div>
                <div class="mb-8">
                  <label
                    for="servicetitle"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span class="text-red-500">&nbsp;*</span>
                    Add Discription:
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <textarea
                      name="discription"
                      type="text"
                      class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                      placeholder="your service discription"
                      required
                    />
                  </div>
                </div>

                <div class="mb-4 text-center">
                  <button
                    class="transition duration-500 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add To Service
                  </button>
                </div>
                <hr />
                <div class="mt-8">
                  <p class="text-sm ">
                    Please Be Careful
                    <a
                      class="font-bold px-8 text-sm text-rose-500 hover:text-rose-800"
                      href="#register"
                    >
                      read more
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;

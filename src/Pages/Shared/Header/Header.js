import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo-color.png";
import { AuthContext } from "../../../Context/UserContext/UserContext";
import MyReview from "../../../PrivatePage/MyReview/MyReview";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };


  return (
    <div className="text-black bg-gradient-to-r from-rose-600 via-pink-50 to-rose-600 ">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative  grid items-center grid-cols-2 lg:grid-cols-3">
       

          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
             <Link
      to={'/home'}
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
             <Link
              to={'/services'}
                aria-label="Services"
                title="Our Services"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
               Services
              </Link>
            </li>
            <li>
             <Link
                 to={'/about'}
                aria-label="Booking Service"
                title=" Booking Service"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
               About Me
              </Link>
            </li>
            <li>
             <Link
                 to={'/gallery'}
                aria-label="Our Gallery"
                title="Our Gallery"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
               Gallery
              </Link>
            </li>
            <li>
             <Link
                 to={'/blog'}
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
               Blog
              </Link>
            </li>
          </ul>
         <Link
            href="/"
            aria-label="MakeUp Artist"
            title="MakeUp Artist"
            className="inline-flex items-center lg:mx-auto"
          >
            <img alt="/" className="w-56 h-22" src={logo}></img>
          </Link>

          <div className=" items-center hidden ml-auto space-x-8 lg:flex">

            <>
            {user?.uid ? (
                <>
<ul className=" items-center hidden space-x-8 lg:flex">
            <li>
                  <Link
                to={"/addservice"}
                aria-label="Add Service"
                title="Add Service"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
              Add Service
                  </Link>
                  </li>
          </ul>
 <Link
                 onClick={handleLogOut}
                aria-label=" LogOut"
                title=" Log out"
                className="text-black bg-gradient-to-tr from-rose-600 via-pink-50 to-rose-600  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-105 duration-300"
             
              >
                LogOut
              </Link>


                </> ): (
                  <>
 <Link
                to={'/register'}
                className="text-black bg-gradient-to-tr from-rose-600 via-pink-50 to-rose-600  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition  rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-105 duration-300"
                aria-label="Sign up"
                title="Please Register"
              >
                Register
              </Link>


                  </>


              )
            }
            
      
            </>


{/* <>
                {user?.uid ? (
                  <>
                    <button
                      className="py-2 md:mr-6 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      onClick={handleLogOut}
                    >
                      Log out
                    </button>
                   
                  </>
                ) : (
                  <>
                    <Link
                      className="py-2 mx-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      to="/login"
                    >
                      <button>LogIn</button>
                    </Link>

                    <Link
                      className="py-2 mx-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      to="/register"
                    >
                      <button>Register</button>
                    </Link>
                  </>
                )}
              </>
            
       */}
       
      
          
           
          
        
       
         
        


</div>











          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                     <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img alt="/" src={logo}></img>

                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                       <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                       <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                       <Link
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                       <Link
                          href="/"
                          aria-label="Sign in"
                          title="Sign in"
                          className="bg-rose-400 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Sign in
                        </Link>
                      </li>
                      <li>
                       <Link
                          href="/"
                          className="bg-rose-400  inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center mt-6 text-center">
      <section className="  p-6 bg-gray-100 text-gray-800">
			  <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
				  

				  <div className="mx-auto   w-full  rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
					  
					  <div className="mx-auto  w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
						  
              <h1 className="text-2xl font-bold text-center">Login</h1>
              <form
                novalidate=""
                action=""
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-1 text-sm">
                  <label for="username" className="block text-gray-600 text-start">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label for="password" className="block text-gray-600 text-start">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-rose-600"
                  />
                  <div className="flex justify-end text-xs text-gray-600">
                    <Link rel="noopener noreferrer" href="#">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-rose-600">
                  Sign in
                </button>
              </form>
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm text-gray-600">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
                <button
                  aria-label="Log in with Twitter"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                </button>
                <button
                  aria-label="Log in with GitHub"
                  className="p-3 rounded-sm"
                ></button>
              </div>
              <p className="text-xs text-center sm:px-6 text-gray-600">
                Don't have an account?
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="underline text-gray-800"
                >
                  Sign up
                </Link>
              </p>
            </div>
            </div>
       

          <img
            alt="bride"
            src="https://i.ibb.co/VY0FDq1/297238794-463520015784906-5515601907517655197-n.jpg"
            className="object-fill w-96 rounded-md xl:col-span-3 bg-gray-900 opacity-25"
          />
        </div>
      </section>
    </div>
  );
};

export default SignUp;

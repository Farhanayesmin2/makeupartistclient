
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcTabletAndroid } from "react-icons/fc";
import { Spinner } from 'flowbite-react';




const Register = () => {
    const [error, setError] = useState('');
    const { loading,createUser} = useContext(AuthContext);
    
    if(loading){
        return  <Spinner animation="border" className="text-7xl" varient="info"  />
             
    }

    


    const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
   
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      console.log(name,  email, password);
  
        createUser( email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
              form.reset();
              if(loading){
                return  <Spinner animation="border" className="text-7xl" varient="info"  />
                     
            }
            })
            .catch(error => {
                console.error(error);
               toast.error(error.message)
            });
            if (password.length < 6) {
                toast.error("Password Should be 6 character or more.")
            }
            if (password !== confirm) {
                toast.error("Your Password did not match.");
                return;
            }
        if (password === confirm) {
              
          if (!error)  {
            toast.success("Successfully Register");
          }
        }
        

    }     
     
  

  return (
   
    <div className=''>
      
        <div className='font-sans '> 
        <section className=" min-h-screen flex items-center justify-center">
  {/* login container */}
  <div className="bg-gray-300 opacity-75 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    {/* form */}
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-rose-700 flex">Register<FcTabletAndroid className='pt-2 h-8'></FcTabletAndroid>    </h2>
      <p className="text-xs mt-4 text-[#002D74]">
        If you are already a member, easily log in
      </p>
      <form  onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          className="p-2 mt-8 rounded-xl border"
          type="name"
          name="name"
                  placeholder="Name"
                  
        />
        <input
          className="p-2  rounded-xl border"
          type="email"
          name="email"
                  placeholder="Email"
                  
        />
        <div className="relative">
          <input
            className="p-2 rounded-xl border w-full"
            type="password"
                    name="password"
                    placeholder="Password"
                    
                                  />
                                   <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="gray"
            className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                 
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg></div>
                              <div className="relative">
                                  
                             
                               <input
            className="p-2 rounded-xl border w-full"
            type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    
                                  /> 
                                       <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="gray"
            className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                 
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                           
                                  
                                          
        </div>     
                  <p className="text-danger">
                    {error}
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
                  </p>
               

                       
                              <button
                      type="submit"
                      class="text-black bg-gradient-to-r from-rose-600 via-pink-200 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-sm px-5  text-center mr-2 mb-2 rounded-xl  py-2 hover:scale-105 duration-300"
                    >
                       Register
                    </button>
      </form>
      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>
    
       
              <div className='mt-5 text-center'>
           
              </div>
      <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <Link >Forgot your password?/</Link>
      </div>
      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <button className="py-2 px-5 bg-white text-rose-900 border rounded-xl hover:scale-110 duration-300">
         <Link to="/login"  >Login</Link>
        </button>
      </div>
    </div>
    {/* image */}
    <div className="md:block hidden w-1/2">
	<img
            alt="bride"
            src="https://i.ibb.co/VY0FDq1/297238794-463520015784906-5515601907517655197-n.jpg"
            className="object-cover w-auto rounded-md xl:col-span-3 bg-gray-900 opacity-25"
          />
    </div> 
  </div>
</section>

</div> 

        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dataa from './Dataa';


const DataLimit= () => {
    const [services, setServices] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const limitedData = services.slice(0, 3);
  const dataToShow = showAll ? services : limitedData;

    useEffect( () =>{
        // fetch('https://makeup-artist-server.vercel.app/setlimit')
              fetch('https://makeup-artist-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

console.log(services);
    return (
        <div>
             <div className='text-center mb-4'>
             <h1 className='text-rose-900 mt-12 mb-3 text-4xl font-serif font-bold'>Top Services</h1>
                <h2 className="text-2xl font-semibold font-serif text-rose-400">Enjoy the best Makeover  </h2>
                <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   dataToShow.map(service => <Dataa
                        key={service._id}
                        service={service}
                    ></Dataa>)
                }
                </div>
       
   
<Link
  to={"/services"}
   className="text-black  bg-gradient-to-tr from-rose-900 via-rose-100 to-rose-900  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition  rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-105 duration-300 w-56"
  onClick={() => setShowAll(true)}
>
  View All Details
</Link>



        </div>
    );
};

export default DataLimit;
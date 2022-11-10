import { Spinner } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../../Context/UserContext/UserContext';
import Dataa from './../DataLimit/Dataa';


const ServiceData = () => {
    const [services, setServices] = useState([]);
    const { loading} = useContext(AuthContext);
    

   
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    if(loading){
        return  <Spinner animation="border" className="text-rose-900 text-5xl"  />
    }
console.log(services);
    return (
        <div>
             <div className='text-center mb-4'>
                <p className="text-4xl py-2 font-bold text-pink-900">Services</p>
                <h2 className="text-3xl font-semibold text-pink-900">Our Bridal Services </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Dataa
                        key={service._id}
                        service={service}
                    ></Dataa>)
                }
            </div>
        </div>
    );
};

export default ServiceData;
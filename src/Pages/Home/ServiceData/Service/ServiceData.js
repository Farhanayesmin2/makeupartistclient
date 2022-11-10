import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';


const ServiceData = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

console.log(services);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-pink-900">Services</p>
                <h2 className="text-4xl font-semibold">Our Bridal Service </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceData;
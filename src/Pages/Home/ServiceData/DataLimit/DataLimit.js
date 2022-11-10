import React, { useState } from 'react';
import { useEffect } from 'react';
import Dataa from './Dataa';


const DataLimit= () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/setlimit')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

console.log(services);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Bridal Makeover</h2>
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

export default DataLimit;
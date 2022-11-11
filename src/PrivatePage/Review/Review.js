import React, { useContext, useEffect, useState } from 'react';

import { Spinner } from "flowbite-react";

import { AuthContext } from '../../Context/UserContext/UserContext';
const Review = () => {

    const { user, loading } = useContext(AuthContext)
    
   

    const [publicReviews, setPublicReviews] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/reviews')
        .then(res =>res.json())
        .then(data => setPublicReviews(data))
    }, []);
  
    if(loading){
        return  <Spinner animation="border" className="text-rose-900 text-5xl" varient="info"  />
    }
  


    return (
        <div>
            {
                publicReviews.map(review => (<div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-50 text-gray-800">
                <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 text-rose-600">
                        <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
                        <rect width="32" height="136" x="240" y="112"></rect>
                        <rect width="32" height="32" x="240" y="280"></rect>
                    </svg>Your Feed Back is here,
                </h2>
                <p className="flex-1 text-gray-600">{review.reviewData}</p>
               
            </div> )   )
            }
        </div>
    );
};

export default Review;
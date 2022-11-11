import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import bride0 from '../../../images/gallery/bride0.jpg';
import bride1 from '../../../images/gallery/bride1.jpg';
import bride2 from '../../../images/gallery/bride2.jpg';
import bride3 from '../../../images/gallery/bride3.jpg';
import bride4 from '../../../images/gallery/bride4.jpg';
import bride5 from '../../../images/gallery/bride5.jpg';

const Gallery = () => {

    const { loading} = useContext(AuthContext);
    
    if(loading){
        return  <Spinner animation="border" className="text-7xl" varient="info"  />
             
    }

    return (
        <div>
<h1 className='text-rose-900 text-4xl my-6 font-serif font-bold'>Our Happy Bride</h1>

<h1 className='text-gray-400'>Here are, my recent makeover.All are not here,just little bit collection.</h1>
             <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={bride0}/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={ bride1} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src={ bride2}/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                   src={ bride3}/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src={ bride4}/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src={ bride5}/>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Gallery;
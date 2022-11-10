
  import React from 'react';
  
const Dataa = ({ service }) => {
  const { name, img, title, description, price, packages } = service;
  
  const text = description.slice(0,100)
    return (
        <div className='py-3 container mx-0 my-3'>
           <div class="  wrapper antialiased text-gray-900">
<div>
<h4 class="mt-1 bg-rose-50 text-pink-900 py-2 text-xl font-semibold  leading-tight truncate">Package: {packages}</h4>
    <img src={img} alt=" random imgee" class="w-full h-96 mx-0 p-0 object-cover object-center rounded-lg shadow-md"/>    
    
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                <h4 class="mt-1 text-rose-900 px-4 text-xl font-bold uppercase leading-tight truncate">{name }</h4>
      <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      {/* <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>   */}
    </div>
    
                <h4 class="mt-1 text-rose-600 text-lg text-start font-semibold  leading-tight truncate">{title }</h4>
                <span class="mt-1 text-sm  text-justify">{text+"..."}</span>
  <div class="mt-1 text-2xl text-bolder font-bold text-pink-900">
                  Price:{price}
    <span class="text-gray-600 text-sm">   /-</span>
  </div>
  <div class="mt-4">
    <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span class="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>
        </div>
    );
  };
  
  export default Dataa;
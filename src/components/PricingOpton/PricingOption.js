import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid'
import Benefit from '../Benefit/Benefit';
const PricingOption = (props) => {
    const {name,price,benefits} =props.option
    return (
        <div className='bg-teal-200 p-3 rounded-lg mt-2'>
            <h2 className='bg-teal-400 py-2 rounded-lg'>{name}</h2>
            <p className='text-5xl'>{price}
            <span className='text-2xl text-gray-500'>/mo</span>
            </p>
           <div>
           <h3 className='text-left'>Benefits :</h3>
          
           {
               benefits.map(benefit=> <Benefit benefit={benefit}></Benefit>)
           }
           </div>
           <button  className=' flex items-center justify-center bg-teal-400  mt-6 w-full p-2 rounded shadow hover:text-white hover:bg-teal-700 font-semibold'>
               Buy now
            <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
        
           </button>
        </div>
    );
};

export default PricingOption;
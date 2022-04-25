import React from 'react';
import PricingOption from '../PricingOpton/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id : 1, name: 'Free', price: 99.00, benefits:[
            'lifetime free',
            'fantastic deals',
            'crazy deals',
            'localized deals'
        ] },
        {id : 2, name: 'Regular', price: 110.11 , benefits:[
            'everything on free',
            'fantastic deals',
            'crazy deals',
            'localized deals'
        ] },
        {id : 3, name: 'Premium', price: 200.14 , benefits:[
            'everything on regular',
            'fantastic deals',
            'crazy deals',
            'localized deals'
        ] }
    ]
    return (
        <div className='bg-teal-700 mt-7 p-3 text-yellow-50'>
            <h1 className='text-4xl'>Best deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ex atque eius ut esse provident repellat molestias dignissimos magnam minus!</p>
            <div className=' md:grid grid-cols-3 gap-3 text-black font-mono text-xl mt-9 font-bold'>
                {
                  pricingOption.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>

        </div>
    );
};

export default Pricing;
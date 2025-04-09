import React from 'react'
import Stripe from '../../assets/Stripe.png'
import amazon from '../../assets/amazon2.png'
import Char from '../../assets/chargealee.png'
import marketo from '../../assets/marketo.png'
import Okta from '../../assets/okta.png'
import Sales from '../../assets/sales.png'
import { motion } from 'framer-motion'

const Partner = () => {
  const Img = [Stripe, amazon, Char, marketo, Okta, Sales]

  return (
    <div className='bg-gray-100 py-16 px-4 sm:px-6 lg:px-12'>
      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl text-gray-800 font-nunito'>Partners</p>
        <p className='text-base sm:text-lg text-gray-700 pt-4'>
          We built Rise with partners who take security as seriously as we do.
          <br className='hidden sm:block' />
          Learn about their security practices:
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12'>
        {Img.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center gap-4 py-6 px-4  rounded-xl  hover:shadow-lg transition-shadow duration-300'
          >
            <img
              src={item}
              alt={`Partner ${index}`}
              className='w-full max-w-[120px] sm:max-w-[100px] md:max-w-[130px]'
            />
            <p className='text-sm sm:text-base text-gray-600'>Payment Processing</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partner

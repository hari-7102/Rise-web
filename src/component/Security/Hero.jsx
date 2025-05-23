import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div 
    initial ={{opacity : 0 , scale : 0.9 }}
    whileInView={{opacity : 1 , scale: 1 }}
    transition={{duration : 0.7 }}
    viewport={{once :  true , amount : 0.2 }}
    className='lg:py-36 py-16 px-6' >
        <div  className='flex justify-center items-center flex-col '>
            <p className='lg:text-6xl text-4xl text-center py-8  font-nunito '  >We’re serious about security</p>
            <p className='text-base text-center text-gray-700 '  >We've embedded security and resilience into Rise and throughout our operations.</p>
            <p className='text-base text-center text-gray-700'  >Our expert team uses the latest technology to make sure our infrastructure is.</p>
            <p className='text-base text-center text-gray-700'  >reliable, and your data is protected. Don’t just take our word for it:</p>
            <p className='text-orange-600 py-8   underline underline-offset-8   '  >Request our annual pen testing results</p>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/security-main.svg" 
                alt="" 
                className='mt-8'/>
        </div>
    </motion.div>
  )
}

export default Hero
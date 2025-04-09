import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <motion.div   
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    className='lg:py-36 px-6 relative py-8 '>
        <div  className='flex flex-col justify-center items-center '>
            <p  className='lg:text-6xl md:text-5xl   text-4xl font-audiowide '>Discover what’s new in Rise</p>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/hero@3x.png" 
            className=' '  alt="" />
        </div>
        <div>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_16.svg" alt="" 
            className='lg:flex hidden absolute -left-20 w-52 top-64'/>

            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_16.svg" alt="" 
            className='lg:flex hidden absolute -right-16 w-52 top-14'/>
        </div>
    </motion.div>
  )
}

export default Hero
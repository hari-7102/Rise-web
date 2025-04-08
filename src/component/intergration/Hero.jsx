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
    
    className='py-24 px-6 relative '>
        <div className='flex flex-col justify-center items-center gap-2 lg:text-6xl text-3xl  font-audiowide '>
            <p className='text-center'>Rise integrates with the apps that</p>
            <p  className='text-center '>matter most to your business</p>
        </div>

        <div  className='flex flex-col justify-center items-center gap- text-lg py-12 text-gray-600  ' >
            <p>Streamline workflows, automate mundane tasks, and keep critical</p>
            <p>information in sync between business systems</p>
        </div>
       
        <div>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_11.svg" alt=""  className='lg:flex hidden w-36 h-32 absolute left-8 top-40' />
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_11.svg" alt=""  className='lg:flex hidden w-44 h-32 absolute right-12 top-72' />
        </div>


        <div className='mt-20 w-full'>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/integrations-hero-bg.svg" alt="" className='lg:w-100% lg:h-100%  md:w-50% sm:25%  px-12'/>
        </div>
    </motion.div>
  )
}

export default Hero
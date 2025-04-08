import React from 'react'
import { useNavigate } from 'react-router-dom'

import { motion } from "framer-motion";

const Hero = () => {

  const navigate = useNavigate('')

  return (
    <motion.div 
      //  initial ={{opacity : 0 , left: -20}}
      //  animate = {{opacity : 1 , left : 1}}
      //  transition={{duration : 2 }}

      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}

    className='text-center lg:py-28   py-16 '>
        <div className='lg:text-6xl text-4xl flex-col gap-y-16  font-audiowide  px-3'>
            <p>Rise is the online training system</p>
            <p   className='bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent   '>your employees will love</p>
        </div>
        <div className='py-9 text-lg  px-3 '>
            <p>It’s an all-in-one system that makes training easy to create,</p>
            <p>enjoyable to take, and simple to manage</p>
        </div>

        <button  className='bg-orange-600 text-white rounded-4xl px-7 py-2 my-1 font-semibold hover:scale-105 duration-300 cursor-pointer' onClick={()  => navigate ('/contact ')} >Contact Us</button>

        <div className='flex items-center justify-center '>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/home/hero@2x.png" alt="" className='w-[60rem] px-1'/>
        </div>
    </motion.div>
  )
}

export default Hero
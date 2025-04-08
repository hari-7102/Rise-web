import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DotSquare } from 'lucide-react'

const Hero = () => {

    const navigate = useNavigate('')
  return (
    <div className='lg:py-24   '>
        <motion.div  
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}


        className='flex flex-col justify-center items-center gap-4 py-20 px-8   '>
            <p  className='lg:text-6xl  text-5xl   font-audiowide ' >Why you’ll love Rise</p>
            <p   className='text-base py-2 '>Every feature makes training easy create, enjoyable to take, and simple to ise makes training easy to create, manage  </p>
            <button  className='text-white  cursor-pointer rounded-4xl  px-5 py-2 bg-orange-600'  onClick={()  => navigate('/contact')}   >Contact Us</button>
        </motion.div>


        <div>
            <video
            src='https://riseusercontent.com/assets/rise/assets/marketing-animations/why-rise-hero-mobile.mp4'
            preload="auto"
            loop
            className='w-1/2 '
            playsInline
            webkit-playsinline="true"
            x5Playsinline="true"
            autoPlay
            style={{ width: "100%", height: "100%" }}
            ></video>
        </div>

        <div  className='flex justify-between items-center -mt-8'>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/why-main-left.svg" alt=""  className='lg:w-[23rem]  md:w-44  md:flex hidden '/>

            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/why-main-right.svg" alt=""   className='lg:w-[23rem]  md:w-44 md:flex   hidden '   />
        </div>
    </div>
  )
}

export default Hero
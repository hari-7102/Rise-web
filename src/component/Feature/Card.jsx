import React from 'react'
import { motion } from 'framer-motion'
const Card = () => {

    const card =[

        {desc:'Gorgeous themes',
         para:'Explore our classic Rise theme and our two new themes: elegant Horizon and contemporary Apex.',
         img:"https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/June-2022/courseThemes@3x.png" },

        {desc:'Cover page layouts',
        para:'Make a strong first impression with a variety of stunning cover page layouts.',
        img: 'https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/June-2022/businessLessons@3x.png'},

        {desc:'Navigation types',
        para:'Deliver the right navigation type for learners to track course progress, every time.',
        img: 'https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/June-2022/navigationTypes@3x.png'},

        {desc:'Font pairings',
        para:'Get your point across clearly with striking font pairings that appeal to learners',
        img:  'https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/June-2022/fontPairings@3x.png'},

        {desc:'Headers',
        para:'Modulate the look of lesson headers to fit any course flow airings that appeal to learners ',
        img:'https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/June-2022/headings@3x.png'},

        {desc:'Button Styles',
        para:'Modify interactions with multiple button styles  airings that appeal to learners',
        img: 'https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/June-2022/buttonStyles@3x.png'},

       

    ]
  return (
    <div className='lg:py-16 lg:px-32 py-9  px-8'>
        <div className='grid lg:grid-cols-2  grid-cols-1   grid-rows-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8'>
        {card.map((item,index) =>(
            <motion.div 
               initial={{opacity: 0 , y:30}}
               whileInView={{opacity : 1, y:0 }}
               transition={{duration : 0.9 }}
               viewport={{once :true , amount : 0.2 }}

            className='flex flex-col justify-center items-center gap-4'>
                
                    <div>
                        <img  key={index}  src={item.img}
                        alt="" 
                        className='lg:w-[27rem]  w-full '/>
                        <p className=' text-2xl  text-gray-600 font-semibold py-6'>{item.desc}</p>
                        <p className='text-base text-gray-700'>{item.para}</p>
                    </div>
            </motion.div>
        ))}        

            

            
        </div>

        <div  className='py-12 px-2 flex items-center gap-7   flex-wrap lg:flex-nowrap'>
            <button className='bg-orange-600 text-white px-5 py-2 rounded-4xl'>Contact Us</button>
            <p   className='underline underline-offset-8  hover:text-orange-600   '>Check Out Release Notes</p>
        </div>
    </div>
  )
}

export default Card
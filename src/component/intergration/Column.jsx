import React from 'react'

import { motion } from 'framer-motion';


const Column = () => {

    const features = [
        {
          number: 1,
          title: "Advanced Jacquard Weaving Technology",
          description: "Fully automatic, electronically controlled European Jacquard weaving machines."
        },
        {
          number: 2,
          title: "Innovative Design & R&D Excellence",
          description: "Expert designers with a dedicated research and development wing for creativity."
        },
        {
          number: 3,
          title: "State-of-the-Art Design Infrastructure",
          description: "High-tech workstations equipped with the latest designing software."
        },
        {
          number: 4,
          title: "Cutting-Edge Digital Printing Solutions",
          description: "Latest digital printing technology for superior print quality."
        },
        {
          number: 5,
          title: "Precision Heat Transfer Printing",
          description: "Advanced sticker printing machines for high-quality transfers."
        },
        {
          number: 6,
          title: "Extensive In-House Inventory",
          description: "1500+ shades readily available for seamless production."
        },
        {
          number: 7,
          title: "High-Performance Chenille Embroidery",
          description: "Japan-made embroidery machines for intricate detailing."
        },
        {
          number: 8,
          title: "Advanced Cutting & Finishing Solutions",
          description: "Ultrasonic slitting, laser cutting, engraving, and specialized folding machines."
        }
      ];
    
      // Create variable heights for cards to simulate masonry layout
      const cardHeights = ["h-auto pb-3", "h-auto pb-6", "h-auto pb-3", "h-auto pb-8", "h-auto pb-4", "h-auto pb-7", "h-auto pb-2", "h-auto pb-5"];




  return (
    <motion.div  

    >
        <p   className='md:text-6xl  text-4xl text-orange-600 text-center mb-10 px-4 font-audiowide  '> Personalized Experiences</p>

        <div className='columns-1 md:columns-2 mx-auto py-5  md:w-[32rem] w-full px-4 '>
            {features.map((item,index) =>(
                <motion.div 
                initial= {{opacity:0 , y: 30}}
                whileInView={{opacity : 1 , y:0}}
                transition={{duration : 0.3}}
                viewport={{once: true , amount : 0.2}} key={index} className={`flex flex-col justify-center items-start p-6 my-2 rounded-2xl    ${cardHeights[index]}  hover:scale-110 duration-200 bg-gray-100 hover:bg-orange-600 group `}  >
                    <p  className='text-5xl group-hover:text-orange-400'>{item.number}</p>
                    <p className='text-2xl text-blue-950 group-hover:text-white'>{item.title}</p>
                    <p  className='text-sm text-gray-700  group-hover:text-gray-300'>{item.description}</p>
                </motion.div>
            ))}

        </div>

    </motion.div>
  )
}

export default Column
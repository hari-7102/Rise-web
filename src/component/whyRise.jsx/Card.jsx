import React from "react";
import { motion } from "framer-motion";
const Card = () => {
  const features = [
    {
      number: 1,
      title: "Advanced Jacquard Weaving Technology",
      description:
        "Fully automatic, electronically controlled European Jacquard weaving machines.",
    },
    {
      number: 2,
      title: "Innovative Design & R&D Excellence",
      description:
        "Expert designers with a dedicated research and development wing for creativity.",
    },
    {
      number: 3,
      title: "State-of-the-Art Design Infrastructure",
      description:
        "High-tech workstations equipped with the latest designing software.",
    },
    {
      number: 4,
      title: "Cutting-Edge Digital Printing Solutions",
      description:
        "Latest digital printing technology for superior print quality.",
    },
    {
      number: 5,
      title: "Precision Heat Transfer Printing",
      description:
        "Advanced sticker printing machines for high-quality transfers.",
    },
    {
      number: 6,
      title: "Extensive In-House Inventory",
      description: "1500+ shades readily available for seamless production.",
    },
    {
      number: 7,
      title: "High-Performance Chenille Embroidery",
      description: "Japan-made embroidery machines for intricate detailing.",
    },
    {
      number: 8,
      title: "Advanced Cutting & Finishing Solutions",
      description:
        "Ultrasonic slitting, laser cutting, engraving, and specialized folding machines.",
    },
  ];

  const cardHeights = [
    "h-auto pb-3",
    "h-auto pb-6",
    "h-auto pb-3",
    "h-auto pb-8",
    "h-auto pb-4",
    "h-auto pb-7",
    "h-auto pb-2",
    "h-auto pb-5",
  ];

  return (
    <div   className="py-20   px-4">
      <div className="flex flex-col justify-center items-center gap-3 ">
        <p className="text-5xl font-audiowide text-gray-600">
          Take the next step without
        </p>
        <p className="text-4xl font-audiowide hover:text-gray-600 text-orange-600">
          any hassle & get results fast
        </p>
      </div>

      <div>
        {/* <div className="columns-2  gap-2 p-4 w-[34rem] mx-auto ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`hover:scale-105 transition-all duration-300  mb-2 py-[4.5rem] px-[2rem] bg-[#F9F4ED] rounded-2xl shadow hover:bg-orange-600 hover:z-10 group hover:text-[#F9F4ED]  hover:border border-orange-600 relative  `}
            >
              <div className="absolute top-3 left-6 text-[4rem] font-semibold font-rethink bg-gradient-to-br group-hover:from-orange-400 from-orange-600 to-orange-300 text-transparent bg-clip-text">
                {feature.number}
              </div>
              <div className="mt-8 z-10 relative">
                <h3 className="font-bold font-rethink text-3xl text-balance mb-2 font-instrument">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-900 transition-all duration-300 group-hover:text-[#F9F4ED]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}


        <div className="grid md:grid-cols-2 grid-cols-1   grid-rows-4  sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-14 gap-2 p-4 md:w-[34rem] w-72   mx-auto ">
            {features.map((item , index) =>(
            <motion.div 

            
            initial= {{opacity:0 , y: 30}}
            whileInView={{opacity : 1 , y:0}}
            transition={{duration : 0.3}}
            viewport={{once: true , amount : 0.2}}


            key={index} className={`${cardHeights[index]} p-2 flex flex-col  justify-start items-start gap-2  bg-gray-100 hover:scale-105   hover:rotate-3 duration-200 rounded-3xl hover:bg-orange-600 group `}>
                <p className="text-6xl  text-orange-600  group-hover:text-orange-300 ">{item.number}</p>
                <p  className="text-black font-serif text-2xl p-2 group-hover:text-white">{item.title}</p>
                <p  className=" text-gray-900 px-2   group-hover:text-white ">{item.description}</p>
            </motion.div>

            ))

            }
        </div>
      </div>
    </div>
  );
};

export default Card;

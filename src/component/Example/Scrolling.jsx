import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Scrolling = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % professions.length);
    }, 4000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const professions = [
    "Design",
    "Engineering",
    "Construction",
    "Human Resource",
    "Project Management",
    "Finance",
    "Non Profit",
    "Education",
    "Hospitality",
    "Sales",
    "Tech",
  ];

  return (
    <div className="lg:py-28    py-12 ">
      <div className="relative">
        <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_1.svg" 
                alt="" 
                className='w-[12rem]   md:flex hidden  absolute top-1 left-28'/>
        <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_1.svg" 
                alt="" 
                className='w-[12rem] md:flex hidden  absolute top-1 -right-28'/>
      </div>

      <div className="lg:py-24   py-12">
        <p className="lg:text-6xl text-4xl py-2.5 text-center font-audiowide   ">Risk Works For People in </p>
        <div className="h-20 overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="text-lg font-medium"
            >
              <span className="transition-colors duration-500 text-4xl text-orange-500">
                {professions[current]}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative">
        <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/examples-hero-bg.svg" 
        alt="" 
        className="absolute left-[34rem] -bottom-72  w-[67rem]"
        />
      </div>
    </div>
  );
};

export default Scrolling;

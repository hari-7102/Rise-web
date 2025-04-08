import React from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate("");
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <div className="text-center  lg:px-44 lg:py-28   px-8 py-6     ">
        <svg viewBox="0 0 96 36" className="w-16 h-16 ">
          <path
            fill-rule="evenodd"
            d="M56.825 4.463c-6.7-3.2-16.5-4-22.3 1.4-1.3 1.2-2.5 2.8-3.3 4.5-4.8-10.7-20.8-12.7-30.7-7.9-.8.4-.7 1.7.4 1.6 5.3-.6 10.4-2.2 15.9-1.3 3.2.5 6.3 1.7 8.7 4 2.2 2.1 4.1 5.3 4.4 8.1.2 1.4 2.3 1.6 2.5.1.4-2.5 1.7-5 3.5-6.8 5.6-5.7 13.6-2.9 20.2-1.2 1.5.4 2-1.9.7-2.5zm25.1 25.2c-2.1.8-4.2 1.7-6.2 2.9-3.4-5.3-11-7.4-16.7-5.1-1.4.5-.8 2.7.7 2.5 4.1-.5 7.9-1.1 11.4 1.5 1.1.8 2.5 2.4 3 3.3.4.7 1.2 1.1 1.9.6 1.7-1.2 3.6-2.1 5.5-2.9 1.8-.7 3.8-1.4 5.7-1.7 2.7-.4 5.2.2 7.8 0 .7 0 1.1-1 .5-1.5-3.6-2.5-9.8-.9-13.6.4z"
          ></path>
        </svg>
        <p className="lg:text-7xl text-5xl font-audiowide">How Rise works</p>
        <p className="py-4">
          Prepare to fall in love. Rise makes online training easy and
          delightful for <br /> everyone. And it takes just minutes to get
          started
        </p>
        <button
          className="bg-orange-600 text-white rounded-4xl px-7 py-2 my-1 font-semibold cursor-pointer   "
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
        <p className="border border-gray-200 lg:my-36  my-12   "></p>
      </div>

      <div>
        <img
          src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_4.svg"
          alt=""
          className="absolute top-72  hidden  md:flex     w-40 h-28"
        />
      </div>

      <div>
        <img
          src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_3.svg"
          alt=""
          className="absolute top-40 right-24   hidden  md:flex      w-40 h-28"
        />
      </div>
    </motion.div>
  );
};

export default Hero;

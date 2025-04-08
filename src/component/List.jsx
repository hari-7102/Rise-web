import React from "react";

import list from "../assets/list.mp4";

import { motion  } from "framer-motion";
const List = () => {
  return (
    <div className="lg:px-48  px-8  py-4 lg:py-40 flex  flex-wrap   lg:flex-nowrap   ">
      <motion.div 
       initial= {{x : -70 , opacity : 0 }}
       whileInView={{x : 0 , opacity : 1}}
       transition={{duration : 2 , }}
       viewport={{once : true , amount : 0.4 }}

      className="lg:w-1/3 w-full py-8">
        <svg viewBox="0 0 58 50" className="w-11 h-11  ">
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#383632"
              d="M42.1 8.6c-.6 0-1.1-.5-1.1-1.1V3.1h-4.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h5.5c.6 0 1.1.5 1.1 1.1v5.5c.1.6-.4 1.1-1.1 1.1zm0 23.4c-.6 0-1.1-.5-1.1-1.1V19.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v11.7c.1.7-.4 1.2-1.1 1.2zm0 17.2h-5.5c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1H41v-4.4c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v5.5c.1.6-.4 1.1-1.1 1.1zm-15.4 0h-10c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h10c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zm-20 0H1.2c-.6 0-1.1-.5-1.1-1.1v-5.5c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1V47h4.4c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zM1.2 32c-.6 0-1.1-.5-1.1-1.1V19.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v11.7c0 .7-.5 1.2-1.1 1.2zm0-23.4C.6 8.6.1 8.1.1 7.5V2C.1 1.4.6.9 1.2.9h5.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1H2.3v4.4c0 .6-.5 1.1-1.1 1.1zm25.5-5.5h-10c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h10c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            ></path>
            <path
              fill="#F16622"
              d="M32.4 12.5H14.7c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h17.7c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            ></path>
            <path
              fill="#BFBFBF"
              d="M32.1 21.1H14.7c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h17.4c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            ></path>
            <path
              fill="#F16622"
              d="M22.5 29.8h-7.8c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h7.8c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            ></path>
            <path
              fill="#8D8E8E"
              d="M20.3 38.4h-5.6c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h5.6c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            ></path>
            <path
              fill="#BFBFBF"
              d="M25.8 31.9l19.4-20.4 10.3 9.7-19.4 20.5"
            ></path>
            <path
              fill="#8C8D8E"
              d="M30.9 36.7l19.4-20.4 5.2 4.9-19.4 20.5"
            ></path>
            <path
              fill="#F16622"
              d="M45.2 11.5c2.7-2.8 7.2-3 10-.3s3 7.2.3 10M36.1 41.7l-11 1.2.7-11"
            ></path>
            <path
              fill="#383632"
              d="M10.5 12.5H10c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zm0 8.6H10c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zm0 8.7H10c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zm0 8.6H10c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            ></path>
          </g>
        </svg>

        <p className="lg:text-5xl  text-3xl text-gray-700 py-3">
          A simple, all-in-one system to manage your training
        </p>
        <p className="py-6 text-base">
          Empower your team with the knowledge they need, when they need it.
          Rise makes it simple to deliver and manage training, and analyze
          learner engagement.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-orange-600 text-white rounded-4xl px-7 py-2 my-1 font-semibold">
            Contact Us
          </button>
          <p className="underline underline-offset-4  text-base ">
            Watch a Demo{" "}
          </p>
        </div>
      </motion.div>

      <motion.div 
      initial = {{x :70 , opacity : 0}}
      whileInView={{x : 0 , opacity : 1}}
      transition={{ duration : 2 }}
      viewport={{once : true , amount: 0.4}}
      className="lg:w-2/3 w-full rounded-2xl overflow-hidden">
        <video
          src={list}
          className="w-full h-full object-cover"
          preload="auto"
          loop
          playsInline
          webkit-playsinline="true"
          x5Playsinline="true"
          autoPlay
          muted
        ></video>
      </motion.div>
    </div>
  );
};

export default List;

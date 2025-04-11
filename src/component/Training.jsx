import React from "react";
import circle from "../assets/circle.png";
import { motion  } from "framer-motion";
import education from "../assets/training.mp4";
const Training = () => {
  return (
    <div className="relative">
      <div  className="lg:px-32 lg:py-32    px-11    py-20   flex  flex-wrap lg:flex-nowrap ">
        <motion.div 
              initial = {{x : -100 , opacity : 0}}
              whileInView = {{ x : 0 , opacity : 1}}
              transition={{duration : 0.6 }}
              viewport={{once : true , amount : 0.5}}
        
        className="lg:w-1/3 w-full">
          <svg viewBox="0 0 56 54" className="w-14 h-14 py-1">
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#bfbfbf"
                d="M39.5 50.6c-3.1-.7-5.6-3.1-6.3-6.2-3.8.1-7.6-.4-11.2-.1-.7 3.1-3.2 5.6-6.3 6.3-1.1.2-1.9 1.2-1.9 2.4v.4h27.6V53c0-1.2-.8-2.2-1.9-2.4z"
              ></path>
              <path
                fill="#8c8d8e"
                d="M35.5 48.4c-1.1-1.1-1.9-2.5-2.3-4-3.8.1-7.6-.4-11.2-.1-.2.9-.6 1.8-1.1 2.5z"
                opacity="0.45"
              ></path>
              <path
                fill="#383632"
                fill-rule="nonzero"
                d="M53.9 45.1H1.1C.5 45.1 0 44.6 0 44V10c0-.6.5-1.1 1.1-1.1H54c.6 0 1.1.5 1.1 1.1v34c0 .6-.5 1.1-1.2 1.1zM2.2 42.9h50.6V11.1H2.2z"
              ></path>
              <path
                fill="#8c8d8e"
                d="M31.3 40.5l2.6-4.7 5.3 1.3-5.9-13.4-7.9 3.4z"
              ></path>
              <path
                fill="#bfbfbf"
                d="M23.8 40.5l-2.6-4.7-5.2 1.3 5.9-13.4 7.8 3.4z"
              ></path>
              <path
                fill="#f16622"
                d="M42.1 14.2c0 1.5-2.2 2.6-2.6 3.9-.4 1.4.7 3.5-.2 4.7-.8 1.2-3.2.8-4.4 1.6-1.1.8-1.5 3.2-2.9 3.7-1.3.4-3-1.3-4.5-1.3s-3.2 1.7-4.5 1.3c-1.4-.4-1.7-2.9-2.9-3.7s-3.6-.5-4.4-1.6.3-3.3-.2-4.7c-.4-1.3-2.6-2.4-2.6-3.9s2.2-2.6 2.6-3.9c.4-1.4-.7-3.5.2-4.7.8-1.2 3.2-.8 4.4-1.6C21.2 3.2 21.6.8 23 .3c1.3-.4 3 1.3 4.5 1.3S30.7-.1 32 .3c1.4.4 1.7 2.9 2.9 3.7s3.6.5 4.4 1.6-.3 3.3.2 4.7 2.6 2.5 2.6 3.9z"
              ></path>
            </g>
          </svg>
          <p className="lg:text-5xl    text-4xl text-gray-700">
            Create training easily with Rise
          </p>
          <p className="py-6 text-base">
            With our professionally designed themes, gorgeous samples, helpful
            templates, and extensive content library, it’s easy for anyone on
            your team to create courses, guides, performance support, and other
            training content.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-orange-600 text-white rounded-4xl px-7 py-2 my-1 font-semibold">
              Contact Us
            </button>
            <p className="underline underline-offset-4  text-base ">
              Learn More{" "}
            </p>
          </div>
        </motion.div>

        {/* <div>
        <img src={circle} alt="" className="w-80 h-80 relative right-28"/>
        </div> */}

        <motion.div  
                      initial = {{x : 100 , opacity : 0}}
                      whileInView = {{ x : 0 , opacity : 1}}
                      transition={{duration : 0.6 }}
                      viewport={{once : true , amount : 0.5}}
        className="lg:w-2/3 w-full py-4 overflow-hidden rounded-2xl   ">
          <video
            src={education}
            className="rounded-2xl"
            preload="auto"
            loop
            // playsInline
            // webkit-playsinline="true"
            // x5Playsinline="true"
            autoPlay
          ></video>
        </motion.div>
      </div>

      <div>
        <img
          src={circle}
          alt=""
          className=" hidden w-80 h-80 lg:flex  absolute -bottom-24 -left-24"
        />
      </div>
    </div>
  );
};

export default Training;

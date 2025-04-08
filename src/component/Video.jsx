import React from "react";
import video from "../assets/video.mp4";
import Point from "../assets/point.png";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="lg:px-32 lg:py-36  relative px-12 py-9 ">
      <div className="flex items-center gap-6  flex-wrap lg:flex-nowrap       ">
        <motion.div 
                      initial = {{x : -100 , opacity : 0}}
                      whileInView = {{ x : 0 , opacity : 1}}
                      transition={{duration : 2 }}
                      viewport={{once : true , amount : 0.5}}

        className="lg:w-2/3 w-full object-cover ">
          {/* <video src={video}></video> */}
          <p   className='lg:text-6xl text-3xl  font-audiowide text-black '>Rise Work For People </p>
          <video
            src={video}
            preload="auto"
            loop
            playsInline
            webkit-playsinline="true"
            x5Playsinline="true"
            autoPlay
            style={{ width: "100%", height: "100%" }}
          ></video>
        </motion.div>
        <motion.div 
                           initial = {{x : 100 , opacity : 0}}
                           whileInView = {{ x : 0 , opacity : 1}}
                           transition={{duration : 2 }}
                           viewport={{once : true , amount : 0.5}}
        className="lg:w-1/3 text-left   w-full    ">
          <svg viewBox="0 0 58 56" className="lg:w-14 lg:h-14 w-11 h-11  py-1">
            <g fill="none" fill-rule="evenodd">
              <path fill="#BFBFBF" d="M25.7.4H36V6H25.7z"></path>
              <path fill="#8C8D8E" d="M44.2 55.6l-7.7-11.5h-9l7.7 11.5z"></path>
              <path fill="#BFBFBF" d="M17.4 55.6l7.7-11.5h9l-7.7 11.5z"></path>
              <path
                fill="#383632"
                fill-rule="nonzero"
                d="M53.2 45.2H8.4c-.6 0-1.1-.5-1.1-1.1V6.7c0-.6.5-1.1 1.1-1.1h44.8c.6 0 1.1.5 1.1 1.1v37.4c0 .6-.5 1.1-1.1 1.1zM9.6 43h42.5V7.9H9.6V43z"
              ></path>
              <g fill="#F16622" transform="translate(0 2)">
                <circle cx="12.3" cy="11.9" r="8.5"></circle>
                <path
                  fill-rule="nonzero"
                  d="M12.3 23.4C6 23.4.8 18.2.8 11.9S6 .4 12.3.4s11.5 5.2 11.5 11.5-5.2 11.5-11.5 11.5zm0-17c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z"
                ></path>
              </g>
              <path
                fill="#F16622"
                d="M26.3 38.6c-.6 0-1.1-.5-1.1-1.1V18.9c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v18.5c.1.7-.4 1.2-1.1 1.2z"
              ></path>
              <path
                fill="#BFBFBF"
                d="M16.6 38.6c-.6 0-1.1-.5-1.1-1.1V26.2c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v11.3c0 .6-.5 1.1-1.1 1.1z"
              ></path>
              <path
                fill="#8D8E8E"
                d="M36 38.6c-.6 0-1.1-.5-1.1-1.1V24.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v13.4c.1.6-.4 1.1-1.1 1.1z"
              ></path>
              <path
                fill="#F16622"
                d="M45.8 38.6c-.6 0-1.1-.5-1.1-1.1V14.8c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v22.7c0 .6-.5 1.1-1.1 1.1z"
              ></path>
              <path fill="#BFBFBF" d="M4.4 41.6h52.8v4.1H4.4z"></path>
            </g>
          </svg>
          <p className="lg:text-5xl  text-3xl  text-gray-700">
            Training that’s enjoyable (really)
          </p>
          <p className="py-6 text-base">
            With our professionally designed themes, gorgeous samples, helpful
            templates, and extensive content library, it’s easy for anyone on
            your team to create courses, guides, performance support, and other
            training content.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-orange-600 text-white rounded-4xl lg:px-7 lg:py-2 px-4 py-1   my-1 font-semibold">
              Contact Us
            </button>
            <p className="underline underline-offset-4  text-base ">
              See Example{" "}
            </p>
          </div>


        </motion.div>
      </div>
      <div className="overflow-hidden">
            <img src={Point} alt="" className="hidden w-80 h-80 md:flex absolute -right-0 -bottom-12" />
        </div>


    </div>
  );
};

export default Video;

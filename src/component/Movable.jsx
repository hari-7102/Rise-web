import React from "react";
import Move from "../assets/brand.mp4";

import intel from '../assets/intel.png'
import oracle from '../assets/oracle.png'
import gain from '../assets/gainsight.png'
import met from '../assets/metlife.png'
import amazon from '../assets/amazon.png'
import chevron from '../assets/chevron.png'
import newYork from '../assets/newYork.png'
import pespi from '../assets/pepsi.png'

const Movable = () => {
  return (
    <div>
      <div className=" w-full h-auto py-6 text-center text-white bg-orange-600">
        {/* Background Video */}
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 "
          src={Move}
          preload="auto"
          loop
          playsInline
          autoPlay
          muted
        ></video> */}

        {/* Dark Overlay for Better Readability (Optional) */}
       

        {/* Centered Text */}
        <div className="relative z-10 text-white flex flex-col justify-start items-center px-2 ">
          <p className="lg:text-6xl  text-4xl font-semibold">All 100 of the Fortune 100</p>
          <p className="text-base py-4">
            choose our apps for online employee training
          </p>
        </div >

        <div className="py-6  px-4 ">
          <div className="flex  items-center justify-around flex-wrap lg:flex-nowrap ">
            <img src={intel} alt="" className="w-24 h-16 px-2"/>
            <img src={oracle} alt=""  className="w-36 h-9 px-2  " />
            <img src={gain} alt=""  className="w-24 h-16 px-2  "/>
            <img src={met} alt=""  className="w-28 h-9 px-2  " />
          </div>

          <div className="flex items-center justify-around py-6 flex-wrap lg:flex-nowrap   ">
            <img src={chevron} alt="" className="w-24 h-28   px-2 "/>
            <img src={amazon} alt=""  className="w-36 h-12   px-2 "  />
            <img src={newYork} alt=""  className="w-24 h-24 px-2  "/>
            <img src={pespi} alt=""  className="w-24 h-9  px-2 " />
          </div>
        </div>
        
      </div>


    </div>
  );
};

export default Movable;

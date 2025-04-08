import React from "react";
import { BsEmojiLaughingFill } from "react-icons/bs";
const Demo = () => {
  return (
    <div className="lg:px-48 lg:py-10 text-center bg-gray-50 px-12 py-6  ">
      <div className=" justify-center items-center flex  flex-col flex-wrap lg:flex-nowrap ">
        <svg viewBox="0 0 46 59" className="lg:w-12 justify-center items-center flex  w-9">
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#BFBFBF"
              d="M18.8 19.1V12c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v7.1h6.4V12c0-6.1-5-11.1-11.1-11.1S12.4 5.9 12.4 12v7.1h6.4z"
            ></path>
            <g stroke-linecap="round" stroke-width="2.25">
              <path stroke="#BFBFBF" d="M44.5 31.7h-5.8"></path>
              <path stroke="#8D8E8E" d="M44.5 37.7h-5.8"></path>
              <path stroke="#BFBFBF" d="M44.5 43.8h-5.8M8.2 31.7H2.4"></path>
              <path stroke="#8D8E8E" d="M8.2 37.7H2.4"></path>
              <path stroke="#BFBFBF" d="M8.2 43.8H2.4"></path>
            </g>
            <g fill="#F16622" transform="translate(16 26)">
              <circle cx="7.5" cy="7.9" r="7.1"></circle>
              <path d="M2.9 22.6h9.2L9.3 8.9H5.7z"></path>
            </g>
            <path fill="#8C8D8E" d="M28.2 19.1h6.4V16l-6.4-2.6z"></path>
            <path
              stroke="#383632"
              stroke-linejoin="round"
              stroke-width="2.25"
              d="M44.859 57.395h-42.8v-37.8h42.8z"
            ></path>
          </g>
        </svg>
        <p className="lg:text-4xl text-2xl py-4">  Secure, enterprise-class, and cloud‑based</p>
        <p className="items-center-center">Getting started with Rise is simple. There’s no software to download, patch, or <br /> upgrade, ever. And with end-to-end data encryption, SSO, high availability, <br /> redundant data storage, disaster recovery, and robust privacy protections, your <br /> IT department will love Rise.</p>
        <div className="flex items-center justify-center py-6 gap-6">
            <button className="bg-orange-600 text-white rounded-4xl lg:px-7 py-2   px-4   my-1 font-semibold">
              Contact Us
            </button>
            <p className="underline underline-offset-4  text-base ">
              Learn More{" "}
            </p>
          </div>

          
        <div className='flex items-center justify-center '>
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/home/footer@2x.png" alt="" className='w-[60rem]'/>
        </div>
      </div>


    </div>
  );
};

export default Demo;





import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";


import { motion } from "framer-motion";


const Contact = () => {
  const contact = [
    { title: "Full Name", placeholder: "Enter Your Full Name", type: "text" },
    {
      title: "Email Address",
      placeholder: "Enter Your Email Address",
      type: "email",
    },
    {
      title: "Phone Number",
      placeholder: "Enter Your Phone No",
      type: "number",
    },
    { title: "Address", placeholder: "Enter Your Address", type: "text" },
    { title: "Pin Code", placeholder: "Enter Your Pin Code ", type: "number" },
    { title: "Location", placeholder: "Enter Your Location", type: "text" },
  ];
  return (
    <motion.div 
    
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    className="lg:px-40 lg:py-16 px-6 py-2 ">
      <div className="">
        <p className="text-orange-600 font-audiowide text-6xl py-5">
          Let's Get In Touch
        </p>
        <div className=" flex justify-around lg:items-start gap-6 items-center  py-4 flex-wrap lg:flex-nowrap ">
          <div className="flex flex-col justify-start items-center">
            <BsFillTelephoneInboundFill
              size={33}
              className="rounded-lg bg-gray-100 p-2 "
            />
            <div className="py-4">
              <p className="text-gray-700">+91 6383037972</p>
              <p className="text-gray-700">+91 6389863102</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center"  >
            <HiMail size={33} className="rounded-lg bg-gray-100 p-2 " />
            <div className="py-4">
              <p className="text-gray-700">hariharankpm34@gmail.com</p>
              <p className="text-gray-700">regentofficecovai@gmail.com</p>
            </div>
          </div>
          <div  className="flex flex-col justify-start items-center" >
            <IoLocationSharp
              size={33}
              className="rounded-lg bg-gray-100 p-2 "
            />
            <div className="py-4">
              <p className="text-gray-700">Coimbatore , TamilNadu</p>
              <p className="text-gray-700">India</p>
            </div>
          </div>
        </div>

        <p className="border border-gray-100 my-8"></p>
      </div>

      <div className="">
        <p className="text-4xl text-gray-600 font-audiowide py-12">
          Or Fill Out The Form Below.....
        </p>
        <div className="grid lg:grid-cols-2   grid-cols-1    grid-rows-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 justify-center ">
          {contact.map((con) => (
            <div className="flex flex-col lg:px-36  md:px-24   justify-center  w-full   items-start">
              <div className="flex items-center gap-2">
                <p className=" text-orange-700">{con.title}</p>
                <MdOutlineStarPurple500 size={6} className="text-red-700" />
              </div>
              <input
                type={con.text}
                placeholder={con.placeholder}
                name=""
                id=""
                className="px-4 rounded-sm py-2 md:pe-32   pe-20 bg-gray-100"
              />
            </div>
          ))}
        </div>


      </div>




      <div className="flex justify-center items-center   py-12">
          <button  className="text-white rounded-xl px-5 py-2 bg-orange-600">Submit Now ..</button>
        </div>
    </motion.div>
  );
};

export default Contact;

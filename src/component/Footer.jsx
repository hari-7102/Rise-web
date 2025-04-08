import React from "react";
import { BsEmojiLaughingFill } from "react-icons/bs";

import { IoLogoInstagram } from "react-icons/io5";

import { FaYoutube } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'


import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
const Footer = () => {


  const navigate = useNavigate('')


  
  // const Products = [
  //   "Why Rise",
  //   "How It Works",
  //   "Examples",
  //   "Contact Us",
  //   "Security",
  //   "Support",
  //   "New Features",
  //   "About Rise",
  // ];


  const link = [
      {name : 'Why Rise' , link:'/whyrise' , },
      {name : 'How It Works' , link:'/howitworks'},
      {name : 'Example' , link:'/example'},
      {name : 'Contact Us' , link:'/contact'},
      {name : 'Intergration' , link :'/intergration' },
      {name : 'Security' , link :'/security' },
      {name : 'Support' },
      {name : 'New Features' , link:'/feature' }
    ]

  const nav = ['/whyrise'  , '/howitworks'   , '/example' , '/contact' ]

  const logo = [
    {icon : <IoLogoInstagram/>},
    {icon : <FaYoutube/>},
    {icon : <BsTwitterX/>},
    {icon : <FaGithub/>},

  ]

  const Company = [
    'About Articulate',
    'Our Values',
    'Diversity ',
    'Careers',
    'Contact Us',
  ]

  const connect = [
    'Twitter',
    'Facebook',
    'Linkedin'
  ]

  return (
    <div className="lg:px-52 px-11 py-12">
      <p className=" border border-gray-200 my-6"></p>
      <div className="flex justify-between items-start gap-3 flex-wrap lg:flex-nowrap  ">
        <div className=" lg:w-1/2 w-full py-6 ">
          <div   >
            <a href="/"   className="flex lg:items-center gap-2 justify-center lg:justify-start cursor-pointer"   >
            <BsEmojiLaughingFill size={28} className="text-orange-600" />
            <p className="text-2xl  font-audiowide ">Rise</p>
            </a>
          </div>
          <div className="text-gray-600 py-6  lg:text-start  justify-center text-center  "  >
            <p >Getting started with Rise is simple.</p>
            <p>There’s no software to download, patch</p>
            <p>And with end-to-end data encryption, SSO,</p>
          </div>
          <motion.div 

          className="flex lg:justify-start items-center  justify-center  gap-3">
            {logo.map((item , index )  =>(
                 <motion.span 

                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.3 }}
                 viewport={{ once: true, amount: 0.2 }}

                 size={38} className="bg-gray-100 hover:text-orange-600 p-2 rounded-full hover:rotate-6 duration-300 transform-fill " > {item.icon}  </motion.span>
            ))}
           
          </motion.div>
        </div>
        
        <div className="flex lg:items-start  justify-center  lg:w-2/3  px-2 w-full  lg:gap-36 sm:gap-16  flex-wrap lg:flex-nowrap   ">
          <div className="flex flex-col lg:items-start w-full text-center  gap-2 text-gray-600 py-6 ">
            <p className="font-semibold text-lg  text-black ">Products</p>
            <div className="flex flex-col lg:text-start  space-y-2">
                {link.map((item , index) =>(

                    <motion.p  
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}

                    className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer"  >
                     <a href={item.link}>{item.name}</a>
                   </motion.p>

                ))

                }
              
              
            </div>


          </div>
          <div className="flex flex-col lg:items-start  w-full text-center gap-2 justify-center py-6 items-center text-gray-600 ">
            <p className="font-semibold text-lg  text-black   ">Company</p>
              <div className="lg:items-start flex flex-col gap-2" >
                {Company.map((item , index ) =>(
                         <motion.p 
                         key={index}
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: index * 0.3 }}
                         viewport={{ once: true, amount: 0.2 }}

                         className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer"> 
                         {item}
                       </motion.p>
                ))

                }
             
              </div>


            {/* <p className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer"> 
              About Articulate
            </p>
            
            <p className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer">
              Our Values
            </p>
            <p className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer">
              Diversity & <br /> Inclusion
            </p>
            <p className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer">
              Careers
            </p>
            <p className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer">
              Contact Us
            </p> */}


          </div>
          <div className="flex flex-col lg:items-start  w-full text-center gap-2 text-gray-600   py-6  ">
            <p className="font-semibold  text-lg  text-black  ">Connect</p>
            {connect.map((item , index ) =>(
                <motion.p 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true, amount: 0.2 }}

                className="hover:text-orange-600 hover:scale-105 duration-200 cursor-pointer">
                 {item}
                </motion.p>

            ))

            }

          </div>
        </div>
      </div>

      <div>
        <p className="border border-gray-50 my-6 w-full "></p>
        <p className="text-gray-600 text-sm cursor-pointer ">
          © 2025 Articulate Global, LLC | Terms| Privacy | Cookie Preferences
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

import { BsEmojiLaughingFill } from "react-icons/bs";

import { FaEarthAmericas } from "react-icons/fa6";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate('')
    


    const support =[
        {img : 'https://intercom.help/RiseLearning/assets/svg/icon:book-star/000000',
            title : 'Start here',
            desc : 'Learn the Basics about Rise and Discover on-demanding training',
        },
        {img : 'https://intercom.help/RiseLearning/assets/svg/icon:book-opened/000000',
            title : 'Learn here',
            desc : 'Access the course and certificate , change your profile, and More ',
        },
        {img : 'https://intercom.help/RiseLearning/assets/svg/icon:tools-compose/000000',
            title : 'Create',
            desc : 'Build courses and learning paths, get the most out of content creation,plus accessibilty tips and ....',
        },
        {img : 'https://intercom.help/RiseLearning/assets/svg/icon:file-search/000000',
            title : 'Analyse',
            desc : 'Analyze Learner course data using reports',
        },
        {img : 'https://intercom.help/RiseLearning/assets/svg/icon:tools-setting1/000000',
            img2 : 'https://static.intercomassets.com/avatars/3233135/square_128/intercompro-1560539615.jpg',
            title : 'Manage',
            desc : ' Invite users and group, manage your content , setup SSO and More ',
        },
        {img : 'https://intercom.help/RiseLearning/assets/svg/icon:tools-setting2/000000',
            title : 'Rise API and Integrations',
            desc : 'How to use our REST API and Enable Rise integrations in apps ',
        },
        {img : 'https://intercom.help/RiseLearning/assets/svg/icon:chat-user/000000',
            img2 : 'https://static.intercomassets.com/avatars/3233135/square_128/intercompro-1560539615.jpg',
            title : 'Version History , FAQs and Product Support ',
            desc : 'Have a Question not answered above or nend furthur support ? Check here !',
        },
    ]
  return (
    <div>
      <div className="bg-orange-500    py-8 ">
        <div className="flex justify-between items-center px-6 lg:px-72">
          <div className="flex justify-center items-center gap-1">
            <BsEmojiLaughingFill size={30} className="text-white" />
            <p className="text-4xl  font-audiowide text-white">Rise</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaEarthAmericas size={17} className="text-white" />
            <p className="text-white">English</p>
          </div>
        </div>

     

        <div className="lg:px-72  px-8   ">
            <p className="text-white lg:text-3xl text-xl  font-semibold py-6">Find answers to your Rise questions</p>
            <input type="text" 
                placeholder="Search" 
                className=" px-4 lg:py-3.5 py-1.5  lg:w-[63rem] w-full bg-orange-400 
                 rounded-lg placeholder:text-white placeholder:text-xl"/>
        </div>
        </div>

      <motion.div 
                    initial={{  opacity: 0 , scale : 0.9}}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, scale : 1}}
                    viewport={{ once: true, amount: 0.2 }}
      className="lg:px-72 px-8 flex flex-col gap-4  py-16"> 

        {support.map((item , index ) =>(
        <div  key={index} className="border hover:border-orange-400  border-gray-300 lg:px-14 px-4 py-2  lg:p-3 rounded-xl  flex  items-center gap-11 ">
            <img src={item.img} 
            alt=""  className="lg:w-12 lg:h-12 z-10   w-9 h-9  "
            />
          


            <div className=" flex flex-col justify-start  items-start">
                <p  className="text-lg font-semibold  text-black">{item.title}</p>
                <p>{item.desc}</p>
                <div  className="flex  py-2 justify-center items-center lg:gap-3  gap-1">
                    <p  className="rounded-full bg-orange-600 p-2.5  z-10 "></p>
                    {/* <img src={item.img2} alt=""  className="w-8 h-8 z-0"/> */}
                    <p className="text-gray-700">By Anatomy </p>
                    <p  className="text-gray-700" >2 Article </p>
                </div>
            </div>
        </div>
        ))

        }

            
      </motion.div>


        <div className="flex justify-center items-center gap-1  cursor-pointer  "    onClick={()   => navigate('/')}>
            <BsEmojiLaughingFill size={30} className="text-gray-200" />
            <p className="text-4xl  font-audiowide  text-gray-200  ">Rise</p>
        </div>
        <p className="text-gray-500   text-center py-10">© 2025 Articulate Global, LLC | TermsPrivacy</p>
        
        <div>
            <hr  className="border border-gray-200 mx-52"/>
        </div>

    </div>
  );
};

export default Hero;

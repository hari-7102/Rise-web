import React from "react";

import { IoMdJet } from "react-icons/io";

import { LuNotepadText } from "react-icons/lu";

import { BsEmojiExpressionlessFill } from "react-icons/bs";


const WhyArchive = () => {
  const cardDetails = [
    {
      icons: <IoMdJet/>,
      title: "Boost Task Efficiency",
      extra: "Up to 45%",
      des: "with AI Driven real_time schedulling",
    },
    {
      icons: <LuNotepadText/>,
      title: "Archive a",
      extra: "Balanced Workday",
      des: "with Our AI base Engine schedulling",
    },
    {
      icons:<BsEmojiExpressionlessFill/>,
      title: "Reduce Procrastination",
      extra: "by 30%",
      des: "through AI Powered tasks Segmentation",
    },
  ];
  return (
    <div className="  lg:px-40 px-8 py-6   lg:py-28">
        
      <div className="flex flex-col justify-center items-center gap-3 flex-wrap lg:flex-nowrap   ">
        <button className="text-white px-5 py-2 rounded-xl  bg-orange-600">
          Why Archivr?
        </button>

        <div className="w-full">
          <p className="text-5xl text-center w-full font-audiowide">
            Your WorkFlow
          </p>
          <p className="lg:text-5xl  text-4xl  text-center hover:text-gray-500 w-full  font-audiowide  text-orange-600">
            Reimagined with AI
          </p>
          <p className="text-center py-6  lg:px-24">
            Artificial Intelligence (AI) is a branch of computer science that
            enables machines to mimic human intelligence. It involves the
            development of algorithms and models that allow computers to perform
            tasks such as learning, reasoning, problem-solving, and
            decision-making. AI is used in various fields, including healthcare,
            finance, transportation, and entertainment, improving efficiency and
            accuracy. Technologies like machine learning, natural language
            processing, and neural networks power AI systems,
          </p>
        </div>

        <div className="grid lg:grid-cols-3   grid-cols-1  w-full    grid-rows-1 gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8   ">
          {cardDetails.map((item) => (
            <div className=" lg:px-8 py-5  hover:bg-orange-600 group   px-4    bg-gray-50 rounded-2xl w-full lg:w-[21rem]">
              <span className="rounded-2xl  text-2xl bg-blue-400">{item.icons}</span>
              <div className="text-2xl text-indigo-950 font-semibold  py-4  group-hover:text-white  ">
                <p>{item.title}</p>
                <p>{item.extra}</p>
              </div>
              <p className="text-sm text-gray-600 py-2.5 group-hover:text-gray-300   ">{item.des}</p>
              <button className="text-white group-hover:bg-gray-100 group-hover:text-orange-600   bg-orange-600 px-5 py-2 rounded-4xl">
                Learn More
              </button>
            </div>
          ))}

          {/* <IoMdJet  size={39}  className='rounded-full bg-blue-200 p-2'/>
                    <div  className='text-2xl text-orange-600  py-4'>
                    <p>Boost Task Efficiency</p>
                    <p>Up to 45%</p>
                    </div>
                    <p className='text-sm text-gray-600 py-2.5'>with AI Driven real_time schedulling</p>
                    <button  className='text-white bg-orange-600 px-5 py-2 rounded-4xl'>Learn More</button> */}
        </div>
      </div>
    </div>
  );
};

export default WhyArchive;

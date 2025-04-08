import React from "react";
import { motion } from "framer-motion";
const Gird = () => {
  const cardItem = [
    {
      no: 1,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_68@2x.jpg",
      position: "Education",
      title: "Black History Month",
      desc: "Experience the power of Rise to create gorgeous educational content that keeps learners engaged.",
    },
    {
      no: 2,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_54@2x.jpg",
      position: "Leadership and Management Template",
      title: "Developing Your Employees",
      desc: "Teach managers on how to support an employees long-term career development using this 11-lesson template.",
    },
    {
      no: 3,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_65@2x.jpg",
      position: "Health Training",
      title: "Dealing With Stress, Pressure, and Burnout",
      desc: "We’re all prone to stress, pressure, and burnout. This course will help you define stress, pressure, and burnout.",
    },
    {
      no: 4,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_67@2x.jpg",
      position: "Diversity and Inclusion",
      title: "Power and Pride: The Origins of Pride Month",
      desc: "Explore a celebratory history of Pride, presented in solidarity with the LGBTQ+ community",
    },
    {
      no: 5,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_66@2x.jpg",
      position: "Diversity and Inclusion",
      title: "Beyond Pride: Year-Round Action",
      desc: "Get tips on how organizations and individuals can support LGBTQ+ allyship all year long",
    },
    {
      no: 6,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_60@2x.png",
      position: "Next Big Idea Club",
      title: "Kate Murphy on the Science of Effective Listening",
      desc: "Based on the latest research on effective listening, learners will discover how our brains respond  ",
    },
    {
      no: 7,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_61@2x.png",
      position: "Next Big Idea Club",
      title:
        "Zachary Wood on Having Uncomfortable Conversations About Sensitive Issues",
      desc: "Develop strategies to use before, during, and after challenging conversations to promote deepe",
    },
    {
      no: 8,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_42@2x.png",
      position: "Next Big Idea Club",
      title: "Wendy Wood on Good Habits, Bad Habits",
      desc: "Learners will gain a practical toolkit for breaking unwanted habits and creating new, desired ones.",
    },
    {
      no: 9,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_63@2x.jpg",
      position: "Customer Service",
      title: "Customer Communication Essentials",
      desc: "Deliver exceptional customer experiences by developing expert listening and communication skills",
    },
    {
      no: 10,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_53@2x.jpg",
      position: "Professional Skills Template",
      title: "Building Positive Work Relationships",
      desc: "Equip employees with the skills they need to develop strong work relationships with this 16-lesson",
    },
    {
      no: 11,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_58@2x.jpg",
      position: "Health Training",
      title: "Answering Common COVID-19 Vaccine Questions",
      desc: "Vaccination is a safe and effective way to slow the spread of COVID-19. Find answers to common .",
    },
    {
      no: 12,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/examples/cardPhotos/card_4@2x.jpg",
      position: "Executive",
      title: "Company Pitch Deck",
      desc: "Get inspiration on building more compelling, interactive presentations with this roadshow example.",
    },
  ];
  return (
    <div className="lg:px-48 lg:py-14 px-6 py-8  ">
      <div className="text-center ">
        <p className="font-audiowide lg:text-5xl  text-4xl  text-orange-600">
          See Rise at work
        </p>
        <p className="lg:py-9  py-3  text-gray-600">
          Start a free trial of Rise to get these sample projects and see for
          yourself why hundreds of Fortune 500 <br /> companies and thousands of
          midsize companies love training with Rise.
        </p>
      </div>

      <div className="grid md:grid-cols-2   grid-cols-1     grid-rows-6 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 rounded-xl  ">
        {cardItem.map((card, index) => (
          <motion.div 

    

          className=" bg-gray-50 rounded-lg shadow-2xl    ">
            <div key={index} className="relative h-64 group">
              <img
                src={card.img}
                alt=""
                className="w-[36.5rem] h-64 object-cover group-hover:blur-md transition duration-300"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Example
              </span>
            </div>
            
            <div className="lg:flex    items-start justify-between gap-12 py-3.5 lg:px-14 px-3 ">
              <p className="font-bold text-2xl   ">{card.position} </p>
              <div className=" gap-6 flex flex-col justify-between  items-start  lg:w-2/3   w-full  ">
                <div className="">
                  <p className="font-semibold lg:text-lg  text-base  ">{card.title}</p>
                  <p className="lg:text-base text-sm  py-5">{card.desc}</p>
                </div>

                <div className=" text-center ">
                  <button className="text-white rounded-2xl px-16  py-1.5 text-center  bg-orange-600">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gird;

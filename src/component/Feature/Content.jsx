import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  const cardItem = [
    {
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/questionReporting@3x.png",
      title: "Question-level reporting",
      desc: "Dig deeper into how learners perform on quizzes with question-level reporting. Explore in-depth reports on each question and each learner, so you can understand where learners are struggling with the material."
    },
    {
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/libraries@3x.png",
      title: "Multiple libraries",
      desc: "Create multiple libraries to give certain learners access to a specific collection of content. Multiple libraries are perfect when you have various constituents who need different content or for sharing content with people external to your organization, such as customers, partners, or franchisees."
    },
    {
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/slack@3x.png",
      title: "Slack integration",
      desc: "Integrate Rise with Slack to alert folks in Slack about new, upcoming, and overdue Rise training or about training that’s ready to be published."
    },
    {
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/welcomeEmail@3x.png",
      title: "Branded welcome email",
      desc: "Create an integrated, custom experience for your learners by adding your organization’s branding to the Rise welcome email."
    },
    {
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/learningPaths@3x.png",
      title: "Include third-party content in learning paths",
      desc: "Import training you create with third-party apps to learning paths in Rise. Now, your guided learning experiences can include all the training you’ve built both in and outside of Rise."
    },

  ];
  return (
    <div className="lg:px-48 px-5 py-16 bg-gray-100">
      <motion.div      
      initial={{opacity: 0 , x: -20}}
      whileInView={{opacity : 1 , x: 0}}
      transition={{duration : 0.8 }}
      viewport={{once: true , amount : 0.2 }}
       className="flex flex-col justify-center items-start gap-4">
        <span></span>
        <p className="lg:text-5xl  text-3xl  font-nunito ">Content Release Overview</p>
        <p className="text-base py-3">
          Check out this overview video for a quick look at all the new features
          from this release.
        </p>

        <div className="relative">
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/videoStill@3x.png"
            alt=""
          />
          <span>
            <svg
              fill="none"
              viewBox="0 0 118 118"
              className="  md:flex  hidden    absolute bottom-80 left-[34rem] w-26 "
            >
              <circle
                cx="58.68"
                cy="59"
                r="58.37"
                fill="#000"
                fill-opacity="0.65"
              ></circle>
              <path
                fill="#fff"
                d="M76.685 58.908L47.74 75.62V42.197l28.944 16.711z"
              ></path>
            </svg>
          </span>
        </div>
      </motion.div>

      <motion.div   
            initial={{opacity: 0 , x: 20}}
            whileInView={{opacity : 1 , x: 0}}
            transition={{duration : 0.8 }}
            viewport={{once: true , amount : 0.2 }}
      className="py-36">
        <span>
          <svg viewBox="0 0 58 50" className="w-11">
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
        </span>

        <p className="lg:text-5xl text-4xl  py-6 font-nunito  ">
          More prebuilt training content
        </p>
        <p className="">
          Get new prebuilt lessons, courses, and templates focused on sales,
          onboarding, business <br /> ethics, workplace safety, and more. We’ve
          also added 25 Next Big Idea Club courses you can <br />
          easily customize to offer your learners video-based training on
          life-changing concepts from <br />
          bestselling authors.
        </p>

        <div className="py-7 flex items-center gap-6   flex-wrap lg:flex-nowrap">
          <button className="text-white bg-orange-600 px-5 py-2 rounded-4xl ">
            Contact Us
          </button>
          <p className="underline underline-offset-8 hover:text-orange-600">
            View All The Examples
          </p>
        </div>

        <div className="flex justify-center items-center py-8 flex-wrap lg:flex-nowrap  px-5  gap-20">
          <div className="flex flex-col items-start lg:w-1/2">
            <img
              src="https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/newCourses@3x.png"
              className="w-[33rem]"
              alt=""
            />
            <p className="text-gray-800 text-2xl py-3">
              20+ new courses from bestselling
            </p>
            <p className="">
              Help your learners live better and work smarter with 25 new
              prebuilt courses and 264 lessons based on books by bestselling
              authors like Wendy Wood and David Epstein. Offered in partnership
              with the Next Big Idea Club, these ready-to-use courses can be
              published as is or customized with your own content.
            </p>
          </div>
          <div className="flex flex-col items-start lg:w-1/2  mt-4">
            <img
              src="https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/businessLessons@3x.png"
              className="w-[33rem]"
              alt=""
            />
            <p className="text-gray-600 text-2xl py-3">
              150+ new business lessons
            </p>
            <p className="">
              Empower your learners to level up their skills with new prebuilt,
              video-rich lessons. You can combine lessons into a course, mix
              lessons with your own content, and edit lesson content any way you
              want. Categories include business ethics, career management,
              customer service, problem-solving, sales, and time management
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center py-8 flex-wrap  lg:flex-nowrap   gap-20">
          <div className="flex flex-col items-start lg:w-1/2">
            <img
              src="https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/businessCourses@3x.png"
              className="w-[33rem]"
              alt=""
            />
            <p className="text-gray-800 text-2xl py-3">
              100+ new business courses
            </p>
            <p className="">
              Help your learners live better and work smarter with 25 new
              prebuilt courses and 264 lessons based on books by bestselling
              authors like Wendy Wood and David Epstein. Offered in partnership
              with the Next Big Idea Club, these ready-to-use courses can be
              published as is or customized with your own content.
            </p>
          </div>
          <div className="flex flex-col items-start lg:w-1/2 ">
            <img
              src="https://riseusercontent.com/assets/rise/assets/marketing-images/release-marketing/october-2021/templates@3x.png"
              className="w-[33rem]"
              alt=""
            />
            <p className="text-gray-800 text-2xl py-3">New templates</p>
            <p className="">
              Get started on your courses quickly with new marketing, safety,
              and wellness templates. Each beautifully designed interactive
              template includes relevant lessons and sections to give you a head
              start on the topic
            </p>
          </div>
        </div>
      </motion.div>

      <div>
        <motion.div    
                      initial={{opacity: 0 , x: -20}}
                      whileInView={{opacity : 1 , x: 0}}
                      transition={{duration : 0.8 }}
                      viewport={{once: true , amount : 0.2 }}
        className="relative ">
          <span>
            <svg fill="none" viewBox="0 0 76 44" className="lg:w-14 lg:h-14  w-12 h-12    ">
              <g clip-path="url(#integrations-devices_svg__integrations-devices_svg__clip0)">
                <path
                  fill="#BFBFBF"
                  d="M45.266 41.27c-3.176-.703-5.638-3.121-6.353-6.242-3.812.078-7.703-.39-11.356-.078-.715 3.12-3.256 5.617-6.433 6.32a2.426 2.426 0 00-1.906 2.34V44h27.954v-.39c-.08-1.092-.794-2.106-1.906-2.34z"
                ></path>
                <path
                  fill="#8D8D8E"
                  d="M41.137 39.085a8.666 8.666 0 01-2.303-4.057c-3.812.078-7.703-.39-11.357-.078-.238.936-.555 1.795-1.111 2.497l14.77 1.638z"
                  opacity="0.45"
                ></path>
                <path
                  stroke="#393633"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2.25"
                  d="M6.274 19.27V.858h53.605v9.05M50.11 34.716H13.58"
                ></path>
                <path
                  stroke="#393633"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2.25"
                  d="M72.903 42.674H52.652c-1.191 0-2.144-.936-2.144-2.107V12.092c0-1.17.953-2.106 2.144-2.106h20.25c1.192 0 2.145.936 2.145 2.106v28.475c.08 1.17-.874 2.107-2.144 2.107zm-60.435 0H1.985c-.635 0-1.111-.468-1.111-1.093V20.674c0-.624.476-1.093 1.111-1.093h10.483c.635 0 1.112.469 1.112 1.093V41.58c0 .625-.477 1.093-1.112 1.093zM1.985 22.624h10.483M1.985 39.787h10.483"
                ></path>
                <path
                  fill="#FF6602"
                  d="M45.584 14.199c0 6.787-5.638 12.326-12.547 12.326-6.91 0-12.627-5.461-12.627-12.326M69.409 25.51c0 3.59-2.939 6.554-6.671 6.554-3.653 0-6.671-2.887-6.671-6.553m-45.425 3.9c0 1.873-1.51 3.433-3.495 3.433s-3.494-1.482-3.494-3.433"
                ></path>
              </g>
              <defs>
                <clipPath id="integrations-devices_svg__integrations-devices_svg__clip0">
                  <path fill="#fff" d="M0 0h76v44H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </span>
          <p className="lg:text-5xl text-4xl  py-2.5   font-nunito">
            More personalized experiences
          </p>
          <p className="text-base lg:w-[44rem]  w-full  ">
            Now it’s easy to integrate Rise with popular apps like Slack and
            Zapier to build custom experiences for your learners. And with the
            ability to create multiple libraries, a branded welcome email, and
            learning paths with content you create outside of Rise, you can
            provide tailored experiences for every learner. Course creators will
            also love digging into question-level reporting to find out how
            learners answered individual questions on quizze
          </p>
          <div className="py-8 flex  items-center gap-6  flex-wrap lg:flex-nowrap">
            <button className="bg-orange-600 px-5  py-1 text-white rounded-4xl">
              Contact Us
            </button>
            <p className="hover:text-orange-600  underline underline-offset-4 cursor-pointer">
              Check Out Release Notes
            </p>
          </div>

          <div>
            <img
              src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/airplane.svg"
              alt=""
              className="absolute  lg:flex hidden -right-56 top-0"
            />

            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/clouds/cloud_18.svg" 
            alt=""  
            className="absolute -left-60 w-48"
            />
          </div>
        </motion.div>
      </div>

      <motion.div   

       className="grid md:grid-cols-2  grid-cols-1  grid-rows-2 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 place-content-center  mx-auto relative  lg:w-[62rem]  w-full ">
        {cardItem.map((item, index) =>(
             <motion.div    
             initial={{opacity: 0 , y: 30}}
             whileInView={{opacity : 1 , y: 0}}
             transition={{duration : 0.8 }}
             viewport={{once: true , amount : 0.2 }}
             className="py-8">
              <img key={index}
                src={item.img}
                alt=""
              />
              <p className="text-xl text-gray-700 py-3 px-3  font-semibold  ">
                {item.title}
              </p>
              <p className="px-3">
                {item.desc}
              </p>
           </motion.div> 

        )) }

        <div>
          <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/circles/circle_2.png" 
          alt="" 
          className=" absolute -right-[33rem]   bottom-60"
          />
          <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/lightbulb.svg" 
          alt="" 
          className=" absolute lg:flex hidden    -right-[22rem] -bottom-2"
          />
        </div>
       
      </motion.div>


      {/* <div className="py-20">
      <hr class="my-4 border-t border-gray-300" />

      </div> */}
    </div>
  );
};

export default Content;

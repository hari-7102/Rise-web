import React from "react";
import { motion } from "framer-motion";
const Review = () => {
  const review = [
    {
      no: 1,
      img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
      re_name: "ShadowCoder",
      job: "Freelance React Developer",
      dec: "ChatGPT is an advanced . It is particularly useful forcodin web design, and general knowledge queries Whether youre abeginner or an experienced developer, ChatGPT can help you breakdown complex concepts generate code snippets and troubleshoot issues efficiently.",
    },
    {
      no: 1,
      img: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
      re_name: "NeonNomad",
      job: " Django Developer",
      dec: "The principal activity of Jaguar Land Rover is the design, development, manufacture and sale of vehicles bearing the Jaguar and Land Rover marques. Jaguar Land ",
    },
    {
      no: 1,
      img: "https://cdn-icons-png.flaticon.com/128/6997/6997674.png",
      re_name: "CyberFrost",
      job: "UI/UX Developer",
      dec: "Overall, ChatGPT is a powerful AI tool that enhances productivity, supports learning, and assists with technical challenges. While it’s not a replacement for hands-on experience or expert human guidance, it serves as an excellent supplement to your workflow..",
    },
  ];
  return (
    <div className="lg:px-40 lg:py-12  px-8  py-2   ">
      <div className="flex justify-center items-center ">
        <p className="lg:text-5xl  text-4xl  font-audiowide text-orange-600">
          Our Happy Client Say About Us{" "}
        </p>
      </div>

      <motion.div 
            initial={{  opacity: 0 , scale : 0.9}}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, scale : 1}}
            viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center items-center gap-3 lg:py-24  py-8  flex-wrap lg:flex-nowrap   ">
        {review.map((item) => (
          <div className="flex flex-col justify-start items-start gap-8 bg-gray-100  lg:px-8 lg:py-6  px-3 py-4   rounded-2xl w-80 h-80 shadow-[0px_4px_55px_0px_rgba(249,_115,_22,_0.5)]">
            <div className="flex justify-center items-center gap-1">
              <img
                src={item.img}
                alt=""
                className="lg:w-11 lg:h-11   w-9 h-9    "
              />
              <div className="flex flex-col justify-center items-start ">
                <p className="text-base font-semibold">{item.re_name}</p>
                <p className="text-base font-semibold">{item.job}</p>
              </div>
            </div>

            <p className="text-sm">{item.dec}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Review;

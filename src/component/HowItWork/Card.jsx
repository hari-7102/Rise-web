import React from "react";

const Card = () => {
  return (
    <div className="   lg:px-40 lg:py-16  px-14 py-2  ">
      <div className="flex flex-wrap lg:flex-nowrap ">
        <div className=" font-normal lg:w-2/3  w-full ">
          <p className=" lg:text-6xl  text-5xl  font-audiowide">We're will be called </p>
          <p className=" lg:text-5xl  text-4xl font-audiowide text-gray-400 hover:text-orange-600">
            to lead with our team
          </p>

          <p className="py-8 text-base lg:w-2/3  w-full">
            With our professionally designed themes, gorgeous samples, helpful
            templates, and extensive content library, it’s easy for anyone on
            your team to create courses, guides, performance support, and other
            training content.templates, and extensive content library, it’s easy for anyone on
            your team to create courses, guides, performance support, and other
            training content
          </p>

          <button className="text-white bg-orange-600 px-5 py-1 rounded-2xl">
            Contact Us
          </button>
        </div>

        <div className="lg:w-1/3 py-8 w-full justify-center flex rounded-xl ">
          <img
            src="https://images.pexels.com/photos/10507390/pexels-photo-10507390.jpeg"
            alt=""
            className="w-[23rem]   rounded-xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

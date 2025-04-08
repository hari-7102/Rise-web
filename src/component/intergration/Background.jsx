import React from "react";

const Background = () => {
  const Image = [
    {
      no: 1,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/shopify.svg",
    },
    {
      no: 2,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/chargebee.svg",
    },
    {
      no: 3,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/squarespace.svg",
    },
    {
      no: 4,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/stripe.svg",
    },
    {
      no: 5,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/googleSheets.svg",
    },
    {
      no: 6,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/people.svg",
    },
    {
      no: 7,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/bambooHr.svg",
    },
    {
      no: 8,
      img: "https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/typeform.svg",
    },
  ];

  const style = [
    "lg:w-64 lg:absolute lg:top-20 lg:left-[27rem]",
    "lg:w-60 lg:absolute lg:top-20 lg:left-[57rem]",
    "lg:w-44 lg:absolute lg:top-44 lg:right-[8rem]",
    "lg:w-36 lg:absolute lg:top-48 lg:left-[8rem]",
    "lg:w-20 lg:absolute lg:top-[24rem] lg:left-[10rem]",
    "lg:w-44 lg:absolute lg:top-[31rem] lg:left-[29rem]",
    "lg:w-56 lg:absolute lg:top-[31rem] lg:left-[57rem]",
    "lg:w-48 lg:absolute lg:top-[23rem] lg:right-[8rem]",
  ];

  return (
    <div className="py-16 sm:py-28 lg:py-72 bg-gray-100 relative">
      <div className="flex flex-col justify-center items-center text-center px-4">
        <p className="text-3xl sm:text-4xl lg:text-6xl font-nunito">
          Rise connects with more than
        </p>
        <p className="text-2xl sm:text-3xl lg:text-6xl font-nunito mt-2">
          2,000 apps via Zapier
        </p>
      </div>

      {/* Mobile view: grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 px-6 lg:hidden">
        {Image.map((item, index) => (
          <img
            key={item.no}
            src={item.img}
            alt={`Integration ${item.no}`}
            className="w-20 sm:w-24 md:w-28 mx-auto"
          />
        ))}
      </div>

      {/* Large screen: absolute positioned layout */}
      <div className="hidden lg:block">
        {Image.map((item, index) => (
          <img
            key={item.no}
            src={item.img}
            alt={`Integration ${item.no}`}
            className={style[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;

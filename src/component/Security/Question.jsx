import React from "react";

const Question = () => {
  return (
    <div className="lg:py-32 py-11 px-6">
      <div className="flex flex-col justify-center items-center gap-4">
        <span>
          <svg viewBox="0 0 96 80"   className="w-20 h-20 ">
            <g fill="none" fill-rule="evenodd">
              <g fill="#BFBFBF">
                <path d="M12.7 31.3c0-12.6 10.2-22.9 22.9-22.9s22.9 10.2 22.9 22.9"></path>
                <path d="M.7 31.3C.7 25.6 5.3 21 11 21c5.7 0 10.3 4.6 10.3 10.3"></path>
              </g>
              <path
                fill="#BFBFBF"
                d="M95.7 64.3c0-10.7-8.7-19.4-19.4-19.4s-19.4 8.7-19.4 19.4"
              ></path>
              <path
                fill="#8D8E8E"
                d="M45.8 64.3c0-2.6-2.1-4.7-4.7-4.7s-4.7 2.1-4.7 4.7"
              ></path>
              <path
                fill="#383632"
                d="M80.5 42.9H77V32C77 16.7 64.5 4.2 49.2 4.2 34 4.2 21.5 16.7 21.5 32v10.9h-3.4V32C18.1 14.8 32.1.8 49.3.8s31.2 14 31.2 31.2v10.9zM45.8 76.8H35.3c-9.1 0-16.5-7.4-16.5-16.5v-5.7h3.4v5.7c0 7.2 5.9 13.1 13.1 13.1h10.6v3.4h-.1z"
              ></path>
              <path
                fill="#F16622"
                d="M27.8 59.1h-10c-2.5 0-4.6-2.1-4.6-4.6V41.4c0-2.5 2.1-4.6 4.6-4.6h10c2.5 0 4.6 2.1 4.6 4.6v13.2c0 2.5-2.1 4.5-4.6 4.5zm53 0h-10c-2.5 0-4.6-2.1-4.6-4.6V41.4c0-2.5 2.1-4.6 4.6-4.6h10c2.5 0 4.6 2.1 4.6 4.6v13.2c-.1 2.5-2.1 4.5-4.6 4.5zm-24.4 16c0 2.5-2 4.6-4.6 4.6h-4.5c-2.5 0-4.6-2-4.6-4.6 0-2.5 2-4.6 4.6-4.6h4.5c2.6 0 4.6 2.1 4.6 4.6z"
              ></path>
              <path
                fill="#8D8E8E"
                d="M68.7 31.3c0-4.2 3.4-7.6 7.6-7.6 4.2 0 7.6 3.4 7.6 7.6"
              ></path>
            </g>
          </svg>
        </span>
        <p className="lg:text-5xl text-4xl text-black font-nunito">Questions?</p>
        <button   className="bg-orange-600 text-white px-5 py-2 rounded-4xl mt-6">Talk with a Rise Specialist</button>
        <p className="text-lg text-gray-700 text-center ">If you’d like to report a security issue, contact us at <br /> <span className="underline underline-offset-4 hover:text-orange-600"> security-disclosure@rise.com</span></p>
      </div> 
    </div>
  );
};

export default Question;

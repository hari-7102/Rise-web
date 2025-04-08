import React from "react";

const Encryption = () => {
  return (
    <div className="lg:px-32 lg:py-24 px-6 py-4">
      <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
        <div className="lg:w-1/2  w-full flex flex-col justify-center items-start ">
          <span>
            <svg viewBox="0 0 72 57" className="w-14 h-14 ">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#8D8E8E"
                  d="M56.1 22.4v.2c0 3.6-1.1 6.5-2.6 9.5.6.6.7 1.6 0 2.4-.8.8-1.5 1.6-1.8 2.5-.2.6-.7 1-1.2 1.2-.7 1.5-1.5 3-2.2 4.5h23.4c-.1-9.8-6.7-17.9-15.6-20.3z"
                ></path>
                <path
                  fill="#BFBFBF"
                  d="M23.4 54.5c0-3.2-2.6-5.7-5.7-5.7S12 51.4 12 54.5m11.3-31.9c0-6.2-5.1-11.3-11.3-11.3C5.8 11.3.7 16.4.7 22.6"
                ></path>
                <path
                  fill="#383632"
                  fill-rule="nonzero"
                  d="M35.2 56.8c-.3 0-.5-.1-.8-.3L27.3 50c-8.6-7.9-13.5-19.2-13.5-30.9V4.9c0-.5.3-.9.8-1.1 13.3-4.6 28-4.7 41.3-.2l.6.2c.5.2.8.6.8 1.1v13.8c0 12-5.1 23.4-14.1 31.4l-7.3 6.5c-.2.2-.5.2-.7.2zM16.1 5.7v13.5c0 11.1 4.7 21.7 12.8 29.2l6.3 5.8 6.5-5.8C50.2 40.9 55 30 55 18.7v-13c-12.5-4.2-26.3-4.2-38.9 0z"
                ></path>
                <circle cx="35.2" cy="16.9" r="10.1" fill="#F16622"></circle>
                <circle cx="35.2" cy="12.2" r="1.5" fill="#FFF"></circle>
                <path
                  fill="#F16622"
                  d="M39.8 31.7l1.7-1.9-2.2-2.5v-5.7H31V44l4.1 4.7 6.4-7.2-1.7-1.9 1.7-2-1.7-2 1.7-1.9z"
                ></path>
              </g>
            </svg>
          </span>
          <p className="text-5xl py-4">Encryption</p>
          <p className="text-base text-gray-700 py-2 font-sans lg:w-[35rem]">
            Rise uses the most advanced encryption technology  publicly
            available to secure data. Using PKCS (Public Key Cryptography
            Standard) #1 SHA-256 with 2048-bit RSA  encryption, Rise
            encrypts data at rest as well as all network  traffic into and
            out of AWS. In addition, the cryptographic  key management
            process in Rise includes key rotation.
          </p>
        </div>

        <div className="lg:w-1/2 w-full relative  ">
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/circles/circle_2.png"
            alt=""
            className="w-96 mt-10 ml-7"
          />
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/security/security-lock-with-tail.svg"
            alt=""
            className="absolute top-14 -left-36"
          />
        </div>
      </div>
    </div>
  );
};

export default Encryption;

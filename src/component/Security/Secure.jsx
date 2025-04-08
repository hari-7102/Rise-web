import React from "react";

const Secure = () => {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-1/2 ">
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/security/security-path-with-tail.svg"
            alt=""
          />
        </div>

        <div className="lg:w-1/2 px-6 lg:px-28 py-16">
          <span>
            <svg viewBox="0 0 61 53" className="w-14 h-14">
              <g fill="none" fill-rule="evenodd">
                <g fill="#BFBFBF" transform="translate(7 9)">
                  <circle cx="6" cy="5.2" r="4.9"></circle>
                  <path d="M11.5 16.9c0 2.9-2.5 3.7-5.5 3.7S.5 19.8.5 16.9C.5 14 3 8.8 6 8.8s5.5 5.3 5.5 8.1z"></path>
                </g>
                <path
                  fill="#383632"
                  fill-rule="nonzero"
                  d="M50.3 45.5H1.8c-.6 0-1.1-.5-1.1-1.1v-43C.7.8 1.2.3 1.8.3h48.5c.6 0 1.1.5 1.1 1.1v43c0 .6-.5 1.1-1.1 1.1zM2.9 43.3h46.3V2.5H2.9v40.8z"
                ></path>
                <circle cx="45.3" cy="37.9" r="15" fill="#F16622"></circle>
                <g fill="#FFF">
                  <path d="M36.001 37.044l2.829-2.828 8.414 8.414-2.828 2.829z"></path>
                  <path d="M44.378 45.389l-2.829-2.829 12.304-12.303 2.828 2.828z"></path>
                </g>
                <path
                  fill="#BFBFBF"
                  d="M42.1 13.1h-18c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7h18c.9 0 1.7.8 1.7 1.7 0 .9-.7 1.7-1.7 1.7z"
                ></path>
                <path
                  fill="#8D8E8E"
                  d="M37.1 20.6h-13c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7h13c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"
                ></path>
                <path
                  fill="#BFBFBF"
                  d="M28.9 28.2h-4.8c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7h4.8c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"
                ></path>
                <path
                  fill="#383632"
                  d="M25.2 36.6H8c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h17.2c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
                ></path>
              </g>
            </svg>
          </span>
          <p className="lg:text-5xl text-4xl py-5">Secure authentication</p>
          <p className="text-base text-gray-700">
            Authentication in Rise is built on our internal identity  provider
            that follows industry-leading standards and uses  
            settings. Rise also supports Google authentication default  and single
            sign-on (SSO) powered by SAML 2.0, built on Okta.
          </p>
          <button  className="bg-orange-600 text-white px-5 py-2 rounded-3xl mt-14 font-semibold">Download White Paper</button>
        </div>
      </div>
    </div>
  );
};

export default Secure;

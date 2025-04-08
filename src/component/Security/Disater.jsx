import React from "react";

const Disater = () => {
  return (
    <div className="lg:py-20 py-8 px-5 bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-3">
        <span>
          <svg viewBox="0 0 46 59" className="w-14 h-14 ">
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#BFBFBF"
                d="M18.8 19.1V12c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v7.1h6.4V12c0-6.1-5-11.1-11.1-11.1S12.4 5.9 12.4 12v7.1h6.4z"
              ></path>
              <g stroke-linecap="round" stroke-width="2.25">
                <path stroke="#BFBFBF" d="M44.5 31.7h-5.8"></path>
                <path stroke="#8D8E8E" d="M44.5 37.7h-5.8"></path>
                <path stroke="#BFBFBF" d="M44.5 43.8h-5.8M8.2 31.7H2.4"></path>
                <path stroke="#8D8E8E" d="M8.2 37.7H2.4"></path>
                <path stroke="#BFBFBF" d="M8.2 43.8H2.4"></path>
              </g>
              <g fill="#F16622" transform="translate(16 26)">
                <circle cx="7.5" cy="7.9" r="7.1"></circle>
                <path d="M2.9 22.6h9.2L9.3 8.9H5.7z"></path>
              </g>
              <path fill="#8C8D8E" d="M28.2 19.1h6.4V16l-6.4-2.6z"></path>
              <path
                stroke="#383632"
                stroke-linejoin="round"
                stroke-width="2.25"
                d="M44.859 57.395h-42.8v-37.8h42.8z"
              ></path>
            </g>
          </svg>
        </span>
        <div className="lg:text-5xl text-4xl text-center py-3 text-gray-800">
          <p>Disaster recovery and</p>
          <p>business continuity</p>
        </div>
        <p className="text-center py-8 text-gray-700">
          Rise replicates data across five separate, physically independent, and <br />
          highly secure AWS locations, ensuring high availability, data <br />
          integrity, and protection from local failures such as power outages. <br />
          We save a full backup copy of production data multiple times per day <br />
          to a remote location to ensure rapid recovery in the event of a <br />
          large-scale disaster. We annually test the process of recovering data <br />
          from the backup location.
        </p>
        <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/security/security-locations.svg" 
            alt="" 
            className="mt-3.5"/>
      </div>
    </div>
  );
};

export default Disater;

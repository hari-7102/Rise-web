import React from "react";
import certified from '../../assets/certified.png'
import CSA from '../../assets/csa.png'
import lock from '../../assets/lock.png'
import { motion } from "framer-motion";

const Compliance = () => {
  return (
    <div className="lg:py-44  px-6 py-10 ">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-gray-800 lg:text-5xl text-4xl">Compliance and certifications</p>
        <p className="text-center  py-10 text-gray-700">
          Rise’s privacy-by-design mandate ensures that only necessary data is{" "}
          <br />
          collected, and makes it easy to see and manage your data. Rise <br />
          partners with carefully selected industry leaders with first-rate{" "}
          <br />
          security practices.
        </p>
      </div>
      <motion.div    
                    initial ={{opacity : 0 , scale : 0.9 }}
                    whileInView={{opacity : 1 ,scale : 1}}
                    transition={{duration : 0.6 }}
                    viewport={{once : true , amount : 0.4 }}
       className="flex justify-center items-end gap-20 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://rise.com/assets/static/soc2.66933e61.png"
            alt=""
            className="w-28"
          />
          <p>AICIPA SOCA2 Type 2</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={certified}
            alt=""
            className="w-32 mb-8"
          />
          <p>AICIPA SOCA2 Type 2</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={CSA}
            alt=""
            className="w-36 mb-8"
          />
          <p>AICIPA SOCA2 Type 2</p>
        </div>
      </motion.div>
      <motion.div    
                          initial ={{opacity : 0 , scale : 0.9 }}
                          whileInView={{opacity : 1 ,scale : 1}}
                          transition={{duration : 0.6 }}
                          viewport={{once : true , amount : 0.4 }}
        className="flex justify-center items-end  py-14 gap-24  flex-wrap lg:flex-nowrap  ">
        <div className="flex flex-col justify-center   items-center">
            <img src="https://rise.com/assets/static/eu-shield.0c4a38c5.png" alt="" className="w-28"/>
            <p className="text-center ">EU-US and Swiss-US <br /> Privacy Sheild </p>
        </div>
        <div className="flex flex-col justify-center   items-center">
            <img src={lock} alt="" className="w-20"/>
            <p className="text-center ">EU-US and Swiss-US <br /> Privacy Sheild </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Compliance;

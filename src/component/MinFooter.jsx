import React from 'react'
import { BsEmojiLaughingFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const MinFooter = () => {

  const navigate = useNavigate('')
  return (
    <div className='text-center'>
        <div className="justify-center items-center flex  flex-col lg:py-20  py-5  ">
        <BsEmojiLaughingFill size={41}    className="text-orange-600"/>
        <p   className="lg:text-4xl md:text-2xl font-nunito py-6 ">Rise is the online training system  <br /> your employees will love</p>
        <button className="text-white rounded-4xl px-5 py-2 bg-orange-600 cursor-pointer"  onClick={() => navigate('/contact')}  >Contact Us</button>
        </div>
    </div>
  )
}

export default MinFooter
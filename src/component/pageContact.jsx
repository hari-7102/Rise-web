import React from 'react'
import Move from "../assets/brand.mp4";




const pageContact = () => {
  return (
    <div>
          <div className="relative w-full h-60 flex items-center justify-center text-center text-gray-50">
                {/* Background Video */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-20 "
                  src={Move}
                  preload="auto"
                  loop
                  playsInline
                  autoPlay
                  muted
                ></video>
        
                {/* Dark Overlay for Better Readability (Optional) */}
                <div className="absolute inset-0  bg-opacity-"></div>
        
                {/* Centered Text */}
                <div className="relative z-10 text-gray-800  ">
                  <p className="text-6xl font-audiowide   ">Contact</p>
                  
                </div>
              </div>
    </div>
  )
}

export default pageContact
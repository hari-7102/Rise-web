import React from 'react'
import Navbar from '../component/Navbar'
import MinFooter from '../component/MinFooter'
import Footer from '../component/Footer'
import Hero from '../component/HowItWork/Hero'
import Demo from '../component/HowItWork/Demo'
import Card from '../component/HowItWork/Card'
import WhyArchive from '../component/HowItWork/WhyArchive'
import Movable from '../component/Movable'

const HowItWorks = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card/>
        <Movable/>
        <WhyArchive/>
        <Demo/>
        <MinFooter/>
        <Footer/>
        
    </div>
  )
}

export default HowItWorks
import React from 'react'
import Navbar from '../component/Navbar'
import MinFooter from '../component/MinFooter'
import Footer from '../component/Footer'
import Hero from '../component/whyRise.jsx/Hero'
import Card from '../component/whyRise.jsx/Card'
import Review from '../component/whyRise.jsx/Review'

const WhyRIse = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card/>
        <Review/>
        <MinFooter/>
        <Footer/>
 
    </div>
  )
}

export default WhyRIse
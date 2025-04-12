import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Feature/Hero'
import Training from '../component/Feature/Training'
import Card from '../component/Feature/Card'
import Content from '../component/Feature/Content'
import MinFooter from '../component/MinFooter'
import Footer from '../component/Footer'
const Feature = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <Training/>
        <Card/>
        <Content/>
        <MinFooter/>
        <Footer/>
    </div>
  )
}



export default Feature

import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Movable from '../component/Movable'
import Training from '../component/Training'
import Video from '../component/Video'
import Images from '../component/Images'
import List from '../component/List'
import Demo from '../component/Demo'
import Footer from '../component/Footer'
import MinFooter from '../component/MinFooter'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Movable/>
        <Training/>
        <Video/>
        <Images/>
        <List/>
        <Demo/>
        <MinFooter/>
        <Footer/>
        
    </div>
  )
}

export default Home
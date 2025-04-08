import React from 'react'
import Navbar from '../component/Navbar'
import Video from '../component/Video'
import Gird from '../component/Example/Gird'
import MinFooter from '../component/MinFooter'
import Footer from '../component/Footer'
import Demo from '../component/HowItWork/Demo'

const Example = () => {
  return (
    <div>
        <Navbar/>
        <Video/>
        <Gird/>
        <Demo/>
        <MinFooter/>
      <Footer/>
       
    </div>
  )
}

export default Example
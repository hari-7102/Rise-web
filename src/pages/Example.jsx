import React from 'react'
import Navbar from '../component/Navbar'
import Video from '../component/Video'
import Gird from '../component/Example/Gird'
import MinFooter from '../component/MinFooter'
import Footer from '../component/Footer'
import Demo from '../component/HowItWork/Demo'
import Scrolling from '../component/Example/Scrolling'

const Example = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Scrolling/>
        <Video/>
        <Gird/>
        <Demo/>
        <MinFooter/>
      <Footer/>
       
    </div>
  )
}

export default Example
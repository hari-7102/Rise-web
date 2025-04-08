import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import MinFooter from '../component/MinFooter'
import Contact from '../component/contact/Contact'

import  Page from '../component/pageContact'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <Contact/>
        <MinFooter/>
        <Footer/>
       
    </div>
  )
}

export default ContactUs
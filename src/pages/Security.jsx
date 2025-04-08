import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Security/Hero'
import Protector from '../component/Security/Protector'
import Encryption from '../component/Security/Encryption'
import Secure from '../component/Security/Secure'
import Disater from '../component/Security/Disater'
import Compliance from '../component/Security/Compliance'
import Partner from '../component/Security/Partner'
import Question from '../component/Security/Question'
import MinFooter from '../component/MinFooter'
import Footer from '../component/Footer'

const Security = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <Protector/>
        <Encryption/>
        <Secure/>
        <Disater/>
        <Compliance/>
        <Partner/> 
        <Question/>
        
        <Footer/>

    </div>
  )
}

export default Security
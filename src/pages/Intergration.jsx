import React from 'react'
import Navbar from '../component/Navbar'
import MinFooter from '../component/MinFooter'
import Footer from '../component/Footer'
import Hero from '../component/intergration/Hero'
import Background from '../component/intergration/Background'

import AppInt from '../component/intergration/AppInt'
import Column from '../component/intergration/Column'
import Domain from '../component/intergration/Domain'
import ContentInt from '../component/intergration/ContentInt'

const Intergration = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Background/>
        <ContentInt/>
        <Column/>
        <Domain/>
        <AppInt/>
        <MinFooter/>
        <Footer/>
    </div>
  )
}

export default Intergration
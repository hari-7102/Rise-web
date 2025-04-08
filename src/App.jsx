import React from 'react'
import { BrowserRouter as Routers , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import WhyRIse from './pages/WhyRIse'
import HowItWorks from './pages/HowItWorks'
import Example from './pages/Example'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './component/utils/ScrollToTop'
import Intergration from './pages/Intergration'
import Security from './pages/Security'
import Feature from './pages/Feature'

const App = () => {
  return (
    <div>
      <Routers>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/whyrise' element={<WhyRIse/>}/>
          <Route path='/howitworks' element={<HowItWorks/>}/>
          <Route path='/example' element={<Example/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/intergration' element={<Intergration/>}/>
          <Route path='/security' element={<Security/>}/>
          <Route path='/feature' element={<Feature/>}/>
        </Routes>
      </Routers>
    </div>
  )
}

export default App


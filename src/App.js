import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import License from './Pages/License/License'
import ImageCarousel from './Components/ImageCarousel/ImageCarousel'

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <ImageCarousel/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/license' element={<License/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  )
}

export default App

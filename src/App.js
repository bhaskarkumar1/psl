import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import License from './Pages/License/License'
//import ImageCarousel from './Components/ImageCarousel/ImageCarousel'
import Products from './Pages/Product/Products'
import Lmtools from './Pages/Product/Lmtools'
import Freelmtools from './Pages/Product/Freelmtools'
import Hardwaretools from './Pages/Product/Hardwaretools'
import Career from './Pages/Career/Career'
import Services from './Pages/Services/Services'
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment'
import SoftwareTesting from './Pages/Services/SoftwareTesting'

const App = () => {
  return (
    
      <BrowserRouter>
      
      <Navbar/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/license' element={<License/>}/>
          <Route path='/lmtools' element={<Lmtools/>}/>
          <Route path='/freelmtools' element={<Freelmtools/>}/>
          <Route path='/hardwaretools' element={<Hardwaretools/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/softwaredevelopment' element={<SoftwareDevelopment/>}/>
          <Route path='/softwaretesting' element={<SoftwareTesting/>}/>

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  )
}

export default App
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/raleway'; // Defaults to 400 weight
import './App.css'; // Global styles including font-family
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import License from './Pages/License/License';
import Products from './Pages/Product/Products';
import Testingtools from './Pages/Product/Testingtools';
import Lmtools from './Pages/Product/Lmtools';
import Hardwaretools from './Pages/Product/Hardwaretools';
import Career from './Pages/Career/Career';
import Services from './Pages/Services/Services';
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment';
import SoftwareTesting from './Pages/Services/SoftwareTesting';

const App = () => {
  return (
    <BrowserRouter>
      {/* Wrapper ensures layout consistency */}
      <div className="app">
        {/* Navbar is always at the top */}
        <Navbar />
        {/* Main content area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testing-tools" element={<Testingtools />} />
            <Route path="/lm-tools" element={<Lmtools />} />
            <Route path="/hardware-tools" element={<Hardwaretools />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/license" element={<License />} />
            <Route path="/services" element={<Services />} />
            <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
            <Route path="/softwaretesting" element={<SoftwareTesting />} />
          </Routes>
        </div>
        {/* Footer is always at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

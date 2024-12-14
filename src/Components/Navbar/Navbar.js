import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../../assets/logo 1.png'; 
import pslLogo from '../../assets/psl.png'; 

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);  // Toggle the dropdown
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo1} alt="Logo 1" className="navbar-logo-lm" />
          <img src={pslLogo} alt="PSL Logo" className="navbar-logo-psl" />
        </div>
        
        {/* Navigation Menu */}
        <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          
          {/* Product Dropdown */}
          <li className="nav-item dropdown">
            <Link to="/products" className="nav-links">Product</Link>
            <span onClick={toggleProductDropdown} className={isProductDropdownOpen ? "arrow-up" : "arrow-down"}>&#9660;</span> {/* Toggle Arrow */}
            
            {/* Dropdown Menu */}
            {isProductDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/lmtools" className="nav-links">LMtools</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/freelmtools" className="nav-links">FreeLMtools</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/hardwaretools" className="nav-links">Hardwaretools</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link to="/services" className="nav-links">Services</Link>
          </li>

          <li className="nav-item">
            <Link to="/career" className="nav-links">Career</Link>
          </li>

          {/* Contact Tab */}
          <li className="nav-item contact-item">
            <Link to="/contact" className="nav-links contact-link">Contact</Link>
          </li>
        </ul>
        
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

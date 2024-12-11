import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../../assets/logo 1.png'; 
import pslLogo from '../../assets/psl.png'; 


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-left">
          <img src={logo1} alt="Logo 1" className="navbar-logo-left" />
          <img src={pslLogo} alt="PSL Logo" className="navbar-psl-logo" />
        </div>
        <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

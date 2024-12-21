import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../../assets/logo 1.png';
import pslLogo from '../../assets/psl.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo1} alt="Logo 1" className="navbar-logo-lm" />
          </Link>
          <Link to="/">
            <img src={pslLogo} alt="PSL Logo" className="navbar-logo-psl" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={() => setMenuOpen(false)}>Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-links" onClick={() => setMenuOpen(false)}>Career</Link>
          </li>
          <li className="nav-item contact-item">
            <Link to="/contact" className="nav-links contact-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

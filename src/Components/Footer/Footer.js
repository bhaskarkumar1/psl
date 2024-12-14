import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="main-content">
      {/* Main content here */}

      <footer className="footer">
        {/* Left Section: Address and Contact */}
        <div className="footer-left">
          <p>#677, 1ST FLOOR, SUITE #187, 27TH MAIN ROAD</p>
          <p>13TH CROSS, SECTOR-1, HSR LAYOUT</p>
          <p>BENGALURU, KARNATAKA - 560102</p>
          <div className="footer-contact">
            <p>Email: contact@paleisoftware.com</p>
            <p>Phone: +91-9876543210</p>
          </div>
        </div>

        {/* Center Section: Quick Tabs */}
        <div className="footer-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Right Section: Copyright */}
        <div className="footer-right">
          <p>© COPYRIGHT 2024 PALEI SOFTWARE PVT. LTD.</p>
          <p className="footer-links">
            <Link to="/license" style={{ color: '#a9a9a9', textDecoration: 'none' }}>Licenses</Link> | 
            <Link to="/terms" style={{ color: '#a9a9a9', textDecoration: 'none' }}>Terms and Conditions</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

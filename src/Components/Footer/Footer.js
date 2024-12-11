import React from 'react';
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>PALEI SOFTWARE @ 2024. All rights reserved.</p>
      <p>
        <Link to="/contact" className="footer-link">Contact us</Link>
        |
        <Link to="/license" className="footer-link">License</Link>
      </p>
    </footer>
  );
};

export default Footer;

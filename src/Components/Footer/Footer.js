import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Scroll to top and navigate to the desired page
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the target route
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
  };

  return (
    <div className="main-content">
      {/* Footer Section */}
      <footer className="footer">
        {/* Left Section: Address and Contact */}
        <div className="footer-left">
          <p>PLOT NO - 1169/1758, Soro, Baleshwar,</p>
          <p>Odisha - 756045</p>
          <div className="footer-contact">
            <p>Email: contact@paleisoftware.com</p>
            <p>Phone: +91-9876543210</p>
          </div>
        </div>

        {/* Center Section: Quick Tabs */}
        <div className="footer-center">
          <p onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>
            Home
          </p>
          <p onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>
            About
          </p>
          <p onClick={() => handleNavigation('/products')} style={{ cursor: 'pointer' }}>
            Products
          </p>
          <p onClick={() => handleNavigation('/services')} style={{ cursor: 'pointer' }}>
            Services
          </p><p onClick={() => handleNavigation('/career')} style={{ cursor: 'pointer' }}>
            Career
          </p>
          <p onClick={() => handleNavigation('/contact')} style={{ cursor: 'pointer' }}>
            Contact Us
          </p>
        </div>

        {/* Right Section: Copyright */}
        <div className="footer-right">
          <p>© COPYRIGHT 2024 PALEI SOFTWARE PVT. LTD.</p>
          <p>
            <span onClick={() => handleNavigation('/license')} style={{ cursor: 'pointer' }}>
              Licenses
            </span>{" "}
            |{" "}
            <span onClick={() => handleNavigation('/terms')} style={{ cursor: 'pointer' }}>
              Terms and Conditions
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Products = () => {
  return (
    <div className="product-page">
      <header className="product-header">
        <div className="product-header-content">
          <h1>Our Products</h1>
          <p>
            Discover our range of innovative tools and solutions to empower your
            business and operations.
          </p>
        </div>
      </header>

      <div className="product-content">
        <div className="product-section">
          <h2>Testing Tools</h2>
          <p>
            Explore our cutting-edge testing tools designed to ensure the quality,
            reliability, and performance of your software and hardware.
          </p>
          <Link to="/testing-tools" className="get-started-btn">
            Get Started
          </Link>
        </div>

        <div className="product-section">
          <h2>LM Tools</h2>
          <p>
            Unlock the power of efficiency with our advanced LM Tools, crafted to
            streamline your processes and enhance productivity.
          </p>
          <Link to="/lm-tools" className="get-started-btn">
            Get Started
          </Link>
        </div>

        <div className="product-section">
          <h2>Hardware Tools</h2>
          <p>
            Our hardware tools provide robust and reliable solutions for all your
            technical requirements, ensuring seamless operations.
          </p>
          <Link to="/hardware-tools" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;

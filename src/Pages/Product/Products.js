import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-page">
      {/* Header Section */}
      <header className="product-header">
        <div className="product-header-content">
          <h1>Our Products</h1>
          <p>Discover our range of innovative tools and solutions to empower your business and operations.</p>
        </div>
      </header>

      {/* Product Content */}
      <div className="product-content">
        {/* Testing Tools Block */}
        <div className="product-section">
          <h2>Testing Tools</h2>
          <p>
            Explore our cutting-edge testing tools designed to ensure the quality, reliability, and performance of your software and hardware.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>

        {/* Hardware Tools Block */}
        <div className="product-section">
          <h2>Hardware Tools</h2>
          <p>
            Our hardware tools provide robust and reliable solutions for all your technical requirements, ensuring seamless operations.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>

        {/* LMTools Block */}
        <div className="product-section">
          <h2>LMTools</h2>
          <p>
            Unlock the power of efficiency with our advanced LMTools, crafted to streamline your processes and enhance productivity.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

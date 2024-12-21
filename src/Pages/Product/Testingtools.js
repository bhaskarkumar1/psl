import React from 'react';
import './ProductDetails.css';

const Testingtools = () => {
  return (
    <div className="product-details-container">
      <div className="product-content">
        <h2 className="product-heading">Testing Tools</h2>
        <p className="product-paragraph">
          Explore our cutting-edge testing tools designed to ensure the quality,
          reliability, and performance of your software and hardware.
        </p>
      </div>
      <div className="product-image">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Testing Tools"
        />
      </div>
    </div>
  );
};

export default Testingtools;

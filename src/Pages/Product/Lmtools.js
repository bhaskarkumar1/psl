import React from 'react';
import './ProductDetails.css';

const Lmtools = () => {
  return (
    <div className="product-details-container">
      <div className="product-content">
        <h2 className="product-heading">LM Tools</h2>
        <p className="product-paragraph">
          Unlock the power of efficiency with our advanced LM Tools, crafted to
          streamline your processes and enhance productivity.
        </p>
      </div>
      <div className="product-image">
        <img
          src="https://via.placeholder.com/400x300"
          alt="LM Tools"
        />
      </div>
    </div>
  );
};

export default Lmtools;

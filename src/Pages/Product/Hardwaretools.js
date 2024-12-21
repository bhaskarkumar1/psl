import React from 'react';
import './ProductDetails.css';

const Hardwaretools = () => {
  return (
    <div className="product-details-container">
      <div className="product-content">
        <h2 className="product-heading">Hardware Tools</h2>
        <p className="product-paragraph">
          Our hardware tools provide robust and reliable solutions for all your
          technical requirements, ensuring seamless operations and durability.
        </p>
      </div>
      <div className="product-image">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Hardware Tools"
        />
      </div>
    </div>
  );
};

export default Hardwaretools;

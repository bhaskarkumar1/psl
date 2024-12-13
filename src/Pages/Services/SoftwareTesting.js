import React from "react";
import "./ServiceDetails.css";

const SoftwareTesting = () => {
  return (
    <div className="details-page">
      <header className="details-header">
        <h1>Software Testing</h1>
      </header>
      <div className="details-content">
        <div className="details-text">
          <h2>About Software Testing</h2>
          <p>
            Our Software Testing services ensure that your applications are reliable,
            secure, and bug-free. We identify and resolve issues before deployment to
            ensure a seamless user experience.
          </p>
          <h3>Testing Services</h3>
          <ul>
            <li>Functional Testing</li>
            <li>Performance Testing</li>
            <li>Security Testing</li>
            <li>Automation Testing</li>
          </ul>
          <h3>Our Approach</h3>
          <p>
            With a meticulous testing process, we help you achieve robust applications
            that are ready for the market. Our expertise ensures your software meets the
            highest quality standards.
          </p>
        </div>
        <div className="details-image">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Software Testing"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareTesting;

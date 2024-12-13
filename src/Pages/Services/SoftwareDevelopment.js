import React from "react";
import "./ServiceDetails.css";

const SoftwareDevelopment = () => {
  return (
    <div className="details-page">
      <header className="details-header">
        <h1>Software Development</h1>
      </header>
      <div className="details-content">
        <div className="details-text">
          <h2>About Software Development</h2>
          <p>
            Our Software Development services are tailored to deliver high-quality applications
            that solve your business problems. From initial concept to deployment, we ensure every
            project is delivered with precision and care.
          </p>
          <h3>Services Offered</h3>
          <ul>
            <li>Custom Application Development</li>
            <li>Enterprise Software Solutions</li>
            <li>Mobile App Development</li>
            <li>Cloud-Based Solutions</li>
          </ul>
          <h3>Why Choose Us?</h3>
          <p>
            We focus on scalability, reliability, and delivering exceptional user experiences.
            Our team of experienced developers is well-versed in modern tools and technologies to
            ensure your project succeeds.
          </p>
        </div>
        <div className="details-image">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Software Development"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;

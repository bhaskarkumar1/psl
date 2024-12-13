import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Palei Software Pvt Ltd</h1>
        <p>
          At Palei Software, we specialize in innovative software solutions to help businesses thrive in today's digital landscape.
        </p>
      </header>

      <div className="about-content">
        {/* Our Mission */}
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To empower businesses with high-quality, cutting-edge software tools that foster innovation and growth.
          </p>
        </div>

        {/* Our Vision */}
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in software development, recognized for excellence, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Our Values */}
        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Integrity:</strong> Upholding the highest ethical standards in all our operations.
            </li>
            <li>
              <strong>Innovation:</strong> Leveraging technology to create impactful solutions.
            </li>
            <li>
              <strong>Customer Centricity:</strong> Delivering beyond expectations.
            </li>
            <li>
              <strong>Excellence:</strong> Striving for perfection in every project.
            </li>
          </ul>
        </div>

        {/* Our History */}
        <div className="about-section">
          <h2>Our History</h2>
          <p>
            Since 2023, Palei Software Pvt Ltd has been committed to providing technology solutions that enable businesses to transform and grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

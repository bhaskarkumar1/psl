import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBug } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <div className="services-header-container">
          <h1>Our Services</h1>
          <p>Explore our expertise in delivering top-notch solutions for your business needs.</p>
        </div>
      </header>

      <div className="services-content">
        {/* Software Development Section */}
        <div className="service-section">
          <div className="text-content">
            <h2>
              <FontAwesomeIcon icon={faCode} className="icon" /> Software Development
            </h2>
            <p>
              Our software development services include crafting custom applications,
              enterprise solutions, and mobile apps. We leverage modern technologies to
              create scalable, reliable, and efficient solutions tailored to your business
              needs. Our development process ensures seamless integration, enhanced
              performance, and user satisfaction.
            </p>
            <ul>
              <li>Custom Application Development</li>
              <li>Enterprise Software Solutions</li>
              <li>Mobile App Development</li>
              <li>Cloud-Based Solutions</li>
            </ul>
            <button className="learn-more-btn"><span><Link to='/softwaredevelopment'>Get Started</Link></span></button>
          </div>
          <div className="image-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Software Development"
            />
          </div>
        </div>

        {/* Software Testing Section */}
        <div className="service-section reverse">
          <div className="image-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Software Testing"
            />
          </div>
          <div className="text-content">
            <h2>
              <FontAwesomeIcon icon={faBug} className="icon" /> Software Testing
            </h2>
            <p>
              Our software testing services ensure your applications are reliable and
              bug-free. From functional testing to automation testing, our QA experts
              meticulously evaluate every aspect of your software. We identify and resolve
              potential issues before deployment, ensuring smooth operations and enhanced
              user experience.
            </p>
            <ul>
              <li>Functional Testing</li>
              <li>Performance Testing</li>
              <li>Security Testing</li>
              <li>Automation Testing</li>
            </ul>
            <button className="learn-more-btn"><span><Link to='/softwaretesting'>Get Started</Link></span></button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

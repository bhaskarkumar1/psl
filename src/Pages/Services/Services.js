import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBug,
  faMobileAlt,
  faCloud,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <div className="services-header-container">
          <h1>Our Services</h1>
          <p>Explore our expertise in delivering innovative, efficient, and customized solutions to drive your business success.</p>
        </div>
      </header>

      <div className="services-content">
        {/* Service Blocks */}
        <div className="service-section">
          <h2>
            <FontAwesomeIcon icon={faCode} className="icon" /> Software Development
          </h2>
          <p>
            We design and develop robust, scalable, and tailored software solutions
            that meet your unique business challenges. From custom applications to
            enterprise-level solutions, our expertise ensures seamless performance
            and user satisfaction.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>

        <div className="service-section">
          <h2>
            <FontAwesomeIcon icon={faBug} className="icon" /> Software Testing
          </h2>
          <p>
            Our comprehensive software testing services ensure that your products
            are bug-free, reliable, and optimized for peak performance. Trust us to
            enhance the quality of your software with rigorous and effective QA processes.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>

        <div className="service-section">
          <h2>
            <FontAwesomeIcon icon={faMobileAlt} className="icon" /> Mobile App Development
          </h2>
          <p>
            Transform your ideas into interactive, user-friendly mobile applications.
            We deliver high-performing apps for both iOS and Android, ensuring an
            exceptional user experience and robust functionality.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>

        <div className="service-section">
          <h2>
            <FontAwesomeIcon icon={faCloud} className="icon" /> Cloud Computing
          </h2>
          <p>
            Embrace the future with our cloud computing solutions. From migration to
            cloud-native applications, we provide secure, scalable, and cost-effective
            infrastructure for your business growth.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>

        <div className="service-section">
          <h2>
            <FontAwesomeIcon icon={faCode} className="icon" /> Web Development
          </h2>
          <p>
            Elevate your online presence with stunning, responsive, and dynamic websites.
            Our web development services focus on delivering user-friendly interfaces,
            seamless navigation, and cutting-edge functionality tailored to your brand.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>

        <div className="service-section">
          <h2>
            <FontAwesomeIcon icon={faTools} className="icon" /> IT Support
          </h2>
          <p>
            Stay ahead with our proactive IT support services. We provide 24/7
            assistance, troubleshooting, and advanced solutions to minimize downtime
            and ensure your operations run smoothly.
          </p>
          <button className="learn-more-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./Product.css";

const Products = () => {
  return (
    <div className="product-page">
      {/* Header Section */}
      <header className="product-header">
        <div className="product-header-container">
          <h1>License Management Tool</h1>
          <p>
            Our License Management Tool offers a comprehensive solution to
            manage software licenses for businesses of all sizes.
          </p>
        </div>
      </header>

      {/* Key Features Section */}
      <div className="product-section">
        <h2>Key Features</h2>
        <ul>
          <li>Software License Tracking</li>
          <li>Real-Time Monitoring</li>
          <li>Customizable Reports</li>
          <li>Cloud Integration</li>
          <li>Renewal Notifications</li>
        </ul>
      </div>

      {/* Technical Specifications Section */}
      <div className="product-section">
        <h2>Technical Specifications</h2>
        <ul>
          <li>Compatibility: Windows, Linux, MacOS</li>
          <li>Security: GDPR compliant, encrypted data</li>
          <li>Integrations: Microsoft SCCM, Jira, ServiceNow</li>
          <li>Data Storage: Cloud-based with unlimited capacity</li>
        </ul>
      </div>

      {/* Pricing Plans Section */}
      <div className="product-section">
        <h2>Pricing Plans</h2>
        <table>
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Features</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>Track up to 10 licenses, basic reports</td>
              <td>$49/month</td>
            </tr>
            <tr>
              <td>Professional</td>
              <td>Track up to 50 licenses, advanced reports</td>
              <td>$149/month</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>Unlimited licenses, integrations, priority support</td>
              <td>$499/month</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Call to Action Section */}
      <div className="product-section">
        <h2>Get Started</h2>
        <button className="cta-button">Start Your Free Trial</button>
        <button className="cta-button">Request a Demo</button>
        <button className="cta-button">Contact Sales</button>
      </div>
    </div>
  );
};

export default Products;

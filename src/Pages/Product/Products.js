import React from "react";
import "./Product.css";

const Products = () => {
  return (
    <div className="product-page">
      <div className="product-header">
        <h1 className="product-title">License Management Tool</h1>
        <p className="product-overview">
          Our License Management Tool offers a comprehensive solution to manage software licenses for businesses of all sizes.
        </p>
      </div>

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

      <div className="product-section">
        <h2>Technical Specifications</h2>
        <ul>
          <li>Compatibility: Windows, Linux, MacOS</li>
          <li>Security: GDPR compliant, encrypted data</li>
          <li>Integrations: Microsoft SCCM, Jira, ServiceNow</li>
          <li>Data Storage: Cloud-based with unlimited capacity</li>
        </ul>
      </div>

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

      <div className="product-section">
        <h2>Customer Testimonials</h2>
        <p>"This tool saved us so much time managing our licenses. It's easy to use, and the automated reminders helped us avoid penalties. We highly recommend it!" - John Doe, IT Manager, XYZ Corp.</p>
      </div>

      <div className="product-section">
        <h2>Call to Action</h2>
        <button className="cta-button">Start Your Free Trial</button>
        <button className="cta-button">Request a Demo</button>
        <button className="cta-button">Contact Sales for Enterprise Solutions</button>
      </div>

      {/* <div className="product-section">
        <h2>FAQs</h2>
        <p><strong>Q:</strong> What is the difference between the Basic, Professional, and Enterprise plans?</p>
        <p><strong>A:</strong> The Basic plan is for small businesses, while the Professional and Enterprise plans offer additional features like integrations and unlimited licenses.</p>
      </div> */}
    </div>
  );
};

export default Products;

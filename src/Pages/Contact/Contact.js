import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-header-container">
          <h1>Contact Us</h1>
          <p>We are here to help! Reach out to us for any inquiries or support.</p>
        </div>
      </header>

      <div className="contact-content">
        {/* Get in Touch Block */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to us through any of the following ways:</p>
          <ul>
            <li>
              <strong>Email:</strong> support@itcompany.com
            </li>
            <li>
              <strong>Phone:</strong> +1 234 567 8900
            </li>
            <li>
              <strong>Address:</strong> 123 IT Solutions Lane, Tech City, USA
            </li>
          </ul>
          <div className="map-container">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8364215648175!2d-122.41941608468164!3d37.77492977975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2e9c4d67%3A0x8f6c9a5b8f6cb9e3!2s123%20IT%20Solutions%20Lane%2C%20Tech%20City%2C%20USA!5e0!3m2!1sen!2sin!4v1692029239426!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

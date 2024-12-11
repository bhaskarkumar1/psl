import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h1>About Palei Software Pvt Ltd</h1>
          <p>We are a leading software development company that provides innovative solutions tailored to your business needs. Our team of experienced developers and IT experts work closely with clients to create cutting-edge tools that streamline operations, improve productivity, and help businesses scale.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>At Palei Software Pvt Ltd, our mission is to empower businesses by providing high-quality software tools and IT solutions that foster innovation and growth. We aim to help organizations transform their operations, enhance efficiency, and stay ahead in the competitive market.</p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="vision">
        <div className="container">
          <h2>Our Vision</h2>
          <p>Our vision is to be a global leader in software development, known for our commitment to excellence, innovation, and customer satisfaction. We aspire to build solutions that help businesses grow sustainably while leveraging the latest technologies to address the challenges of tomorrow.</p>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="values">
        <div className="container">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We are committed to maintaining the highest ethical standards in all our operations and client relationships.</li>
            <li><strong>Innovation:</strong> We strive to be at the forefront of technology, continuously improving and creating innovative solutions for our clients.</li>
            <li><strong>Customer Centricity:</strong> Our clients' needs and satisfaction are at the core of everything we do. We aim to exceed expectations in every project.</li>
            <li><strong>Excellence:</strong> We are dedicated to delivering high-quality products and services that help our clients achieve their business goals.</li>
          </ul>
        </div>
      </section>

      {/* Our History Section */}
      <section id="history" className="history">
        <div className="container">
          <h2>Our History</h2>
          <p>Founded in 2023, Palei Software Pvt Ltd started as a small tech startup with the goal of simplifying business processes through technology. Over the years, we’ve grown into a trusted partner for companies across various industries, providing software solutions that drive digital transformation. Our commitment to innovation and quality has helped us build long-term relationships with our clients, many of whom continue to trust us as their technology partner.</p>
        </div>
      </section>
    </div>
  );
};

export default About;

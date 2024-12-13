import React from 'react';
import './Home.css';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'

const Home= () => {
  return (
    <div>
      <ImageCarousel/>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Palei Software Pvt Ltd</h1>
          <p>Your Reliable Partner in Innovative Software Solutions</p>
          <a href="#services" className="btn">Explore Our Solutions</a>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="welcome">
        <div className="container">
          <h2>Transforming Ideas into Digital Solutions</h2>
          <p>Palei Software Pvt Ltd is at the forefront of technology, providing cutting-edge software tools and solutions designed to streamline business operations and boost productivity. Our mission is to enable businesses to leverage the power of technology to accelerate growth.</p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="vision">
        <div className="container">
          <h2>Our Vision</h2>
          <p>We strive to create innovative, user-friendly, and scalable software solutions that empower organizations to stay ahead in the ever-evolving digital world. Our goal is to help you unlock new business opportunities and achieve operational excellence.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const slider = document.querySelector('.slider');
    let slideIndex = 0;

    // Function to move the slides
    const moveSlide = () => {
      slideIndex++;
      if (slideIndex >= slider.children.length) {
        slideIndex = 0;
      }
      slider.style.transform = `translateY(-${slideIndex * 100}%)`;
    };

    const interval = setInterval(moveSlide, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="slider">
          <div className="slide">
            <img src="../../assets/productcover.jpg" alt="Hero 1" />
          </div>
          <div className="slide">
            <img src="../../assets/aboutcover.jpg" alt="Hero 2" />
          </div>
          <div className="slide">
            <img src="../../assets/" alt="Hero 3" />
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Palei Software Pvt Ltd</h1>
            <p>Your Reliable Partner in Innovative Software Solutions</p>
            <a href="#about-us" className="btn">Get Started</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-us-content">
            <div className="about-us-image">
              <img src="../../assets/aboutcover.jpg" alt="About Us" />
            </div>
            <div className="about-us-text">
              <p>
                At Palei Software Pvt Ltd, we specialize in providing cutting-edge software solutions that address the unique needs of our clients. We focus on delivering custom solutions that help businesses optimize their operations, improve efficiency, and unlock new growth opportunities.
              </p>
              <p>
                With a team of experienced developers, designers, and strategists, we work closely with our clients to understand their challenges and deliver tailored solutions that drive real-world results. Whether it's through web development, mobile applications, or cloud services, we are committed to helping businesses achieve their goals through innovation and technology.
              </p>
              <a href="#contact-us" className="btn get-in-touch">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="our-clients" className="our-clients">
        <div className="container">
          <h2>Our Clients</h2>
          <p>We are proud to work with some of the most innovative companies across various industries.</p>
          <div className="clients-list">
            {/* You can add logos of clients here */}
            <div className="client-item">
              <img src="/path/to/logo1.png" alt="Client 1" />
            </div>
            <div className="client-item">
              <img src="/path/to/logo2.png" alt="Client 2" />
            </div>
            <div className="client-item">
              <img src="/path/to/logo3.png" alt="Client 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="contact-us">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Get in touch with us for inquiries, consultations, or to learn more about our services.</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

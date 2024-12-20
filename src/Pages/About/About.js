import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faGlobe,
  faLightbulb,
  faHistory,
  faStar,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-header-container">
          <h1>About Us</h1>
          <p>
            At Palei Software Pvt Ltd, we are committed to delivering exceptional software solutions that drive innovation and success.
          </p>
        </div>
      </header>

      {/* LM Tools Section Wrapper */}
      <div className="lm-tools-wrapper">
        <section className="lm-tools-section">
          <div className="lm-tools-content">
            <h2>LM Tools</h2>
            <p>
              LM Tools is a load testing tool with an automation framework. It offers highly scalable testing solutions, catering to the needs of global customers in areas of Web, Custom protocols, HTTP, Websocket, WebRTC, VoIP, SIP, IMS, RTP, SRTP, JSON, XML, STUN/TURN/ICE, and many more. It supports any text/binary-based protocol testing, helping clients test custom/proprietary products.
            </p>
            <p>
              Additionally, LM Tools can act as a wrapper over any software, simulating a real field scenario with a large number of instances. This tool can be used for functional, load, performance, stress, and capacity testing against any application-level product.
            </p>
          </div>

          <div className="lm-tools-video">
            {/* Replace the iframe src with your YouTube video link */}
            <iframe
              src="https://www.youtube.com/embed/cxRnp_bWRWg" // Replace with your video ID
              title="LM Tools Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="lm-tools-modules-section">
  <h2>Commonly Used Modules</h2>

  <div className="lm-tools-module">
    <h3>1. HTTP</h3>
    <p>
      LM ToolsTM simulates web servers, content servers, back-to-back agents, and millions of HTTP endpoints for Web / HTTP / HTTPS / REST / SOAP load testing. Any HTTP message flow / content / sequence can be simulated with easy configuration. To learn more, please check <a href="https://lmtools.com/content/web-server-load-testing" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>

  <div className="lm-tools-module">
    <h3>2. WebRTC</h3>
    <p>
      LM ToolsTM simulates WebRTC servers, back-to-back agents, millions of WebRTC clients to load test WebRTC-based products. Additionally, you can test STUN / TURN servers to check your network media load. Simulate any signaling as per your requirement and scale as much as you need. To learn more, please check <a href="https://lmtools.com/webrtc-load-testing" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>

  <div className="lm-tools-module">
    <h3>3. VoIP / SIP</h3>
    <p>
      LM ToolsTM simulates SIP servers, millions of SIP endpoints to load test VoIP / SIP-based products. Any SIP call flow, SIP message content, and SIP message sequence can be simulated with easy configuration. To learn more, please check <a href="https://lmtools.com/content/sip-load-testing" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>

  <div className="lm-tools-module">
    <h3>4. IMS</h3>
    <p>
      LM ToolsTM simulates IMS servers (p/i/s-cscf), application servers, and millions of IMS UEs to load test IMS-based products. Any IMS call flow, IMS message content, and IMS message sequences can be simulated with easy configuration using LM Tool. To learn more, please check <a href="https://lmtools.com/content/ims-load-testing" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>

  <div className="lm-tools-module">
    <h3>5. Proprietary Products</h3>
    <p>
      LM ToolsTM simulates proprietary servers, millions of proprietary clients to load test proprietary applications. Be it text-based or binary-based, just configure as per message flow and simulate the desired load. To learn more, contact <a href="mailto:info@loadmultiplier.com">info@loadmultiplier.com</a> or visit <a href="https://lmtools.com/content/proprietary-load-testing-text-binary-call-flows" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>

  <div className="lm-tools-module">
    <h3>6. LM Tools Overview</h3>
    <p>
      LM ToolsTM is a versatile load testing tool that provides scalable solutions for functional, performance, and stress testing across various industries. Its customizable features and robust simulation capabilities make it a trusted choice for testing proprietary and standardized protocols. Explore how LM Tools can redefine your testing processes. 
      Visit the official website <a href="https://lmtools.com" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>
</section>

      </div>

      {/* Other sections */}
      <div className="about-content">
        <div className="about-section">
          <h2>
            <FontAwesomeIcon icon={faUsers} className="icon" /> Our Team
          </h2>
          <p>
            A diverse team of talented professionals dedicated to providing top-notch solutions tailored to your needs.
          </p>
          <button className="more-btn">
            More <span>&#8594;</span>
          </button>
        </div>

        <div className="about-section">
          <h2>
            <FontAwesomeIcon icon={faGlobe} className="icon" /> Global Vision
          </h2>
          <p>
            With a global perspective, we aim to revolutionize industries and create impactful software solutions.
          </p>
          <button className="more-btn">
            More <span>&#8594;</span>
          </button>
        </div>

        <div className="about-section">
          <h2>
            <FontAwesomeIcon icon={faLightbulb} className="icon" /> Our Mission
          </h2>
          <p>
            Empowering businesses through innovation, creativity, and cutting-edge technology.
          </p>
          <button className="more-btn">
            More <span>&#8594;</span>
          </button>
        </div>

        <div className="about-section">
          <h2>
            <FontAwesomeIcon icon={faHistory} className="icon" /> Our History
          </h2>
          <p>
            Established in 2023, we’ve consistently delivered impactful software solutions for clients worldwide.
          </p>
          <button className="more-btn">
            More <span>&#8594;</span>
          </button>
        </div>

        <div className="about-section">
          <h2>
            <FontAwesomeIcon icon={faStar} className="icon" /> Core Values
          </h2>
          <p>
            Integrity, innovation, and client satisfaction are the cornerstones of our operations.
          </p>
          <button className="more-btn">
            More <span>&#8594;</span>
          </button>
        </div>

        <div className="about-section">
          <h2>
            <FontAwesomeIcon icon={faHandshake} className="icon" /> Collaboration
          </h2>
          <p>
            We believe in building strong partnerships with our clients for mutual success.
          </p>
          <button className="more-btn">
            More <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

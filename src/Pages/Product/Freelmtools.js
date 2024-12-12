import React from 'react'
import freelm from '../../assets/freelm.png'
import './Freelmtools.css';  // Don't forget to import the CSS file!

const Freelmtools = () => {
    const handleRedirect = () => {
        window.location.href = "https://free.lmtools.com/";
      };
    
    
  return (
    <div className='freelmtools'>
    <section className="freelmtools-section">
      <h2 className="freelmtools-title">LM Tools - Load Testing Tool with Automation Framework</h2>
      <p className="freelmtools-description">
        LM Tools is a Load testing tool with Automation framework. It offers
        highly scalable testing solutions, catering to the needs of global
        customers in areas of Web, Custom protocols, HTTP, Websocket, WebRTC,
        VoIP, SIP, RTP, SRTP, JSON, XML, STUN / TURN / ICE and more. It
        supports any text / binary based protocol testing, helping our clients
        test custom / proprietary products as well.
      </p>
      <img className="freelmtools-image" src={freelm} alt="freelm"/>
      <p className="freelmtools-description">
        LM Tools consists of three components as illustrated in the diagram:
      </p>
      <ul className="freelmtools-list">
        <li className="freelmtools-list-item">
          <strong>Multiplier:</strong> A machine provided by the customer either
          from the cloud or lab network. The LM Tools multiplier package must be
          installed to simulate virtual subscribers, gateways, proxies, or other
          components.
        </li>
        <li className="freelmtools-list-item">
          <strong>Controller:</strong> Provided by the service provider from its
          cloud setup. Responsible for collecting stats from multiple Multiplier
          machines, aggregating them, and serving the data to the Web Server.
        </li>
        <li className="freelmtools-list-item">
          <strong>Web Server:</strong> Provided by the service provider from its
          cloud setup. It offers an easy-to-use front-end interface for LM Tools.
        </li>
      </ul>

      <p className="freelmtools-description">
        The System Under Test is the one that is to be tested for its standard
        compatibility, stability under heavy load, long hours testing with varied
        load using LM Tools.
      </p>

      <p className="freelmtools-description">
        The Cloud version of LM Tools is completely free. For more details, please
        contact us. To learn more about licenses, please visit our License Page.
      </p>

      {/* Button to redirect to thefreelmtools website */}
      <button className="freelmtools-button" onClick={handleRedirect}>
        Go to FreeLM Tools Website
      </button>

    </section>
    </div>
  )
}

export default Freelmtools

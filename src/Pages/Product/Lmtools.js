import React from 'react';
import lm from '../../assets/lm.png';
import lm1 from '../../assets/lm1.png';
import lm2 from '../../assets/lm2.jpg';
import lm3 from '../../assets/lm3.png';
import './Lmtools.css';

const Lmtools = () => {
  const handleRedirect = () => {
    window.location.href = "https://lmtools.com/";
  };

  return (
    <div className='lmtools'>
      <section className="lmtools-section">
        <h2 className="lmtools-title">LM Tools™ - Load Testing Tools and Solutions</h2>
        
        <p className="lmtools-description">
          LM Tools™ offers testing tools, solutions, and services across the domains listed below for load and automation testing. To know all tools, please check the LM Tools page.
        </p>
        <img className="lmtools-image" src={lm} alt="LM Tools" />

        <p className="lmtools-description">
          High performance, easy interface in a typical general hardware setup (no proprietary hardware) are the guiding factors in LM Tools design. Front end through web interface, back end in complete C, and high optimal design makes LM Tools unique among its competitors.
        </p>

        <p className="lmtools-description">
          You can use a single machine, a cluster of machines, create a single test bed, or multiple test beds. It entirely depends on the volume of load you want to generate. A typical multi-test-bed in LM Tools environment looks as below.
        </p>
        <img className="lmtools-image" src={lm1} alt="LM Tools Test Setup" />

        <p className="lmtools-description">
          Need a free trial? Register here (top right block), or you may like to check trial.lmtools.com for a free testing offer.
        </p>

        <h3 className="lmtools-subtitle">Complete Testing Solution - Functional / Load / Performance</h3>
        <p className="lmtools-description">
          Take advantage of our long-time testing expertise. You have standard software products, proprietary software products, how to test functionality, load, stress... Do not worry, leave it to testing experts for complete test setup, configuration, and execution using LM Tools.
        </p>
        <img className="lmtools-image" src={lm2} alt="Testing Solution" />

        <h3 className="lmtools-subtitle">Complete Automation</h3>
        <p className="lmtools-description">
          As a distinguished product company, you put your best possible effort into shaping your product to be the best, and leave testing and automation to our experts. LM Tools, in addition to providing testing solutions, offers a great and affordable automation framework you can rely on. You can simulate many different products at a time. A typical simulation setup looks as below.
        </p>
        <img className="lmtools-image" src={lm3} alt="Automation Setup" />

        <button className="lmtools-button" onClick={handleRedirect}>
          Go to LM Tools Website
        </button>
      </section>
    </div>
  );
};

export default Lmtools;

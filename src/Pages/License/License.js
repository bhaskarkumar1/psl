import React from 'react'
import './License.css'
import { Link } from 'react-router-dom';

const License = () => {
  return (
    <div className='license'>
      <div className="license-pricing-container">
        <h2 className="license-title">LM Tools Pricing & Support</h2>
        <div className="license-description">
          <p>
            The cloud version of LM Tools is free for one month up to 100 virtual
            users. Support for the cloud version of LM Tools is provided on a best
            effort basis. If you need dedicated support, please <span><Link to='/contact' className='contact'>Contact Us</Link></span> with
            the requirement details.
          </p>
          <p>
            The enterprise version may cost you quarterly / half-yearly / annually,
            depending on how many concurrent users or sessions you require to simulate
            for testing the product.
          </p>
          <p>
            If you have any specific testing requirements, like how to test a proprietary
            product or how to test a binary call flow etc, you may like to <span><Link to='/contact' className='contact'>Contact Us</Link></span>
            for more details.
          </p>
        </div>
      </div>
      </div>
    );
  
}

export default License

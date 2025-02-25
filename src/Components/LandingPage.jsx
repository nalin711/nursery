/*
The landing page should have the following elements:

A background image
A paragraph about the company
The company name
A Get Started button linking to the product page
*/

import React, {useState} from 'react';
import './LandingPage.css';
import ProductListing from './ProductListing';

const LandingPage = () => {
  const [showProduct, setShowProduct] = useState(false);
  const handleGetStarted = () => {
    setShowProduct(true);
  }
    
  return (
      <div className="landing-page">
        
        {(showProduct) ? <ProductListing/> : 
          <div className="content">
          <h1 className="title">Paradise Nursery</h1>
          <p className="description">Welcome to Paradise Nursery!
            <br/>
            <br/>
            We are a company that specializes in providing the best plants for your home.</p>
          <button className="getstarted_button" onClick={() => handleGetStarted() }>Get Started</button>
        </div>
        }
        
      </div>
    );
}


export default LandingPage;


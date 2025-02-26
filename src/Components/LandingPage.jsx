/*
The landing page should have the following elements:

A background image
A paragraph about the company
The company name
A Get Started button linking to the product page
*/

import React, {useState} from 'react';
import './LandingPage.css';
import AboutUs from './AboutUs';

import ProductListing from './ProductListing';

const LandingPage = () => {
  const [showProduct, setShowProduct] = useState(false);
  const handleGetStarted = () => {
    setShowProduct(true);
  }
    
  return (
      <div className="landing-page">
         
        <div className="content">
          <h1 className="title">Paradise Nursery</h1>
          <p className="description">Where Green Meets Serenity
            <br/>
            <br/>{/*Paragraph about company*/}
            We are a company that specializes in providing the best plants for your home.
            </p>
          <button className="getstarted_button" onClick={handleGetStarted}>Get Started</button>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
        </div>
        {showProduct && (
        <div className="product-listing">
          <ProductListing />
        </div>
      )}
        </div>
    );
}

export default LandingPage;


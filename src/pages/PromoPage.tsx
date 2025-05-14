
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/promo.css';

const PromoPage = () => {
  return (
    <div className="promo-container">
      <div className="promo-content">
        <Link to="/" className="back-button">
          <ArrowLeft />
        </Link>
        
        <div className="content-wrapper">
          <h1 className="heading">Sign up for Voog</h1>
          
          <p className="description">
            Create your multilingual website or online store with powerful tools and easy setup.
          </p>
          
          <p className="pricing">Starting from 11€/month.</p>
          
          <a href="#" className="primary-button">
            Proceed to Voog sign-up
            <span className="arrow-icon">→</span>
          </a>
          
          <div className="divider"></div>
          
          <h2 className="sub-heading">... or try Edicy instead</h2>
          
          <p className="sub-description">
            Perfect for one-page websites and landing pages.
          </p>
          
          <ul className="features-list">
            <li>
              <div className="checkmark">✓</div>
              <span>No-code dynamic page builder</span>
            </li>
            <li>
              <div className="checkmark">✓</div>
              <span>Ideal for quick page and campaign launches</span>
            </li>
            <li>
              <div className="checkmark">✓</div>
              <span>Easy forms &amp; lead capture</span>
            </li>
            <li>
              <div className="checkmark">✓</div>
              <span>Integrates with Zapier, Hubspot, Mailchimp, and more</span>
            </li>
          </ul>
          
          <p className="pricing">Starting from 9€/month.</p>
          
          <a href="#" className="secondary-button">
            Try Edicy instead
            <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
      
      <div className="promo-image">
        <img src="/lovable-uploads/735cf2f1-0fc1-41e8-ad6d-5ea71c6c6b03.png" alt="Person with plants" />
      </div>
    </div>
  );
};

export default PromoPage;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/promo.css';

const PromoPage = () => {
  return <div className="promo-container">
      <div className="promo-content">
        <Link to="/" className="back-button">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0007 14.6666C24.737 14.6666 25.334 15.2635 25.334 15.9999C25.334 16.7363 24.737 17.3333 24.0007 17.3333H8.00065C7.26427 17.3333 6.66732 16.7363 6.66732 15.9999C6.66732 15.2635 7.26427 14.6666 8.00065 14.6666H24.0007Z" fill="black" />
            <path d="M16.9422 23.0571C17.4629 23.5778 17.4629 24.422 16.9422 24.9427C16.4215 25.4634 15.5772 25.4634 15.0565 24.9427L7.05654 16.9427C6.55177 16.438 6.53411 15.6252 7.01648 15.099L14.3498 7.09895C14.8474 6.55613 15.6908 6.51946 16.2337 7.01705C16.7765 7.51464 16.8131 8.35806 16.3156 8.90088L9.84487 15.9598L16.9422 23.0571Z" fill="black" />
          </svg>
        </Link>
        
        <div className="content-wrapper">
          <h1 className="heading">Sign up for Voog</h1>
          
          <p className="description">Design, localize, and sell, all in one intuitive builder.</p>
          
          
          
          <a href="https://www.voog.com/signup" target="_blank" rel="noopener noreferrer" className="primary-button">
            Proceed to Voog sign-up
            <span className="arrow-icon">→</span>
          </a>
          
          <div className="divider"></div>
          
          <h2 className="sub-heading">Need a simple one-pager?
Try Edicy</h2>
          
          <p className="sub-description">Perfect for one-page websites and landing pages alike.</p>
          
          <ul className="features-list">
            <li>
              <div className="checkmark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12.5L9 17.5L19.5 7" stroke="#1B2124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Publish in under 5 minutes</span>
            </li>
            <li>
              <div className="checkmark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12.5L9 17.5L19.5 7" stroke="#1B2124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Built-in A/B testing</span>
            </li>
            <li>
              <div className="checkmark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12.5L9 17.5L19.5 7" stroke="#1B2124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Easy forms &amp; lead capture</span>
            </li>
            <li>
              <div className="checkmark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12.5L9 17.5L19.5 7" stroke="#1B2124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Connect to your stack: Zapier, Hubspot, Mailchimp & more</span>
            </li>
          </ul>
          
          
          
          <a href="https://www.edicy.com" target="_blank" rel="noopener noreferrer" className="secondary-button">
            Try Edicy instead
            <span className="arrow-icon">→</span>
          </a>
          
          <div className="bottom-spacing"></div>
        </div>
      </div>
      
      <div className="promo-image">
        <img src="/lovable-uploads/3524cdba-e454-43df-b4b1-2a14b3978f94.png" alt="Man working on computer" />
      </div>
    </div>;
};

export default PromoPage;

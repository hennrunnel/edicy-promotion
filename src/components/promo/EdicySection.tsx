import React from 'react';
import FeatureList from './FeatureList';
const EdicySection = () => {
  return <>
      <h2 className="sub-heading">Need a simple one-pager?<br />Try Edicy</h2>
      
      <p className="sub-description">Perfect for one-page websites and landing pages alike.</p>
      
      <FeatureList />
      
      
      
      <a href="https://www.edicy.com" target="_blank" rel="noopener noreferrer" className="secondary-button">
        Try Edicy instead
        <span className="arrow-icon">→</span>
      </a>
    </>;
};
export default EdicySection;
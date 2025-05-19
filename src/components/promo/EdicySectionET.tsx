
import React from 'react';
import FeatureListET from './FeatureListET';

const EdicySectionET = () => {
  return <>
      <h2 className="sub-heading">Vajad ühelehelist veebilehte?<br />Proovi Edicy'd</h2>
      
      <p className="sub-description">Ideaalne maandumislehtede ja üheleheliste veebide jaoks.</p>
      
      <FeatureListET />
      
      <a href="https://www.edicy.com" target="_blank" rel="noopener noreferrer" className="secondary-button">
        Proovi Edicy'd
        <span className="arrow-icon">→</span>
      </a>
    </>;
};

export default EdicySectionET;

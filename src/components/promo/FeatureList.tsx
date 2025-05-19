
import React from 'react';
import FeatureItem from './FeatureItem';

const FeatureList = () => {
  const features = [
    'Publish in under 5 minutes',
    'Built-in A/B testing',
    'Easy forms & lead capture',
    'Connect to your stack: Zapier, Hubspot, Mailchimp & more'
  ];

  return (
    <ul className="features-list">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </ul>
  );
};

export default FeatureList;

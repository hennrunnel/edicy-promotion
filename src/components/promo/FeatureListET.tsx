
import React from 'react';
import FeatureItem from './FeatureItem';

const FeatureListET = () => {
  const features = [
    'Avalda vähem kui 5 minutiga',
    'Sisseehitatud A/B testimine',
    'Lihtsad vormid ja kontaktide kogumine',
    'Ühenda oma tööriistadega: Zapier, Hubspot, Mailchimp ja veel'
  ];

  return (
    <ul className="features-list">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </ul>
  );
};

export default FeatureListET;

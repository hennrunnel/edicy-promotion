
import React from 'react';
import ContentSection from '../components/promo/ContentSection';
import ImageSection from '../components/promo/ImageSection';
import '../styles/promo.css';

const PromoPage = () => {
  return (
    <div className="promo-container">
      <ContentSection />
      <ImageSection />
    </div>
  );
};

export default PromoPage;

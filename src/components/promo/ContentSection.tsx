
import React from 'react';
import BackButton from './BackButton';
import VoogSection from './VoogSection';
import EdicySection from './EdicySection';
import { Separator } from '@/components/ui/separator';

const ContentSection = () => {
  return (
    <div className="promo-content">
      <BackButton />
      
      <div className="content-wrapper">
        <VoogSection />
        
        <div className="divider">
          <Separator />
        </div>
        
        <EdicySection />
        
        <div className="bottom-spacing"></div>
      </div>
    </div>
  );
};

export default ContentSection;

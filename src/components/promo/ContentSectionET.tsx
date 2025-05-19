
import React from 'react';
import BackButton from './BackButton';
import VoogSectionET from './VoogSectionET';
import EdicySectionET from './EdicySectionET';
import { Separator } from '@/components/ui/separator';

const ContentSectionET = () => {
  return (
    <div className="promo-content">
      <BackButton />
      
      <div className="content-wrapper">
        <VoogSectionET />
        
        <div className="divider">
          <Separator />
        </div>
        
        <EdicySectionET />
        
        <div className="bottom-spacing"></div>
      </div>
    </div>
  );
};

export default ContentSectionET;

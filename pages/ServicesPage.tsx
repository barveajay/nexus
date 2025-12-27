
import React from 'react';
import Services from '../components/Services';
import PageHeader from '../components/PageHeader';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="SOLUTIONS" 
        subtitle="We provide a full-spectrum high-voltage digital ecosystem to fuel your brand's growth." 
      />
      <Services />
    </div>
  );
};

export default ServicesPage;

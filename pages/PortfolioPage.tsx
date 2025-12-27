
import React from 'react';
import Portfolio from '../components/Portfolio';
import PageHeader from '../components/PageHeader';

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="THE LAB" 
        subtitle="A collection of our most explosive work across videography, branding, and digital strategy." 
      />
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;

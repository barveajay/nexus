
import React from 'react';
import Contact from '../components/Contact';
import PageHeader from '../components/PageHeader';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="IGNITE" 
        subtitle="Ready to power up? Fill out the form below and one of our strategists will be in touch within 24 hours." 
      />
      <Contact />
    </div>
  );
};

export default ContactPage;

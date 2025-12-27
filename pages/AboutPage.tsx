
import React from 'react';
import About from '../components/About';
import PageHeader from '../components/PageHeader';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="OUR ENGINE" 
        subtitle="The story of how Scrollfuel became the most energetic digital agency in the industry." 
      />
      <About />
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="text-5xl font-black text-primary mb-4">500+</p>
            <p className="uppercase text-[10px] tracking-[0.3em] font-bold text-zinc-500">Brands Energized</p>
          </div>
          <div>
            <p className="text-5xl font-black text-primary mb-4">12M</p>
            <p className="uppercase text-[10px] tracking-[0.3em] font-bold text-zinc-500">Media Views</p>
          </div>
          <div>
            <p className="text-5xl font-black text-primary mb-4">98%</p>
            <p className="uppercase text-[10px] tracking-[0.3em] font-bold text-zinc-500">Retention Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

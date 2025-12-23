
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Videography',
    description: 'High-end commercials, music videos, and cinematic product shoots that captivate audiences.',
    icon: '🎥'
  },
  {
    id: '2',
    title: 'Branding & Design',
    description: 'Logo systems, premium packaging, and complete brand identities that build long-term trust.',
    icon: '🎨'
  },
  {
    id: '3',
    title: 'Digital Marketing',
    description: 'Strategic SEO, PPC campaigns, and influencer marketing designed for maximum ROI.',
    icon: '📈'
  },
  {
    id: '4',
    title: 'Social Media',
    description: 'Comprehensive strategy and daily content creation that turns followers into loyal fans.',
    icon: '📱'
  },
  {
    id: '5',
    title: 'Web Development',
    description: 'Responsive, high-performance websites with a focus on immersive UI/UX design.',
    icon: '💻'
  },
  {
    id: '6',
    title: 'Photography',
    description: 'Professional commercial and fashion photography that tells your brand story in every frame.',
    icon: '📸'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold">Full-Spectrum Solutions.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-primary/50 transition-all group hover:-translate-y-2"
            >
              <div className="text-4xl mb-6 bg-zinc-800 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

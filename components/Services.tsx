
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'High-Impact Video',
    description: 'Cinematic commercials and social-first video content that stops the scroll instantly.',
    icon: '⚡'
  },
  {
    id: '2',
    title: 'Energy Branding',
    description: 'Identity systems that pulse with life and command authority in competitive markets.',
    icon: '🔋'
  },
  {
    id: '3',
    title: 'Growth Marketing',
    description: 'Data-fueled PPC and SEO strategies designed to scale your revenue exponentially.',
    icon: '🔥'
  },
  {
    id: '4',
    title: 'Viral Socials',
    description: 'Daily content engines that turn cold audiences into warm, high-converting communities.',
    icon: '🚀'
  },
  {
    id: '5',
    title: 'Web Platforms',
    description: 'Conversion-optimized websites with immersive UI/UX that drives user action.',
    icon: '⚙️'
  },
  {
    id: '6',
    title: 'Digital Audit',
    description: 'Deep-dive analysis of your current digital fuel efficiency and ROI opportunities.',
    icon: '🧬'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-zinc-950/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-6">Our Reactor</h2>
          <h3 className="text-4xl md:text-7xl font-display font-black tracking-tighter italic uppercase">The Energy Grid.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-10 bg-black border border-zinc-900 rounded-[2.5rem] hover:border-primary/50 transition-all group hover:-translate-y-3 shadow-2xl"
            >
              <div className="text-4xl mb-8 bg-zinc-900 w-20 h-20 flex items-center justify-center rounded-[1.5rem] group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h4>
              <p className="text-zinc-500 leading-relaxed font-medium">
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

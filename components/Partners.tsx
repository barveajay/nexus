
import React from 'react';

const partners = [
  { name: 'Vanguard', logo: 'VNG' },
  { name: 'Quantum', logo: 'QTM' },
  { name: 'Horizon', logo: 'HZN' },
  { name: 'Stellar', logo: 'STL' },
  { name: 'Aether', logo: 'AET' },
  { name: 'Nebula', logo: 'NEB' },
];

const Partners: React.FC = () => {
  return (
    <section className="py-12 border-y border-zinc-900 bg-dark/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="text-2xl md:text-3xl font-display font-black text-zinc-400 hover:text-primary cursor-default transition-all hover:scale-110"
            >
              {partner.logo}
              <span className="sr-only">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

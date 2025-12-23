
import React, { useState } from 'react';
import { PortfolioItem, PortfolioCategory } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Nova Watch Commercial', category: 'Video', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop', client: 'Nova Corp' },
  { id: 2, title: 'Ethereal Cosmetics', category: 'Branding', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop', client: 'Ethereal' },
  { id: 3, title: 'TechFlow Platform', category: 'Web Design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', client: 'TechFlow' },
  { id: 4, title: 'Urban Streetwear', category: 'Marketing', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop', client: 'Urban Soul' },
  { id: 5, title: 'Lumina Smart Home', category: 'Video', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop', client: 'Lumina' },
  { id: 6, title: 'Apex Peak Gear', category: 'Branding', image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop', client: 'Apex' },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const categories: PortfolioCategory[] = ['All', 'Branding', 'Video', 'Web Design', 'Marketing'];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold">Creative Showcases.</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat ? 'bg-primary text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-zinc-900"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-primary font-bold text-sm mb-2">{item.category}</p>
                <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                <p className="text-zinc-400 text-sm">Client: {item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

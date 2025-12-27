
import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <About />
      <div className="bg-black py-20 text-center">
        <Link 
          to="/about" 
          className="inline-flex items-center space-x-3 text-primary font-black uppercase tracking-widest hover:translate-x-2 transition-transform"
        >
          <span>Meet the team</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
      <Services />
    </div>
  );
};

export default HomePage;

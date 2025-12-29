import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';
import ProcessTimeline from '../components/ProcessTimeline';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <About />
      
      <div className="bg-black py-20 text-center relative z-10">
        <Link 
          to="/about" 
          className="inline-flex items-center space-x-4 text-primary font-black uppercase tracking-[0.2em] hover:text-energy-green transition-colors group"
        >
          <span>Meet the reactor team</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>

      <ProcessTimeline />
      <Services />
      <Testimonials />
      
      {/* Call to Action Final */}
      <section className="py-32 bg-energy-green text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-8xl font-display font-black uppercase italic tracking-tighter mb-10">Ready to <br />Combust?</h2>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto opacity-80">Stop running on empty. Join the brands that are dominating their market with Scrollfuel energy.</p>
          <Link to="/contact" className="inline-block px-16 py-6 bg-black text-white rounded-full text-xl font-black uppercase tracking-widest hover:scale-110 transition-all shadow-2xl">
            Ignite My Brand
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
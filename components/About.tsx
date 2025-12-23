
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=2070&auto=format&fit=crop" 
              alt="Creative Team" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-medium text-white/80">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Mastering the Art of Digital Storytelling.</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Nexus Media isn't just an agency; we are your creative partners. We believe that every brand has a soul, and our mission is to translate that essence into visual experiences that resonate and convert.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2">Unique Identity</h4>
                <p className="text-zinc-500 text-sm">We craft brands that stand out in a saturated market through strategic design.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Data-Driven</h4>
                <p className="text-zinc-500 text-sm">Our creative decisions are backed by deep market analysis and user data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

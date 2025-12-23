
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Visual Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/60 to-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-6 tracking-tight leading-none">
          BUILDING YOUR <br />
          <span className="gradient-text">BRAND'S LEGACY</span>
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 font-light">
          Expert Digital Marketing, Branding, and High-Impact Videography Solutions tailored for the bold.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#portfolio" className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-blue-600 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
            View Our Work
          </a>
          <a href="#contact" className="w-full md:w-auto px-10 py-4 bg-transparent border border-zinc-700 hover:bg-zinc-800 rounded-full text-lg font-bold transition-all">
            Start a Project
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

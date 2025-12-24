
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Visual Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop" 
          alt="Energy Abstract" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Pulsing Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-xs font-black uppercase tracking-[0.3em] mb-8 animate-bounce">
          Ignite Your Presence
        </div>
        <h1 className="text-5xl md:text-9xl font-display font-black mb-8 tracking-tighter leading-[0.85]">
          FUEL YOUR <br />
          <span className="text-primary italic">DIGITAL GROWTH</span>
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-medium leading-tight">
          High-voltage strategies in branding, videography, and marketing. <br className="hidden md:block"/>
          <span className="text-white">Giving Digital Energy to your Business.</span>
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#portfolio" className="w-full md:w-auto px-12 py-5 bg-primary hover:bg-lime-500 text-black rounded-full text-lg font-black uppercase transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
            Fuel Your Business
          </a>
          <a href="#contact" className="w-full md:w-auto px-12 py-5 bg-transparent border-2 border-zinc-800 hover:border-primary hover:text-primary rounded-full text-lg font-black uppercase transition-all">
            Start the Engine
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Scroll To Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

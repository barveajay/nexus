import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="border-2 border-zinc-900 rounded-[3rem] p-4 overflow-hidden bg-zinc-950">
               <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f107e537?q=80&w=2070&auto=format&fit=crop" 
                alt="Scrollfuel HQ" 
                className="rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 bg-energy-green px-10 py-8 rounded-3xl hidden md:block shadow-2xl shadow-energy-green/20">
              <p className="text-6xl font-black text-black leading-none">SF</p>
              <p className="text-[10px] font-black text-black/80 uppercase tracking-widest mt-2">Energy: 1.21 GW</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xs font-black text-energy-green tracking-[0.4em] uppercase mb-6">Our Core</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black mb-8 leading-[0.9] tracking-tighter">WE FUEL THE BOLD.</h3>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-medium">
              Scrollfuel was born from a simple observation: most brands are running on empty. We provide the <span className="text-white">Digital Energy</span> required to dominate modern platforms through high-impact visuals and data-fueled strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-l-2 border-energy-green pl-6">
                <h4 className="text-2xl font-black mb-2 italic">HIGH OCTANE</h4>
                <p className="text-zinc-500 text-sm font-medium">We move faster than the market. Our creative cycles are built for speed and impact.</p>
              </div>
              <div className="border-l-2 border-energy-green pl-6">
                <h4 className="text-2xl font-black mb-2 italic">ZERO WASTE</h4>
                <p className="text-zinc-500 text-sm font-medium">Every pixel and every penny is optimized for growth and measurable brand equity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';

const cylinders = [
  { stage: "Intake", title: "Market Audit", desc: "We ingest your data, competitor maps, and target audience behavior.", icon: "📥" },
  { stage: "Compression", title: "Creative Forge", desc: "Compressing insights into high-impact cinematic assets and branding.", icon: "💎" },
  { stage: "Combustion", title: "Live Launch", desc: "Igniting the digital grid with optimized cross-channel campaigns.", icon: "💥" },
  { stage: "Exhaust", title: "ROI Scaling", desc: "Clearing out inefficiencies and scaling what works for maximum output.", icon: "🚀" }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-dark scanline-container relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-20">
          <h2 className="text-xs font-black text-energy-green tracking-[0.5em] uppercase mb-4">How we work</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter">The 4-Cylinder <span className="text-white/20">Process.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cylinders.map((cyl, idx) => (
            <div key={idx} className="group relative">
              <div className="h-full bg-zinc-950 border border-zinc-900 p-8 rounded-[2rem] hover:border-energy-green transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-9xl font-black text-zinc-900/40 italic select-none group-hover:text-energy-green/10 transition-colors">
                  {idx + 1}
                </div>
                <div className="text-4xl mb-6">{cyl.icon}</div>
                <span className="text-[10px] font-black text-energy-green uppercase tracking-[0.4em] mb-2 block">{cyl.stage}</span>
                <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{cyl.title}</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{cyl.desc}</p>
                
                <div className="mt-8 w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                   <div className="h-full bg-energy-green transition-all duration-1000 w-0 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
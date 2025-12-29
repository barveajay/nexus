import React from 'react';

const reviews = [
  { name: "Sarah Jensen", company: "Vanguard Tech", text: "Scrollfuel didn't just market our brand; they gave it a soul. The cinematic video they produced saw a 400% increase in lead conversion.", energy: 98 },
  { name: "Marcus Thorne", company: "Thorne Wear", text: "The growth strategy is aggressive and precise. We went from local to national in 6 months using their digital grid system.", energy: 95 },
  { name: "Elena Kovic", company: "Aura Skincare", text: "A breath of fresh energy in an industry full of stale agencies. Direct, bold, and incredibly effective results.", energy: 99 }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black text-primary tracking-[0.4em] uppercase mb-4">Proof of power</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter">Energized Clients.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-10 bg-black border border-zinc-900 rounded-[3rem] relative hover:scale-[1.02] transition-transform">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center font-black text-energy-green border border-energy-green/20">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-white text-sm uppercase">{rev.name}</h4>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{rev.company}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-lg italic font-medium leading-relaxed mb-10">"{rev.text}"</p>
              
              <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Post-Fuel Energy</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-energy-green shadow-[0_0_10px_#8BC53F]" style={{ width: `${rev.energy}%` }}></div>
                  </div>
                  <span className="text-xs font-black text-energy-green">{rev.energy}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
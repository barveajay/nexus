import React, { useState } from 'react';

const FuelCalculator: React.FC = () => {
  const [octane, setOctane] = useState(45);
  const [budget, setBudget] = useState(5000);
  const [intensity, setIntensity] = useState(50);

  // Logic: Reach scales non-linearly with octane and intensity
  // A higher octane/intensity creates a "multiplier" effect
  const reachMultiplier = (octane / 50) * (intensity / 50);
  const reach = Math.round(budget * 0.8 * reachMultiplier * (1 + (octane * 0.01)));
  
  // Efficiency: ROI is best when budget and octane are balanced
  // Too much budget with low octane leads to "fuel waste"
  const balanceFactor = 1 - Math.abs((budget / 50000) - (octane / 100));
  const roi = Math.round(75 + (octane * 0.5) + (intensity * 0.3) * balanceFactor);
  
  // Digital Horsepower: Composite strength metric
  const dhp = Math.round(((octane * 2) + (intensity * 1.5)) * (budget / 1000));

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-energy-green/30 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-zinc-900 rounded-[3rem] p-8 md:p-16 border border-zinc-800 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-energy-green mb-4 block">Interactive Engine</span>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tighter mb-8">Growth Output <br /><span className="text-primary">Simulator</span></h2>
              
              <div className="space-y-10">
                {/* Octane Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Marketing Octane (Strategy Quality)</label>
                    <span className="text-2xl font-black text-energy-green leading-none">{octane}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={octane} 
                    onChange={(e) => setOctane(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-energy-green"
                  />
                </div>

                {/* Intensity Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Campaign Intensity (Aggression)</label>
                    <span className="text-2xl font-black text-white leading-none">{intensity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={intensity} 
                    onChange={(e) => setIntensity(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                {/* Budget Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Monthly Fuel (Ad Budget)</label>
                    <span className="text-2xl font-black text-primary leading-none">${budget.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="100000" 
                    step="500"
                    value={budget} 
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            <div className="bg-black/50 rounded-[2rem] p-10 border border-zinc-800 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              {/* Decorative Heat Map background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative mb-8 z-10">
                <div className="w-56 h-56 rounded-full border-8 border-zinc-800 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  {/* Intensity Ring */}
                  <svg className="absolute w-52 h-52 transform -rotate-90">
                    <circle
                      cx="104"
                      cy="104"
                      r="96"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={603}
                      strokeDashoffset={603 - (603 * intensity) / 100}
                      className="text-white/20"
                    />
                  </svg>
                  {/* Octane Ring */}
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="84"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      className="text-zinc-900"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="84"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={527}
                      strokeDashoffset={527 - (527 * octane) / 100}
                      className="text-energy-green drop-shadow-[0_0_8px_rgba(139,197,63,0.5)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Digital HP</span>
                    <span className="text-5xl font-black">{dhp}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 w-full relative z-10">
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">Reach Potential</p>
                  <p className="text-xl font-black text-white">{reach > 1000000 ? (reach/1000000).toFixed(1) + 'M' : reach.toLocaleString()}</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">ROI Index</p>
                  <p className="text-xl font-black text-energy-green">{roi}%</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">Burn Rate</p>
                  <p className="text-xl font-black text-primary">Low</p>
                </div>
              </div>

              <button className="mt-10 w-full py-5 bg-primary text-black rounded-xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,201,59,0.2)]">
                Ignite This Strategy
              </button>
              
              <p className="mt-4 text-[9px] font-bold text-zinc-600 uppercase italic">Results calculated based on SF high-voltage benchmarks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelCalculator;
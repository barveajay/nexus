
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Ignition",
    price: "Custom",
    features: ["Basic Branding", "1 Cinematic Commercial", "Social Media Kickstart", "Digital Audit"],
    color: "zinc-800"
  },
  {
    name: "Accelerator",
    price: "Popular",
    features: ["Full Brand Identity", "3 High-Impact Videos", "Monthly Marketing Management", "SEO Optimization"],
    color: "energy-green"
  },
  {
    name: "Supernova",
    price: "Elite",
    features: ["Enterprise Branding", "Unlimited Content Creation", "Full Digital Ecosystem", "24/7 Strategy Access"],
    color: "zinc-900"
  }
];

const FuelPage: React.FC = () => {
  return (
    <div className="bg-black">
      <PageHeader 
        title="FUEL PACKAGES" 
        subtitle="Select the octane level your business needs to accelerate past the competition." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`p-10 rounded-[3rem] border border-zinc-900 flex flex-col h-full transition-all hover:-translate-y-4 ${pkg.color === 'energy-green' ? 'bg-energy-green text-black shadow-2xl shadow-energy-green/20' : 'bg-zinc-950 text-white'}`}
              >
                <span className={`text-[10px] font-black uppercase tracking-widest mb-4 inline-block ${pkg.color === 'energy-green' ? 'text-black/60' : 'text-primary'}`}>
                  {pkg.price}
                </span>
                <h3 className="text-4xl font-display font-black uppercase italic mb-8 tracking-tighter">{pkg.name}</h3>
                <ul className="space-y-6 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                      <span className={`w-2 h-2 rounded-full ${pkg.color === 'energy-green' ? 'bg-black' : 'bg-primary'}`}></span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`mt-12 block text-center py-5 rounded-2xl font-black uppercase tracking-widest transition-all ${pkg.color === 'energy-green' ? 'bg-black text-white' : 'bg-primary text-black'}`}
                >
                  Fuel Up
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-zinc-900 p-12 md:p-20 rounded-[3rem] text-center border border-zinc-800">
            <h4 className="text-3xl font-display font-black uppercase italic mb-6">Need a custom blend?</h4>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-10 font-medium">
              Every engine is different. If our standard packages don't match your specific requirements, our strategists can craft a custom high-performance plan.
            </p>
            <Link to="/contact" className="inline-block px-12 py-5 border-2 border-energy-green text-energy-green hover:bg-energy-green hover:text-black rounded-full font-black uppercase tracking-widest transition-all">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuelPage;

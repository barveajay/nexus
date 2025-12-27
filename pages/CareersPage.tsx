
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const positions = [
  {
    title: "Senior Motion Designer",
    type: "Full-Time / Remote",
    description: "Craft cinematic stories that explode off the screen. Expertise in After Effects and Cinema 4D required."
  },
  {
    title: "Digital Growth Strategist",
    type: "Full-Time / Hybrid",
    description: "Architect high-octane PPC and SEO campaigns that drive massive ROI for global brands."
  },
  {
    title: "Creative Copywriter",
    type: "Contract",
    description: "We need punchy, bold, and energetic writing. Help us fuel the bold through the power of words."
  }
];

const CareersPage: React.FC = () => {
  return (
    <div className="bg-black">
      <PageHeader 
        title="JOIN THE SQUAD" 
        subtitle="We're looking for the high-energy talent to help us fuel the world's most ambitious brands." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-xs font-black text-primary tracking-[0.4em] uppercase mb-6">Our Culture</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black mb-8 italic uppercase tracking-tighter">High-Octane Collaboration.</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                At Scrollfuel, we don't believe in the 9-to-5 grind. We believe in the burst—periods of intense creativity and focused energy that result in legendary work.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                If you're a self-starter who lives for the 'aha' moment and thrives in a fast-paced digital ecosystem, we want your fuel in our tank.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Culture" />
              </div>
              <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden mt-8">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Team" />
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-black uppercase italic mb-12 flex items-center gap-4">
              <span className="w-12 h-1px bg-primary"></span>
              Open Burners
            </h3>
            <div className="space-y-6">
              {positions.map((pos, idx) => (
                <div key={idx} className="group p-8 border border-zinc-900 rounded-3xl hover:border-primary/50 transition-all bg-zinc-950/50 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block">{pos.type}</span>
                    <h4 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{pos.title}</h4>
                    <p className="text-zinc-500 text-sm">{pos.description}</p>
                  </div>
                  <Link to="/contact" className="px-8 py-4 bg-zinc-900 group-hover:bg-primary group-hover:text-black rounded-2xl font-black uppercase text-xs tracking-widest transition-all">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-center text-black">
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-6">Don't see your role?</h3>
            <p className="text-xl font-bold mb-10 max-w-2xl mx-auto opacity-80">We're always looking for explosive talent. Send us your portfolio and tell us why you're the missing energy.</p>
            <Link to="/contact" className="inline-block px-12 py-5 bg-black text-white rounded-full text-lg font-black uppercase tracking-widest hover:scale-105 transition-all">
              General Intake
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

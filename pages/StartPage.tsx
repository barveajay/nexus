
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const steps = [
  { num: "01", title: "Ignition", desc: "We perform a deep-dive audit of your current digital fuel efficiency and market position." },
  { num: "02", title: "Compression", desc: "Our creative team builds the high-octane assets needed to drive your brand forward." },
  { num: "03", title: "Combustion", desc: "We launch your campaigns across the digital grid, optimized for maximum reach." },
  { num: "04", title: "Velocity", desc: "Ongoing optimization and scaling to ensure consistent, explosive ROI." }
];

const StartPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: 'Under $5k'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, project, budget } = formData;
    const msg = `*ENGINE START REQUEST*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Project:* ${project}%0A*Budget:* ${budget}`;
    window.open(`https://wa.me/919307978745?text=${msg}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black">
      <PageHeader 
        title="THE LAUNCHPAD" 
        subtitle="Ready to start the engine? Follow our 4-stage process to digital dominance." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-8 border border-zinc-900 bg-zinc-950/50 rounded-3xl group hover:border-primary transition-all">
                <span className="text-6xl font-display font-black text-zinc-900 group-hover:text-primary/20 transition-colors absolute top-4 right-6 leading-none">
                  {step.num}
                </span>
                <h4 className="text-2xl font-black mb-4 uppercase italic relative z-10">{step.title}</h4>
                <p className="text-zinc-500 text-sm font-medium relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-black">
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-8">Ready for takeoff?</h3>
            <p className="text-lg font-bold mb-12 opacity-80">
              Provide your project details below. Submitting this form will open a direct line to our lead strategist on WhatsApp.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" type="text" placeholder="Full Name" required onChange={handleChange} className="w-full bg-black/5 border-b-2 border-black/20 p-4 focus:outline-none focus:border-black placeholder:text-black/40 font-bold" />
                <input name="email" type="email" placeholder="Email Address" required onChange={handleChange} className="w-full bg-black/5 border-b-2 border-black/20 p-4 focus:outline-none focus:border-black placeholder:text-black/40 font-bold" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="budget" onChange={handleChange} className="w-full bg-black/5 border-b-2 border-black/20 p-4 focus:outline-none focus:border-black font-bold">
                  <option>Under $5k</option>
                  <option>$5k - $15k</option>
                  <option>$15k - $50k</option>
                  <option>$50k+</option>
                </select>
                <input name="project" type="text" placeholder="Project Name / Brief" required onChange={handleChange} className="w-full bg-black/5 border-b-2 border-black/20 p-4 focus:outline-none focus:border-black placeholder:text-black/40 font-bold" />
              </div>
              <button type="submit" className="w-full py-6 bg-black text-white rounded-2xl text-xl font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-4">
                <span>Start the Engine</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43.001 9.85-4.417 9.852-9.853.002-2.633-1.024-5.11-2.887-6.974-1.865-1.864-4.345-2.887-6.978-2.888-5.433 0-9.853 4.418-9.855 9.854-.001 2.105.58 4.15 1.68 5.888l-1.102 4.027 4.144-1.087zm11.246-7.305c.347.173.574.258.63.353.056.096.056.554-.173 1.199-.228.644-1.345 1.233-1.847 1.264-.502.031-.971.055-1.724-.131-.753-.186-3.218-1.189-4.226-2.08-.135-.119-.239-.24-.316-.364-.108-.176-.239-.387-.34-.582-1.11-2.126-1.148-3.666-.002-4.814.22-.22.483-.491.728-.691.245-.2.325-.262.325-.436 0-.174-.082-.327-.163-.49-.082-.164-.724-1.742-.991-2.388-.261-.632-.533-.545-.728-.555-.195-.01-.417-.012-.639-.012-.222 0-.585.083-.892.417-.307.333-1.171 1.144-1.171 2.788 0 1.644 1.199 3.231 1.366 3.454.167.223 2.359 3.599 5.711 5.048.797.344 1.42.549 1.906.704.8.254 1.528.218 2.103.132.641-.096 1.972-.805 2.251-1.583.278-.778.278-1.443.194-1.583-.083-.14-.307-.224-.654-.397z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartPage;

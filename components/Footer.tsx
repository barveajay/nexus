
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const leadership = [
    { name: 'Akshay Zade', role: 'Founder / CEO' },
    { name: 'Achal zanzal', role: 'Co-Founder / CCO' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/scrollfuel/' },
    { name: 'Facebook', url: 'https://www.facebook.com/scrollfuel.nagpur' },
    { name: 'Twitter', url: 'https://x.com/scrollfuel' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/scrollfuel/' },
    { name: 'Pinterest', url: 'https://in.pinterest.com/scrollfuel/' },
    { name: 'Behance', url: 'https://www.behance.net/scrollfuel60b4' },
  ];

  return (
    <footer className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-8">
              <Link to="/" className="text-4xl logo-font font-black leading-none flex items-center">
                <span className="text-white">scroll</span>
                <span className="text-primary">fuel</span>
              </Link>
              <div className="text-[8px] font-bold tracking-[0.25em] uppercase text-zinc-500 mt-1">
                Digital Energy To Your Business
              </div>
            </div>
            <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
              A high-voltage agency specialized in cinematic videography and aggressive digital marketing. We energize brands for the modern age.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-500 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Leadership & Team Column */}
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-zinc-300">Core Crew</h4>
            <div className="space-y-6">
              {leadership.map((leader, idx) => (
                <div key={idx} className="group">
                  <p className="text-primary text-sm font-black uppercase tracking-tighter italic leading-none mb-1 group-hover:translate-x-1 transition-transform">
                    {leader.name}
                  </p>
                  <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                    {leader.role}
                  </p>
                </div>
              ))}
              <div className="pt-4 border-t border-zinc-900">
                <p className="text-zinc-400 text-sm font-black italic">
                  + 18 High-Energy Specialists
                </p>
                <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest mt-1">
                  Global Creative Collective
                </p>
              </div>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-zinc-300">Station Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Start Point</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Core</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Power Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">The Lab (Work)</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Join the Team</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-zinc-300">Newsletter Intake</h4>
            <p className="text-zinc-500 text-xs mb-6 font-medium">Receive weekly high-octane marketing insights.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email for Fuel" 
                className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-xs focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-zinc-700 text-white" 
              />
              <button className="bg-primary hover:bg-yellow-400 text-black p-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[9px] font-black uppercase tracking-[0.4em]">
          <p>© 2024 SCROLLFUEL AGENCY. ALL ENGINES GO.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Privacy</a>
            <a href="#" className="hover:text-zinc-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

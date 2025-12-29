import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/scrollfuel/' },
    { name: 'Facebook', url: 'https://www.facebook.com/scrollfuel.nagpur' },
    { name: 'Twitter', url: 'https://x.com/scrollfuel' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/scrollfuel/' },
    { name: 'Pinterest', url: 'https://in.pinterest.com/scrollfuel/' },
    { name: 'Behance', url: 'https://www.behance.net/scrollfuel60b4' },
  ];

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=plot+no+133+Bidoba+Sahkari+Sanstha+Wardha+Rd+Nagpur";

  const handleSubscribeClick = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/newsletter');
  };

  return (
    <footer className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
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
            <p className="text-zinc-500 mb-6 leading-relaxed font-medium">
              A high-voltage agency specialized in cinematic videography and aggressive digital marketing. We energize brands for the modern age.
            </p>
            <div className="space-y-2 mb-10">
              <a href="mailto:scrollfuel@gmail.com" className="block text-primary text-xs font-black uppercase tracking-widest hover:text-energy-green transition-colors">
                scrollfuel@gmail.com
              </a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block text-zinc-500 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Nagpur, MH, India
              </a>
            </div>
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
          
          {/* Links Column */}
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-zinc-300">Station Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Start Point</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Core</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Power Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">The Lab (Work)</Link></li>
              <li><Link to="/newsletter" className="hover:text-primary transition-colors font-bold text-energy-green">Newsletter Intake</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-zinc-300">Newsletter Intake</h4>
            <p className="text-zinc-500 text-xs mb-6 font-medium">Receive weekly high-octane marketing insights.</p>
            <form onSubmit={handleSubscribeClick} className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email for Fuel" 
                className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-xs focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-zinc-700 text-white" 
              />
              <button type="submit" className="bg-primary hover:bg-yellow-400 text-black p-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[9px] font-black uppercase tracking-[0.4em]">
          <p>© 2024 SCROLLFUEL AGENCY. ALL ENGINES GO.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-zinc-400">Privacy</Link>
            <Link to="/terms" className="hover:text-zinc-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
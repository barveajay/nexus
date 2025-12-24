
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-8">
              <div className="text-4xl logo-font font-black leading-none flex items-center">
                <span className="text-white">scroll</span>
                <span className="text-primary">fuel</span>
              </div>
              <div className="text-[8px] font-bold tracking-[0.25em] uppercase text-zinc-500 mt-1">
                Digital Energy To Your Business
              </div>
            </div>
            <p className="text-zinc-500 max-w-sm mb-10 leading-relaxed font-medium">
              We are a high-voltage agency specialized in cinematic videography and aggressive digital marketing strategies. We don't just build brands; we energize them.
            </p>
            <div className="flex space-x-6">
              {['Twitter', 'Instagram', 'LinkedIn', 'Vimeo'].map((platform) => (
                <a key={platform} href="#" className="text-zinc-500 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-zinc-300">Station Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Start Point</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Our Core</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Power Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">The Lab (Work)</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Join the Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-zinc-300">Newsletter Intake</h4>
            <p className="text-zinc-500 text-xs mb-6 font-medium">Receive weekly high-octane marketing insights.</p>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Email for Fuel" className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-xs focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-zinc-700" />
              <button className="bg-primary hover:bg-lime-500 text-black p-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Subscribe</button>
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

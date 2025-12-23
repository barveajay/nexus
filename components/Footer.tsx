
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-zinc-900 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-display font-extrabold mb-6">NEXUS<span className="text-primary">MEDIA</span></div>
            <p className="text-zinc-500 max-w-sm mb-8">
              A premium digital marketing and multimedia agency helping ambitious brands scale through cinematic content and strategic data-driven marketing.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'Vimeo'].map((platform) => (
                <a key={platform} href="#" className="text-zinc-400 hover:text-primary transition-colors text-sm font-medium">
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-300">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-300">Newsletter</h4>
            <p className="text-zinc-500 text-xs mb-4">Get the latest brand strategies delivered to your inbox.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Email Address" className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              <button className="bg-primary p-3 rounded-xl font-bold text-sm">Join Now</button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] uppercase tracking-widest">
          <p>© 2024 Nexus Media Agency. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${isScrolled ? 'glass border-b border-zinc-900 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <div className="text-3xl logo-font font-black leading-none flex items-center">
            <span className="text-white">scroll</span>
            <span className="text-primary group-hover:animate-pulse">fuel</span>
          </div>
          <div className="text-[7px] font-bold tracking-[0.2em] uppercase text-zinc-400 mt-0.5">
            Digital Energy To Your Business
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `text-sm font-bold uppercase tracking-widest transition-all hover:text-primary ${isActive ? 'text-primary' : 'text-zinc-400'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="bg-energy-green hover:bg-green-400 text-black px-6 py-2.5 rounded-full text-sm font-black uppercase transition-all transform hover:scale-105 shadow-lg shadow-energy-green/20">
            Boost Your Brand
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black z-[100] p-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `text-4xl font-display font-black uppercase ${isActive ? 'text-primary' : 'text-white'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="bg-energy-green text-center text-black px-6 py-4 rounded-xl text-lg font-black uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Boost Your Brand
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
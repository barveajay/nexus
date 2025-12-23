
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BrandAssistant from './components/BrandAssistant';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      <BrandAssistant />
    </div>
  );
};

export default App;


import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Videography',
    message: ''
  });

  const socialLinks = [
    { label: 'IG', url: 'https://www.instagram.com/scrollfuel/' },
    { label: 'FB', url: 'https://www.facebook.com/scrollfuel.nagpur' },
    { label: 'TW', url: 'https://x.com/scrollfuel' },
    { label: 'LI', url: 'https://www.linkedin.com/company/scrollfuel/' },
    { label: 'PN', url: 'https://in.pinterest.com/scrollfuel/' },
    { label: 'BE', url: 'https://www.behance.net/scrollfuel60b4' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    
    const whatsappMessage = `*New Inquiry from Scrollfuel Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    // Using international format for WhatsApp redirection
    const whatsappUrl = `https://wa.me/919307978745?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=plot+no+133+Bidoba+Sahkari+Sanstha+Wardha+Rd+near+Hotel+Center+point+Bante+Layout+Sonegaon+Nagpur+Maharashtra+440025";

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-16 lg:bg-primary text-black flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 uppercase tracking-tighter italic">Let's Create <br />Something Bold.</h2>
                <p className="text-lg opacity-80 mb-12 font-bold">
                  Whether you're starting from scratch or looking for a brand evolution, we're ready to take the leap with you.
                </p>
                <div className="space-y-6">
                  <a href="mailto:scrollfuel@gmail.com" className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-black/10 rounded-full flex-shrink-0 flex items-center justify-center border border-black/20 group-hover:bg-black group-hover:text-energy-green transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="font-black uppercase tracking-tight text-sm py-3 group-hover:underline">scrollfuel@gmail.com</span>
                  </a>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-black/10 rounded-full flex-shrink-0 flex items-center justify-center border border-black/20 mt-1 group-hover:bg-black group-hover:text-energy-green transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span className="font-bold uppercase tracking-tight text-[11px] leading-relaxed group-hover:underline">
                      plot no 133, Bidoba Sahkari Sanstha, Wardha Rd,<br/> near Hotel Center point, Bante Layout, Sonegaon,<br/> Nagpur, Maharashtra 440025
                    </span>
                  </a>
                </div>
              </div>
              
              <div className="mt-16 flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-black/30 rounded-full flex items-center justify-center text-[10px] font-black hover:bg-black hover:text-energy-green cursor-pointer transition-all uppercase"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-12 md:p-16 bg-black">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                    <input name="name" type="text" required onChange={handleChange} value={formData.name} className="w-full bg-zinc-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                    <input name="email" type="email" required onChange={handleChange} value={formData.email} className="w-full bg-zinc-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-white" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Service Interest</label>
                  <select name="service" onChange={handleChange} value={formData.service} className="w-full bg-zinc-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-white">
                    <option>Videography</option>
                    <option>Branding</option>
                    <option>Digital Marketing</option>
                    <option>Web Design</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                  <textarea name="message" rows={4} required onChange={handleChange} value={formData.message} className="w-full bg-zinc-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-white" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-energy-green text-black rounded-xl text-lg font-black uppercase tracking-widest hover:bg-[#a3e635] transition-all transform hover:scale-[1.02] shadow-xl shadow-energy-green/20">
                  Send to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

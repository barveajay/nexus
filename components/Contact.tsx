
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Videography',
    message: ''
  });

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
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center border border-black/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="font-bold uppercase tracking-widest text-sm">hello@scrollfuel.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center border border-black/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span className="font-bold uppercase tracking-widest text-sm">Fuel Station, Creative District, NY</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 flex space-x-4">
                {['TW', 'IG', 'FB', 'LI'].map(s => (
                  <span key={s} className="w-10 h-10 border border-black/30 rounded-full flex items-center justify-center text-xs font-bold hover:bg-black hover:text-primary cursor-pointer transition-all uppercase">{s}</span>
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
                <button type="submit" className="w-full py-4 bg-primary text-black rounded-xl text-lg font-black uppercase tracking-widest hover:bg-yellow-400 transition-all transform hover:scale-[1.02]">
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

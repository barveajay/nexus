
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-16 lg:bg-primary text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8">Let's Create <br />Something Bold.</h2>
                <p className="text-lg opacity-80 mb-12">
                  Whether you're starting from scratch or looking for a brand evolution, we're ready to take the leap with you.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span>hello@nexusmedia.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span>123 Creative Avenue, New York, NY</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 flex space-x-4">
                {['TW', 'IG', 'FB', 'LI'].map(s => (
                  <span key={s} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-primary cursor-pointer transition-all">{s}</span>
                ))}
              </div>
            </div>

            <div className="p-12 md:p-16">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Name</label>
                    <input type="text" className="w-full bg-zinc-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email</label>
                    <input type="email" className="w-full bg-zinc-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Service Interest</label>
                  <select className="w-full bg-zinc-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all">
                    <option>Videography</option>
                    <option>Branding</option>
                    <option>Digital Marketing</option>
                    <option>Web Design</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Message</label>
                  <textarea rows={4} className="w-full bg-zinc-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-primary rounded-xl text-lg font-bold hover:bg-blue-600 transition-all transform hover:scale-[1.02]">
                  Send Message
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

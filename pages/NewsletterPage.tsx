import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate high-speed data intake
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1500);
  };

  return (
    <div className="bg-black min-h-screen">
      <PageHeader 
        title="NEWSLETTER INTAKE" 
        subtitle="Subscribe to receive weekly high-octane marketing insights, trend reports, and digital energy direct to your command center." 
      />

      <section className="py-24 relative overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-energy-green/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {!isSubscribed ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-8 md:p-20 shadow-2xl relative">
                <div className="absolute -top-6 left-12 bg-energy-green text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  System Status: Ready
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic tracking-tighter mb-8">
                  Priming the <span className="text-primary">Information Feed.</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-12 font-medium">
                  We don't do boring newsletters. We deliver the fuel required to stay ahead of the digital curve. No fluff, just pure high-voltage strategy.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="relative">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-3 block">Email for Fuel</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="COMMANDER@YOURBRAND.COM"
                      className="w-full bg-black border-2 border-zinc-800 p-6 rounded-2xl text-xl font-bold focus:outline-none focus:border-energy-green transition-all placeholder:text-zinc-800 text-white"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 items-center pt-4">
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className={`w-full md:w-auto px-16 py-6 bg-primary text-black rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>Injecting...</span>
                        </>
                      ) : (
                        <span>Initialize Intake</span>
                      )}
                    </button>
                    <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest max-w-[200px]">
                      By subscribing, you agree to receive high-energy transmissions.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-zinc-950 border-2 border-energy-green rounded-[3rem] p-20 text-center animate-float shadow-[0_0_50px_rgba(139,197,63,0.15)]">
                <div className="w-24 h-24 bg-energy-green rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_#8BC53F]">
                  <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-6 text-white">TANK FILLED.</h2>
                <p className="text-xl font-bold text-energy-green mb-10 uppercase tracking-widest">Subscription Synchronized Successfully</p>
                <p className="text-zinc-500 max-w-lg mx-auto mb-12">
                  The first drop of high-octane insights is heading to <span className="text-white">{email}</span>. Prepare for immediate brand acceleration.
                </p>
                <button 
                  onClick={() => setIsSubscribed(false)}
                  className="text-zinc-400 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
                >
                  Return to Intake Station
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="text-lg font-black uppercase italic mb-2">Trend Analysis</h4>
              <p className="text-zinc-500 text-sm">Predictive insights into digital movements before they hit the mainstream grid.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🎬</div>
              <h4 className="text-lg font-black uppercase italic mb-2">Creative Forge</h4>
              <p className="text-zinc-500 text-sm">Behind-the-scenes look at how we craft cinematic energy for top-tier brands.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">⚙️</div>
              <h4 className="text-lg font-black uppercase italic mb-2">Growth Hacks</h4>
              <p className="text-zinc-500 text-sm">Aggressive, data-fueled tactics to scale your ROI exponentially.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;
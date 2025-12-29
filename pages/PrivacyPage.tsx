import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <PageHeader 
        title="DATA PROTOCOL" 
        subtitle="How we intake, process, and shield your digital footprint within the Scrollfuel reactor." 
      />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16 text-zinc-400">
            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-energy-green"></span>
                01. Information Intake
              </h2>
              <p className="leading-relaxed mb-4">
                When you initiate contact or subscribe to our fuel feed, we collect basic identification data: name, email address, and project specifics. This is the raw fuel required to personalize our engagement.
              </p>
              <p className="leading-relaxed">
                We also intake technical metadata (IP addresses, browser types) to optimize the performance of our digital grid and ensure maximum efficiency during your visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-energy-green"></span>
                02. Usage & Combustion
              </h2>
              <p className="leading-relaxed mb-4">
                Your data is used exclusively to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 italic font-medium">
                <li>Ignite personalized marketing consultations.</li>
                <li>Deliver high-octane newsletter insights.</li>
                <li>Optimize our reactor based on user behavior.</li>
                <li>Ensure legal compliance within the digital jurisdiction.</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-24 h-24 text-energy-green" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.12 8.94-7 10.15-3.88-1.21-7-5.48-7-10.15V6.3l7-3.12z"/></svg>
              </div>
              <h2 className="text-xl font-black text-primary uppercase mb-4">The Shielding Protocol</h2>
              <p className="text-sm leading-relaxed">
                We utilize enterprise-grade encryption and secure servers to protect your data from unauthorized extraction. We do not sell your data to third-party scavengers. Your digital energy remains within the Scrollfuel ecosystem.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-energy-green"></span>
                03. Cookies & Tracking
              </h2>
              <p className="leading-relaxed">
                Our site uses cookies to track session velocity and user preferences. These small data packets allow our engine to remember your settings and provide a smoother, faster experience. You can disable these in your browser, though it may result in a lower-octane experience.
              </p>
            </div>

            <div className="pt-12 border-t border-zinc-900">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">
                Last Calibration: October 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
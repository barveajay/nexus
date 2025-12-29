import React from 'react';
import PageHeader from '../components/PageHeader';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <PageHeader 
        title="ENGAGEMENT RULES" 
        subtitle="The legal framework governing our digital interaction and the terms of our creative partnership." 
      />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16 text-zinc-400">
            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6">01. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing the Scrollfuel site or engaging our services, you agree to be bound by these Rules of Engagement. If you do not agree to these high-voltage terms, you are prohibited from utilizing the platform or its energy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6">02. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                The content, brand assets, code, and cinematic "energy" showcased on this site are the exclusive property of Scrollfuel. 
              </p>
              <div className="border-l-4 border-primary pl-6 py-2 italic text-sm">
                "Reproduction of our visual fuel without explicit authorization is strictly prohibited and will result in immediate legal acceleration."
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6">03. User Conduct</h2>
              <p className="leading-relaxed">
                Users must engage with the site in a professional, constructive manner. Attempting to bypass our security reactors, scrap data at high volumes, or inject malicious code will lead to immediate termination of access and potential reporting to cyber-authorities.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 p-10 rounded-[3rem]">
              <h2 className="text-xl font-black text-primary uppercase mb-6 italic">Service Deliverables</h2>
              <p className="text-sm leading-relaxed mb-6">
                Project timelines and specific deliverables are defined in individual Service Agreements. While we strive for absolute velocity, external factors (market shifts, platform updates) may impact the final "burn rate" of a campaign.
              </p>
              <p className="text-sm leading-relaxed">
                All deposits are considered fuel investments and are generally non-refundable once creative combustion has commenced.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6">04. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Scrollfuel provides digital energy "as-is". While we aim for explosive growth, we cannot guarantee specific market outcomes as the digital landscape is inherently volatile. Our liability is limited to the fees paid for the specific engine phase in question.
              </p>
            </div>

            <div className="pt-12 border-t border-zinc-900 text-center">
              <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
                Scrollfuel Agency • Nagpur, MH • Built for Speed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
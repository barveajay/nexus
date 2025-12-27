
import React, { useState, useRef, useEffect } from 'react';
import { getBrandAdvice } from '../services/geminiService';

const BrandAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getBrandAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'No energy detected!' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 glass border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-black">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-primary text-[10px] font-black">FUEL</div>
              <div>
                <h4 className="font-black text-sm uppercase italic">FuelBot</h4>
                <p className="text-[8px] font-bold text-black/60 uppercase tracking-wider">Digital Energy AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black hover:bg-black/10 p-1 rounded transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/80">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4">
                <p className="text-zinc-500 text-sm font-medium">Ready to power up your brand? Ask me about marketing strategy or how Scrollfuel can energize your business!</p>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-medium leading-relaxed ${m.role === 'user' ? 'bg-primary text-black' : 'bg-zinc-900 text-zinc-300 border border-zinc-800'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-zinc-800 text-primary p-4 rounded-2xl text-xs animate-pulse font-bold">CHARGING RESPONSE...</div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800 bg-zinc-950">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your brand goal..."
                className="flex-1 bg-zinc-900 text-white rounded-full px-5 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-zinc-600"
              />
              <button type="submit" className="bg-primary p-3 rounded-full hover:bg-yellow-400 transition-all transform active:scale-95 shadow-lg shadow-primary/20">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary w-16 h-16 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <svg className="w-8 h-8 text-black group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BrandAssistant;

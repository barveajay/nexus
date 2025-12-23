
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
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'I am speechless!' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 glass border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary text-xs font-bold">NexusAI</div>
              <div>
                <h4 className="font-bold text-sm">Nexus Brand Strategist</h4>
                <p className="text-[10px] text-white/70">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4">
                <p className="text-zinc-500 text-sm">Hi! I'm your Nexus Brand Assistant. Ask me anything about marketing strategy, video ideas, or Nexus Media's services.</p>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${m.role === 'user' ? 'bg-primary text-white' : 'bg-zinc-800 text-zinc-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 text-zinc-300 p-3 rounded-2xl text-xs animate-pulse">Thinking...</div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800 bg-zinc-900">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about branding..."
                className="flex-1 bg-zinc-800 text-white rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button type="submit" className="bg-primary p-2 rounded-full hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary w-14 h-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BrandAssistant;

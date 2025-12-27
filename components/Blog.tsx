
import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Cinematic Commercials in 2025',
    date: 'Oct 24, 2024',
    category: 'Videography',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'How high-end storytelling is replacing traditional product placement in the digital age.'
  },
  {
    id: 2,
    title: 'Why Minimalist Branding is Making a Massive Comeback',
    date: 'Oct 12, 2024',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Stripping away the noise to let your brand soul shine through strategic design.'
  },
  {
    id: 3,
    title: 'Leveraging AI in Social Media Management',
    date: 'Sept 28, 2024',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Using data-driven insights to predict trends before they happen across global platforms.'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white uppercase italic tracking-tighter">Latest From The Lab.</h3>
          </div>
          <a href="#" className="text-primary font-bold hover:underline flex items-center gap-2 uppercase text-xs tracking-widest">
            View All Insights
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video bg-zinc-800">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-zinc-500 text-xs mb-3 font-bold uppercase tracking-widest">{post.date}</p>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight italic">
                  {post.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

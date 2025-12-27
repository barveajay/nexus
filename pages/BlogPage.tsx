
import React from 'react';
import Blog from '../components/Blog';
import PageHeader from '../components/PageHeader';

const BlogPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="INSIGHTS" 
        subtitle="Weekly drops of high-octane marketing strategy, tech trends, and creative inspiration." 
      />
      <Blog />
      <section className="pb-24 bg-dark">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-600 font-bold italic mb-8">Looking for specific fuel? Search our archive.</p>
          <div className="max-w-xl mx-auto flex">
            <input type="text" className="flex-1 bg-zinc-900 p-4 rounded-l-2xl border border-zinc-800 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Keywords..." />
            <button className="bg-primary text-black px-8 rounded-r-2xl font-black uppercase">Search</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

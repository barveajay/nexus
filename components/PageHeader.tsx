
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="pt-40 pb-20 bg-black border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter italic uppercase mb-4 leading-none">
          {title}<span className="text-primary">.</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;

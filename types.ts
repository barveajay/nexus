
export type PortfolioCategory = 'All' | 'Branding' | 'Video' | 'Web Design' | 'Marketing';

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  image: string;
  client: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: 'reviews' | 'news' | 'guides' | 'tips-tricks';
  platform: string;
  image: string;
  excerpt: string;
  type: 'original' | 'curated';
  source?: string;
  sourceUrl?: string;
  rating?: number;
  content: string;
}

import { NewsItem } from '../../types/news';
import NewsCard from './NewsCard';

interface NewsGridProps {
  items: NewsItem[];
  limit?: number;
}

export default function NewsGrid({ items, limit }: NewsGridProps) {
  const displayItems = limit ? items.slice(0, limit) : items;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayItems.map((item, index) => (
        <NewsCard 
          key={item.id} 
          news={item}
          featured={index === 0}
        />
      ))}
    </div>
  );
}
import { NewsItem } from '../../types/news';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  return (
    <Link 
      to={`/news/${news.id}`}
      className={`group block bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105
        ${featured ? 'col-span-2 row-span-2' : ''}`}
    >
      <div className="relative aspect-video">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(news.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {news.author}
            </span>
          </div>
          <h3 className={`font-bold text-white mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
            {news.title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2">
            {news.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
import { newsItems } from '../../data/news';
import NewsGrid from './NewsGrid';

export default function LatestNews() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest developments in fusion research, events, and achievements
            from our team.
          </p>
        </div>
        
        <NewsGrid items={newsItems} limit={3} />
      </div>
    </section>
  );
}
import PageHeader from '../../components/PageHeader';
import { newsItems } from '../../data/news';
import NewsGrid from '../../components/news/NewsGrid';

export default function Latest() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <PageHeader 
        title="Latest News"
        description="Stay informed about our latest research, achievements, and events"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsGrid items={newsItems} />
      </div>
    </div>
  );
}
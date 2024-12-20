```jsx
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { getNews } from '../../lib/api';
import { formatDate } from '../../utils/date';

export const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Latest News</h1>
      
      <div className="grid gap-6">
        {news.map(article => (
          <Card key={article.id} hover>
            <div className="flex space-x-6">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-48 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {article.summary}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-pink-500">{article.category}</span>
                  <span className="text-gray-400">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
```
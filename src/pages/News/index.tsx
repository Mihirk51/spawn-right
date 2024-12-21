import React from 'react';
import { Card } from '../../components/common/Card';

const mockNews = [
  {
    id: '1',
    title: 'Global Esports Dominates Valorant Championship',
    summary: 'In a stunning display of skill and teamwork, Global Esports secured their victory...',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop',
    category: 'Valorant',
    publishedAt: new Date().toISOString()
  },
  // Add more mock news as needed
];

export const News = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Latest News</h1>
      
      <div className="grid gap-6">
        {mockNews.map(article => (
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
                    {new Date(article.publishedAt).toLocaleDateString()}
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
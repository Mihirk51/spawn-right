import React from 'react';
import { Card } from '../../components/common/Card';

const mockRankings = [
  {
    id: '1',
    name: 'Global Esports',
    logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    points: 1200,
    rank: 1
  },
  // Add more mock rankings as needed
];

export const Rankings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Rankings</h1>
      
      <Card>
        <div className="space-y-4">
          {mockRankings.map((team, index) => (
            <div 
              key={team.id}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-pink-500">#{index + 1}</span>
                <img 
                  src={team.logo} 
                  alt={team.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-white font-bold">{team.name}</span>
              </div>
              <div className="text-gray-400">
                {team.points.toLocaleString()} points
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
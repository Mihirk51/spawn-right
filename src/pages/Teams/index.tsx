import React from 'react';
import { Card } from '../../components/common/Card';

const mockTeams = [
  {
    id: '1',
    name: 'Global Esports',
    logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rank: 1,
    totalWinnings: 5000000
  },
  {
    id: '2', 
    name: 'Velocity Gaming',
    logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rank: 2,
    totalWinnings: 3000000
  },
  // Add more mock teams as needed
];

export const Teams = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Teams</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTeams.map(team => (
          <Card key={team.id} hover>
            <div className="text-center">
              <img 
                src={team.logo} 
                alt={team.name} 
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-white mb-2">{team.name}</h2>
              <div className="text-gray-400 mb-2">Rank #{team.rank}</div>
              <div className="text-pink-500">
                ₹{team.totalWinnings.toLocaleString('en-IN')}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
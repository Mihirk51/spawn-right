import React from 'react';
import { Card } from '../../components/common/Card';

const mockMatches = [
  {
    id: '1',
    team1: {
      name: 'Global Esports',
      logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    team2: {
      name: 'Velocity Gaming',
      logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    game: 'Valorant',
    status: 'live',
    score: { team1: 13, team2: 11 }
  },
  // Add more mock matches as needed
];

export const Matches = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Live Matches</h1>
      
      <div className="grid gap-4">
        {mockMatches.map(match => (
          <Card key={match.id} hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={match.team1.logo} 
                  alt={match.team1.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-white font-bold">{match.team1.name}</span>
              </div>
              
              <div className="text-center">
                <div className="text-pink-500 font-bold">
                  {match.score ? `${match.score.team1} - ${match.score.team2}` : 'VS'}
                </div>
                <div className="text-sm text-gray-400">{match.game}</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-white font-bold">{match.team2.name}</span>
                <img 
                  src={match.team2.logo} 
                  alt={match.team2.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
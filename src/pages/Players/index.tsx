import React from 'react';
import { Card } from '../../components/common/Card';

const mockPlayers = [
  {
    id: '1',
    name: 'SkRossi',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    team: 'Global Esports',
    game: 'Valorant'
  },
  // Add more mock players as needed
];

export const Players = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Players</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockPlayers.map(player => (
          <Card key={player.id} hover>
            <div className="text-center">
              <img 
                src={player.photo} 
                alt={player.name} 
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-white mb-2">{player.name}</h2>
              <div className="text-gray-400">{player.team}</div>
              <div className="text-pink-500 text-sm mt-2">{player.game}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
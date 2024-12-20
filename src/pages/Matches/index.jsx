```jsx
import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { useMatches } from '../../hooks/useMatches';
import { GAME_TYPES } from '../../types';

export const Matches = () => {
  const [selectedGame, setSelectedGame] = useState('all');
  const { liveMatches, upcomingMatches, loading, error } = useMatches();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-white">Error: {error}</div>;

  const filteredMatches = [...liveMatches, ...upcomingMatches].filter(
    match => selectedGame === 'all' || match.game === selectedGame
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Matches</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedGame('all')}
            className={`px-4 py-2 rounded ${
              selectedGame === 'all' ? 'bg-pink-500 text-white' : 'bg-gray-800 text-gray-400'
            }`}
          >
            All Games
          </button>
          {Object.values(GAME_TYPES).map(game => (
            <button
              key={game}
              onClick={() => setSelectedGame(game)}
              className={`px-4 py-2 rounded ${
                selectedGame === game ? 'bg-pink-500 text-white' : 'bg-gray-800 text-gray-400'
              }`}
            >
              {game}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredMatches.map(match => (
          <Card key={match.id} hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={match.team1.logo} alt={match.team1.name} className="w-12 h-12 rounded-full" />
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
                <img src={match.team2.logo} alt={match.team2.name} className="w-12 h-12 rounded-full" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
```
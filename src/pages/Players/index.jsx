```jsx
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { getPlayers } from '../../lib/api';
import { GAME_TYPES } from '../../types';

export const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGame, setSelectedGame] = useState('all');

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await getPlayers({ game: selectedGame });
        setPlayers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [selectedGame]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Players</h1>
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

      <div className="grid grid-cols-4 gap-6">
        {players.map(player => (
          <Card key={player.id} hover>
            <div className="text-center">
              <img 
                src={player.photo} 
                alt={player.name} 
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h2 className="text-xl font-bold text-white mb-2">{player.name}</h2>
              <div className="text-pink-500 mb-2">{player.ign}</div>
              <div className="text-sm text-gray-400 mb-4">{player.team}</div>
              
              {player.stats && (
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-400">
                    K/D: {(player.stats.kills / Math.max(1, player.stats.deaths)).toFixed(2)}
                  </div>
                  <div className="text-gray-400">
                    Rating: {player.stats.rating.toFixed(2)}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
```
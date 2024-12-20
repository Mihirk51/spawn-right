```jsx
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { getRankings } from '../../lib/api';
import { GAME_TYPES } from '../../types';
import { formatIndianNumber } from '../../utils/format';

export const Rankings = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGame, setSelectedGame] = useState(GAME_TYPES.BGMI);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await getRankings(selectedGame);
        setRankings(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRankings();
  }, [selectedGame]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Rankings</h1>
        <div className="flex space-x-4">
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

      <Card>
        <div className="space-y-4">
          {rankings.map((team, index) => (
            <div 
              key={team.id}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-pink-500">#{index + 1}</span>
                <img src={team.logo} alt={team.name} className="w-12 h-12 rounded-full" />
                <span className="text-white font-bold">{team.name}</span>
              </div>
              <div className="text-gray-400">
                ₹{formatIndianNumber(team.totalWinnings)}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
```
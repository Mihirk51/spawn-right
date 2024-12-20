```jsx
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { getTeams } from '../../lib/api';
import { formatIndianNumber } from '../../utils/format';

export const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeams();
        setTeams(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Teams</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {teams.map(team => (
          <Card key={team.id} hover>
            <div className="text-center">
              <img 
                src={team.logo} 
                alt={team.name} 
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h2 className="text-xl font-bold text-white mb-2">{team.name}</h2>
              <div className="text-gray-400 mb-4">Rank #{team.rank}</div>
              <div className="text-sm text-gray-400">
                Total Winnings: ₹{formatIndianNumber(team.totalWinnings)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
```
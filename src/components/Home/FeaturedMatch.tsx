import React from 'react';
import type { Match } from '../../types';

interface FeaturedMatchProps {
  match: Match;
}

export const FeaturedMatch: React.FC<FeaturedMatchProps> = ({ match }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-400">{match.tournament.name}</span>
        <span className={`px-2 py-1 rounded ${
          match.status === 'live' ? 'bg-red-600' : 'bg-gray-600'
        }`}>
          {match.status.toUpperCase()}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={match.team1.logo} alt={match.team1.name} className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-bold">{match.team1.name}</h3>
            <span className="text-sm text-gray-400">Rank #{match.team1.rank}</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">
            {match.score ? `${match.score.team1} : ${match.score.team2}` : 'VS'}
          </div>
          <span className="text-sm text-gray-400">
            {new Date(match.startTime).toLocaleTimeString()}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <h3 className="font-bold">{match.team2.name}</h3>
            <span className="text-sm text-gray-400">Rank #{match.team2.rank}</span>
          </div>
          <img src={match.team2.logo} alt={match.team2.name} className="w-12 h-12 rounded-full" />
        </div>
      </div>
    </div>
  );
};
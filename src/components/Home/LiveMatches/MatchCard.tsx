import React from 'react';
import { Card } from '../../common/Card';
import type { Match } from '../../../types';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <Card hover>
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
  );
};
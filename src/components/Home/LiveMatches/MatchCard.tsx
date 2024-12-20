/**
 * Individual match card component
 * @module components/Home/LiveMatches/MatchCard
 */

import React from 'react';
import type { Match } from '@/types';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{match.team1.logo}</span>
          <span className="text-white">{match.team1.name}</span>
        </div>
        <span className="text-gray-400">vs</span>
        <div className="flex items-center space-x-2">
          <span className="text-white">{match.team2.name}</span>
          <span className="text-2xl">{match.team2.logo}</span>
        </div>
      </div>
      <div className="text-sm text-gray-400 mt-2">
        {match.tournament.name}
      </div>
    </div>
  );
};
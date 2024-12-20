/**
 * Live matches section component
 * @module components/Home/LiveMatches
 */

import React from 'react';
import { MatchCard } from './MatchCard';
import type { Match } from '@/types';

interface LiveMatchesProps {
  matches: Match[];
}

export const LiveMatches: React.FC<LiveMatchesProps> = ({ matches }) => {
  return (
    <div className="mb-8">
      <h2 className="flex items-center text-xl font-bold text-white mb-4">
        <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        Live Matches
      </h2>
      
      <div className="space-y-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { Card } from '../../common/Card';
import type { Tournament } from '../../../types';

interface TournamentCardProps {
  tournament: Tournament;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  return (
    <Card hover>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{tournament.name}</h3>
        <div className="text-sm text-gray-400">{tournament.game}</div>
        <div className="text-pink-500 text-sm mt-2">
          Prize Pool: ₹{tournament.prizePool.toLocaleString('en-IN')}
        </div>
      </div>
    </Card>
  );
};
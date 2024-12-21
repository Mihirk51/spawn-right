import React from 'react';
import { TournamentCard } from './TournamentCard';
import type { Tournament } from '../../../types';

interface TournamentsListProps {
  tournaments: Tournament[];
}

export const TournamentsList: React.FC<TournamentsListProps> = ({ tournaments }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Upcoming Tournaments</h2>
      <div className="grid gap-4">
        {tournaments.map(tournament => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};
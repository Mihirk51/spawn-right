import React from 'react';

const tournaments = [
  {
    team1: { name: 'SGP', logo: '🎮' },
    team2: { name: 'BAC', logo: '🎮' },
    game: 'Counter Strike:Hunting',
    tournament: 'Arena of Valor International Championship 2024',
  },
  {
    team1: { name: 'BSE', logo: '🎮' },
    team2: { name: 'AGG', logo: '🎮' },
    game: 'Marathon:Gun Shooting',
    tournament: 'International E-Sport Championship 2024',
  },
  {
    team1: { name: 'FW', logo: '🎮' },
    team2: { name: 'ONE', logo: '🎮' },
    game: 'Rifle Shooting:Sniping',
    tournament: 'Valor Championship',
  },
];

export function TournamentsList() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">Tournaments</h2>
      
      <div className="space-y-4">
        {tournaments.map((match, index) => (
          <div key={index} className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
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
            <div className="text-sm text-gray-400">{match.game}</div>
            <div className="text-xs text-gray-500 mt-1">{match.tournament}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
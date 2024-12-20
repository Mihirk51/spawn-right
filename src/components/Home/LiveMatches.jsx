import React from 'react';

const matches = [
  {
    team1: { name: 'TNL', logo: '🎮' },
    team2: { name: 'FS', logo: '🎮' },
    tournament: 'MS World Championship',
  },
  {
    team1: { name: 'HKA', logo: '🎮' },
    team2: { name: 'OSE', logo: '🎮' },
    tournament: 'MS World Championship',
  },
  {
    team1: { name: 'FL', logo: '🎮' },
    team2: { name: 'BSE', logo: '🎮' },
    tournament: 'MS World Championship',
  },
];

export function LiveMatches() {
  return (
    <div className="mb-8">
      <h2 className="flex items-center text-xl font-bold text-white mb-4">
        <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        Live Matches
      </h2>
      
      <div className="space-y-4">
        {matches.map((match, index) => (
          <div key={index} className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl p-4">
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
              {match.tournament}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
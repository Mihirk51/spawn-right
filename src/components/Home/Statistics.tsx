import React from 'react';

const stats = [
  { value: '65 251', label: 'Tournaments' },
  { value: '14 456', label: 'Matches' },
  { value: '6000', label: 'Teams' },
  { value: '9000', label: 'Players' },
];

export const Statistics = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">Statistics</h2>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-pink-500 font-bold">{stat.value}</span>
            <span className="text-white">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
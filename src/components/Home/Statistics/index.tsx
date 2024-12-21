import React from 'react';
import { Card } from '../../common/Card';

const stats = [
  { value: '65,251', label: 'Tournaments' },
  { value: '14,456', label: 'Matches' },
  { value: '6,000', label: 'Teams' },
  { value: '9,000', label: 'Players' },
];

export const Statistics = () => {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">Statistics</h2>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-pink-500 font-bold">{stat.value}</span>
            <span className="text-white">{stat.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
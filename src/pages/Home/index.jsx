import React from 'react';
import { Hero } from '../../components/Home/Hero';
import { LiveMatches } from '../../components/Home/LiveMatches';
import { TournamentsList } from '../../components/Home/TournamentsList';
import { Statistics } from '../../components/Home/Statistics';
import { TrustedPartners } from '../../components/Home/TrustedPartners';
import { useMatches } from '../../hooks/useMatches';

export const Home = () => {
  const { liveMatches, upcomingMatches, loading, error } = useMatches();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-8">
      <Hero />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <TournamentsList matches={upcomingMatches} />
        </div>
        <div className="col-span-4">
          <LiveMatches matches={liveMatches} />
          <Statistics />
        </div>
      </div>
      <TrustedPartners />
    </div>
  );
};
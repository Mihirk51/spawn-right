import { Hero } from '../../components/Home/Hero';
import { LiveMatches } from '../../components/Home/LiveMatches';
import { TournamentsList } from '../../components/Home/TournamentsList';
import { Statistics } from '../../components/Home/Statistics';
import { TrustedPartners } from '../../components/Home/TrustedPartners';
import type { Tournament } from '../../types';

// @ts-ignore: TS6133
const _mockMatches = [
  {
    id: '1',
    game: 'Valorant',
    team1: {
      id: '1',
      name: 'Global Esports',
      logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    team2: {
      id: '2',
      name: 'Velocity Gaming',
      logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    startTime: new Date().toISOString(),
    status: 'live',
    score: { team1: 13, team2: 11 },
    tournament: { id: '1', name: 'VCT 2024' }
  }
];

// @ts-ignore: TS6133
const _mockTournaments: Tournament[] = [
  {
    id: '1',
    name: 'VCT 2024',
    game: 'Valorant',
    prizePool: 1000000,
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    teams: ['1', '2'],
    status: 'upcoming',
    location: 'Online',
    format: 'Single Elimination'
  }
];

export const Home = () => {
  return (
    <div className="space-y-8">
      <Hero />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <TournamentsList/>
        </div>
        <div className="col-span-4">
          <LiveMatches/>
          <Statistics />
        </div>
      </div>
      <TrustedPartners />
    </div>
  );
};
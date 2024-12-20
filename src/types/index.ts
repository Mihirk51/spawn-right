export interface Match {
  id: string;
  game: 'BGMI' | 'Valorant' | 'CODMobile';
  team1: Team;
  team2: Team;
  startTime: Date;
  status: 'upcoming' | 'live' | 'completed';
  tournament: Tournament;
  score?: {
    team1: number;
    team2: number;
  };
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  rank: number;
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
  photo: string;
  team: string;
  stats: GameStats;
}

export interface Tournament {
  id: string;
  name: string;
  game: string;
  startDate: Date;
  endDate: Date;
  prizePool: string;
  teams: Team[];
}

export interface GameStats {
  kills?: number;
  deaths?: number;
  assists?: number;
  rating?: number;
  matchesPlayed: number;
}
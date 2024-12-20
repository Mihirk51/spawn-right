/**
 * Core type definitions for the application
 * @module types
 */

// Game types
/** Supported game types in the application */
export type GameType = 'BGMI' | 'Valorant' | 'COD Mobile';

/** Possible match statuses */
export type MatchStatus = 'upcoming' | 'live' | 'completed';

/** Available game types mapping */
export const GAME_TYPES: Record<string, GameType> = {
  BGMI: 'BGMI',
  VALORANT: 'Valorant',
  CODMOBILE: 'COD Mobile'
} as const;

/** Match status mapping */
export const MATCH_STATUS: Record<string, MatchStatus> = {
  UPCOMING: 'upcoming',
  LIVE: 'live',
  COMPLETED: 'completed'
} as const;

/** Team information */
export interface Team {
  /** Unique identifier for the team */
  id: string;
  /** Team name */
  name: string;
  /** URL to team logo */
  logo: string;
  /** Current team ranking */
  rank: number;
  /** Total prize money won */
  totalWinnings: number;
  /** List of player IDs in the team */
  players: string[];
}

/** Player statistics for a specific game */
export interface GameStats {
  /** Total kills */
  kills: number;
  /** Total deaths */
  deaths: number;
  /** Total assists */
  assists: number;
  /** Player rating */
  rating: number;
  /** Number of matches played */
  matchesPlayed: number;
}

/** Player information */
export interface Player {
  /** Unique identifier for the player */
  id: string;
  /** Player's full name */
  name: string;
  /** URL to player's photo */
  photo: string;
  /** ID of the team the player belongs to */
  team: string;
  /** Game-specific statistics */
  stats: Record<GameType, GameStats>;
}

/** Match information */
export interface Match {
  /** Unique identifier for the match */
  id: string;
  /** Game being played */
  game: GameType;
  /** First team */
  team1: Team;
  /** Second team */
  team2: Team;
  /** Match start time in ISO format */
  startTime: string;
  /** Current match status */
  status: MatchStatus;
  /** Current score (if match is live or completed) */
  score?: {
    team1: number;
    team2: number;
  };
  /** Tournament information */
  tournament: {
    id: string;
    name: string;
  };
}

/** Generic API response wrapper */
export interface ApiResponse<T> {
  /** Response data */
  data: T;
  /** Optional success/error message */
  message?: string;
  /** Optional error details */
  error?: string;
}
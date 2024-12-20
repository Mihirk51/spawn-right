/**
 * API types and interfaces
 * @module api/types
 */

import { Match, Team, Player, ApiResponse, GameType } from '@/types';

/** API response for matches endpoint */
export interface MatchesResponse extends ApiResponse<Match[]> {}

/** API response for teams endpoint */
export interface TeamsResponse extends ApiResponse<Team[]> {}

/** API response for players endpoint */
export interface PlayersResponse extends ApiResponse<Player[]> {}

/** Filter parameters for matches API */
export interface MatchFilters {
  /** Filter by game type */
  game?: GameType;
  /** Filter by match status */
  status?: string;
  /** Maximum number of results */
  limit?: number;
}

/** Filter parameters for teams API */
export interface TeamFilters {
  /** Filter by game */
  game?: GameType;
  /** Filter by country */
  country?: string;
  /** Maximum number of results */
  limit?: number;
}

/** Filter parameters for players API */
export interface PlayerFilters {
  /** Filter by game */
  game?: GameType;
  /** Filter by team ID */
  team?: string;
  /** Filter by country */
  country?: string;
  /** Maximum number of results */
  limit?: number;
}
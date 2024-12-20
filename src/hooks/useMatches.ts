/**
 * Custom hook for fetching and managing match data
 * @module hooks/useMatches
 */

import { useState, useEffect } from 'react';
import { matchesApi } from '@/lib/api/matches';
import type { Match } from '@/types';

/** Return type for useMatches hook */
interface UseMatchesResult {
  /** Currently live matches */
  liveMatches: Match[];
  /** Upcoming matches */
  upcomingMatches: Match[];
  /** Loading state */
  loading: boolean;
  /** Error message if any */
  error: string | null;
}

/**
 * Hook to fetch and manage live and upcoming matches
 * @returns {UseMatchesResult} Object containing matches data, loading state, and errors
 * 
 * @example
 * ```tsx
 * const { liveMatches, upcomingMatches, loading, error } = useMatches();
 * 
 * if (loading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage message={error} />;
 * 
 * return (
 *   <div>
 *     <LiveMatches matches={liveMatches} />
 *     <UpcomingMatches matches={upcomingMatches} />
 *   </div>
 * );
 * ```
 */
export const useMatches = (): UseMatchesResult => {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const [live, upcoming] = await Promise.all([
          matchesApi.getLive(),
          matchesApi.getUpcoming()
        ]);
        
        setLiveMatches(live);
        setUpcomingMatches(upcoming);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return { liveMatches, upcomingMatches, loading, error };
};
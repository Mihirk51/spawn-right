import { useState, useEffect } from 'react';
import { getLiveMatches, getUpcomingMatches } from '../lib/api';

export const useMatches = () => {
  const [liveMatches, setLiveMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const [liveData, upcomingData] = await Promise.all([
          getLiveMatches(),
          getUpcomingMatches()
        ]);
        
        setLiveMatches(liveData.data);
        setUpcomingMatches(upcomingData.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return { liveMatches, upcomingMatches, loading, error };
};
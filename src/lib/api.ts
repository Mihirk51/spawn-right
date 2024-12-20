import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchLiveMatches = async () => {
  const { data } = await api.get('/matches/live');
  return data;
};

export const fetchUpcomingTournaments = async () => {
  const { data } = await api.get('/tournaments/upcoming');
  return data;
};

export const fetchStatistics = async () => {
  const { data } = await api.get('/stats/overview');
  return data;
};
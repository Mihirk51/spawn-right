import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Matches
export const getMatches = (params) => api.get('/matches', { params });
export const getLiveMatches = () => api.get('/matches/live');
export const getUpcomingMatches = () => api.get('/matches/upcoming');
export const getMatchDetails = (id) => api.get(`/matches/${id}`);

// Teams
export const getTeams = (params) => api.get('/teams', { params });
export const getTeamDetails = (id) => api.get(`/teams/${id}`);
export const getTeamMatches = (id) => api.get(`/teams/${id}/matches`);
export const getTeamPlayers = (id) => api.get(`/teams/${id}/players`);

// Players
export const getPlayers = (params) => api.get('/players', { params });
export const getPlayerDetails = (id) => api.get(`/players/${id}`);
export const getPlayerStats = (id) => api.get(`/players/${id}/stats`);

// Rankings
export const getRankings = (game) => api.get(`/rankings/${game}`);

// News
export const getNews = (params) => api.get('/news', { params });
export const getNewsArticle = (id) => api.get(`/news/${id}`);
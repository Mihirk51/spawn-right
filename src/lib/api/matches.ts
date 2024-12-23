import { apiClient } from './client';
import type { MatchesResponse, MatchFilters } from './types';
import type { Match, ApiResponse } from '@/types';

export const matchesApi = {
  getLive: async (): Promise<Match[]> => {
    const { data } = await apiClient.get<MatchesResponse>('/matches/live');
    return data.data;
  },

  getUpcoming: async (): Promise<Match[]> => {
    const { data } = await apiClient.get<MatchesResponse>('/matches/upcoming');
    return data.data;
  },

  getAll: async (filters?: MatchFilters): Promise<Match[]> => {
    const { data } = await apiClient.get<MatchesResponse>('/matches', { params: filters });
    return data.data;
  },

  getById: async (id: string): Promise<Match> => {
    const { data } = await apiClient.get<ApiResponse<Match>>(`/matches/${id}`);
    return data.data;
  }
};
import { apiClient } from './client';
import type { TeamsResponse, TeamFilters } from './types';
import type { Team } from '@/types';

export const teamsApi = {
  getAll: async (filters?: TeamFilters): Promise<Team[]> => {
    const { data } = await apiClient.get<TeamsResponse>('/teams', { params: filters });
    return data.data;
  },

  getById: async (id: string): Promise<Team> => {
    const { data } = await apiClient.get<ApiResponse<Team>>(`/teams/${id}`);
    return data.data;
  }
};
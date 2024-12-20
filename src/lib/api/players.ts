import { apiClient } from './client';
import type { PlayersResponse, PlayerFilters } from './types';
import type { Player } from '@/types';

export const playersApi = {
  getAll: async (filters?: PlayerFilters): Promise<Player[]> => {
    const { data } = await apiClient.get<PlayersResponse>('/players', { params: filters });
    return data.data;
  },

  getById: async (id: string): Promise<Player> => {
    const { data } = await apiClient.get<ApiResponse<Player>>(`/players/${id}`);
    return data.data;
  }
};
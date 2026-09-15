import api from './axios';

export interface UserSummary {
  id: number;
  username: string;
  email: string;
  roles: string[];
  enabled: boolean;
}

export interface AuthResponse {
  token: string;
  username: string;
  email: string;
  role: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface HealthResponse {
  status: string;
  service?: string;
  timestamp?: string;
}

export const authApi = {
  login: async (data: LoginPayload): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/v1/auth/login', data);
    return res.data;
  },

  register: async (data: RegisterPayload): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/v1/auth/register', data);
    return res.data;
  },

  getLobbySummary: async (): Promise<UserSummary> => {
    const res = await api.get<UserSummary>('/v1/lobby/summary');
    return res.data;
  },

  checkHealth: async (): Promise<HealthResponse> => {
    const res = await api.get<HealthResponse>('/v1/auth/health');
    return res.data;
  },
};

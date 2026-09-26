import { apiClient } from "../../api/client";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  SeedProfile,
} from "../../types/auth";

export const register = async (
  data: RegisterRequest,
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>("/auth/register", data);
  return response.data;
};

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>("auth/login", data);
  return response.data;
};

export const demologin = async (
  profile: SeedProfile,
): Promise<AuthResponse> => {
  const response = await apiClient.post(`auth/demo-login?profile=${profile}`);
  return response.data;
};

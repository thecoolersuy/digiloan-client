export interface AuthResponse {
  token: string;
  email: string;
  expiresAtUtc: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  fullName: string;
  password: string;
}

export type SeedProfile = "Saver" | "Spender";

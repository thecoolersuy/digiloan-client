import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  email: string | null;
  fullName: string | null;
  login: (token: string, email: string, fullName: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      email: null,
      fullName: null,
      login: (token, email, fullName) => set({ token, email, fullName }),
      logout: () => set({ token: null, email: null, fullName: null }),
    }),
    {
      name: "digiloan-auth",
    },
  ),
);

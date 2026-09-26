import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/authStore";
import type { LoginRequest, RegisterRequest } from "../../../types/auth";
import { useMutation } from "@tanstack/react-query";
import { login, register } from "../api";

export function useLogin() {
  const setAuth = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (response) => {
      setAuth(response.token, response.email);
      navigate("/dashboard");
    },
  });
}

export function useRegister() {
  const setAuth = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: (response) => {
      setAuth(response.token, response.email);
      navigate("/dashboard");
    },
  });
}

export function useDemoLogin() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: (response) => {
      setAuth(response.token, response.email);
      navigate("/dashboard");
    },
  });
}

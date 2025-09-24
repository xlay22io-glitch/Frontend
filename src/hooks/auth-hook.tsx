/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAccountInfo,
  login,
  logout,
  register,
  requestPasswordReset,
  resetPassword,
  verifyEmail,
} from "../services/auth-api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthStore from "../store/auth-store";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string; confirm_password: string }) =>
      register(data),
    onSuccess: (res) => {
      toast.success(res?.detail || "Registration successful! Please verify your email.");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.email?.[0] ||
        error?.first_name?.[0] ||
        error?.last_name?.[0] ||
        error?.error?.[0] ||
        "Registration failed.";

      console.log(errorMessage);
      toast.error(errorMessage);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const setRefreshToken = useAuthStore((state) => state.setRefreshToken);

  return useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data),
    onSuccess: (data) => {
      const { access, refresh } = data;
      setToken(access);
      setRefreshToken(refresh);

      navigate("/account");
    },
    onError: (error: any) => {
      const errorMessage = error?.detail?.[0] || "Login failed.";
      toast.error(errorMessage);
    },
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (data: { uid: string; token: string }) => verifyEmail(data),
    onSuccess: (res) => {
      toast.success(res?.detail || "Email verified successfully.");
    },
    onError: (error: any) => {
      toast.error(error?.detail || "Email verification failed.");
    },
  });
};

export const useLogout = () => {
  const refreshToken = useAuthStore((state) => state.refreshToken);

  return useMutation({
    mutationFn: () => logout({ refresh: refreshToken! }),
    onSuccess: () => {
      toast.success("You have been logged out.");
    },
    onError: (error: any) => {
      toast.error(error || "Logout failed.");
    },
  });
};

export const useRequestPasswordReset = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: { email: string }) => requestPasswordReset(data),
    onSuccess: (res) => {
      toast.success(res?.detail || "Password reset link sent to your email.");
      navigate("/reset/password/email-sent");
    },
    onError: (error: any) => {
      const errorMessage = error?.email || error?.error || "Failed to send reset link.";
      toast.error(errorMessage);
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success("Password reset successfully!");
      navigate("/login");
    },
    onError: (error: any) => {
      const message = error?.detail || error?.password?.[0] || "Reset failed";
      toast.error(message);
    },
  });
};

export const useAccountInfo = () => {
  return useQuery({
    queryKey: ["account-info"],
    queryFn: getAccountInfo,
    staleTime: 1000 * 60 * 5,
  });
};

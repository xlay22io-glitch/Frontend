/* eslint-disable @typescript-eslint/no-explicit-any */
import { login, register, verifyEmail } from '../services/auth-api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuthStore from '../store/auth-store';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      confirm_password: string;
    }) => register(data),
    onSuccess: (res) => {
      toast.success(
        res?.detail || 'Registration successful! Please verify your email.'
      );
    },
    onError: (error: any) => {
      const errorMessage =
        error?.email ||
        error?.first_name ||
        error?.last_name ||
        error?.error ||
        'Registration failed.';
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

      navigate('/');
    },
    onError: (error: any) => {
      const errorMessage = error?.detail?.[0] || 'Login failed.';
      toast.error(errorMessage);
    },
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (data: { uid: string; token: string }) => verifyEmail(data),
    onSuccess: (res) => {
      toast.success(res?.detail || 'Email verified successfully.');
    },
    onError: (error: any) => {
      toast.error(error?.detail || 'Email verification failed.');
    },
  });
};

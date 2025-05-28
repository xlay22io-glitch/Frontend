import axiosInstance from '../api/axios-instance';
import { AxiosError } from 'axios';

const handleError = (error: unknown, defaultMessage: string) => {
  if (error instanceof AxiosError) {
    return Promise.reject(error.response?.data || defaultMessage);
  } else if (error instanceof Error) {
    return Promise.reject(error.message || defaultMessage);
  } else {
    return Promise.reject(defaultMessage);
  }
};

export const register = async (data: {
  email: string;
  password: string;
  confirm_password: string;
}) => {
  try {
    const response = await axiosInstance.post(`/auth/register/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: unknown) {
    return handleError(error, 'An error occurred during registering process.');
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`/auth/login/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: unknown) {
    return handleError(error, 'An error occurred during logging in process.');
  }
};

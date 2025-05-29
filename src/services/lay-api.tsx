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

export const generateDepositAddress = async () => {
  try {
    const response = await axiosInstance.get('/account/deposit/generate/');
    return response.data;
  } catch (error) {
    return handleError(error, 'Failed to generate deposit address.');
  }
};

export const withdraw = async (data: { amount: number; address: string }) => {
  try {
    const response = await axiosInstance.post('/account/withdraw/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return handleError(error, 'Withdrawal request failed.');
  }
};

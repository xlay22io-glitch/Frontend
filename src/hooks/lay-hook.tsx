/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { generateDepositAddress, withdraw } from '../services/lay-api';
import { toast } from 'react-toastify';

export const useGenerateDepositAddress = () => {
  return useQuery({
    queryKey: ['deposit-address'],
    queryFn: generateDepositAddress,
    staleTime: 0,
    retry: 1,
  });
};

export const useWithdraw = () => {
  return useMutation({
    mutationFn: (data: { amount: number; address: string }) => withdraw(data),
    onSuccess: (res) => {
      toast.success(
        res?.detail || 'Withdrawal request submitted successfully.'
      );
    },
    onError: (error: any) => {
      const message = error?.detail || 'Withdrawal failed.';
      toast.error(message);
    },
  });
};

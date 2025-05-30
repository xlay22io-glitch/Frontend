/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  calculateLay,
  generateDepositAddress,
  withdraw,
} from '../services/lay-api';
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

export const useCalculator = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: calculateLay,
    onSuccess: () => {
      toast.success('Lay backed successfully.');

      queryClient.invalidateQueries({ queryKey: ['account-info'] });
    },
    onError: (err: any) => {
      toast.error(
        err?.detail?.detail?.[0] ||
          err?.detail?.total_odd?.[0] ||
          err?.detail?.stake_amount?.[0] ||
          'Failed to back your lay.'
      );
    },
  });
};

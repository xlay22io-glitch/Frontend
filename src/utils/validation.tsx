import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email format'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&+])/,
        'Password must contain uppercase, lowercase, number and special character.'
      ),
    confirm_password: z.string().min(8, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export const calculatorSchema = z.object({
  total_odd: z.string().min(1, 'Total odd is required'),
  stake_amount: z.string().min(1, 'Stake amount is required'),
  win_payout: z.string().min(1, 'Win payout is required'),
  file: z
    .instanceof(File, { message: 'File is required' })
    .refine((file) => file.type.startsWith('image/'), {
      message: 'Only image files are allowed',
    }),
  all_data_true: z.literal(true, {
    errorMap: () => ({ message: 'You must confirm that data is correct' }),
  }),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;
export type LoginFormInputs = z.infer<typeof loginSchema>;
export type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;
export type CalculatorFormInputs = z.infer<typeof calculatorSchema>;

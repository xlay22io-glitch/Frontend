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

export type RegisterFormInputs = z.infer<typeof registerSchema>;

import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain uppercase, lowercase, and a number."
      ),
    confirm_password: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const decimalLike = z
  .string()
  .min(1, "This field is required")
  .refine((v) => {
    const n = Number(v.replace(",", "."));
    return Number.isFinite(n) && n > 0;
  }, "Enter a positive number (e.g. 10.5 or 10,5)");

export const calculatorSchema = z.object({
  match: z.string().min(1, "Match is required"),
  tip: z.string().min(1, "Tip is required"),
  total_odd: decimalLike, // <— accepts 10.50 or 10,50
  stake_amount: decimalLike, // <— accepts 2.70 or 2,70
  win_payout: z
    .string()
    .min(1, "Win payout is required")
    .refine((v) => Number.isFinite(Number(v.replace(",", "."))), "Invalid payout"),
  file: z
    .instanceof(File, { message: "File is required" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only image files are allowed",
    }),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;
export type LoginFormInputs = z.infer<typeof loginSchema>;
export type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;
export type CalculatorFormInputs = z.infer<typeof calculatorSchema>;

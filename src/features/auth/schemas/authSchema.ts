import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be 8 characters long"),
});

export const registerSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  fullName: z.string().min(4, "Name should be at leats 4 characters long"),
  password: z.string().min(8, "Password must be 8 character long"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;

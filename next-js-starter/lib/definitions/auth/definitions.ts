import { z } from 'zod';

type User = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};

type Errors = {
  firstName?: string[];
  lastName?: string[];
  email?: string[];
  password?: string[];
};

export const RegisterFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long.' })
    .trim(),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long.' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(1, { message: 'Please enter password.' }).trim(),
});

export type RegisterFormState = {
  errors?: Errors;
  message?: string;
  isError: boolean;
  data: User;
};

export type LoginFormState = {
  isError: boolean;
  data: Pick<User, 'email' | 'password'>;
  errors?: Pick<Errors, 'email' | 'password'>;
  message?: string;
};

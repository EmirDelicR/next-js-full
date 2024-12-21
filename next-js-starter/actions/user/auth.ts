'use server';

import { getUserByEmail, loginUser, saveUser } from '@/lib/db/db';
import {
  LoginFormSchema,
  LoginFormState,
  RegisterFormSchema,
  RegisterFormState,
} from '@/lib/definitions/auth';
import { LoggedIn } from '@/lib/types/user';

export async function register(state: RegisterFormState, formData: FormData) {
  const user = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    userName: formData.get('userName') as string,
  };
  const validatedFields = RegisterFormSchema.safeParse(user);

  if (!validatedFields.success) {
    return {
      ...state,
      errors: validatedFields.error.flatten().fieldErrors,
      data: user,
    };
  }

  try {
    await saveUser({ ...user, isLoggedIn: LoggedIn.logIn });

    return {
      ...state,
      data: user,
      isSuccess: true,
    };
  } catch (err) {
    return {
      ...state,
      data: user,
      isError: true,
      message: `${err}`,
    };
  }
}

export async function login(state: LoginFormState, formData: FormData) {
  const user = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  const validatedFields = LoginFormSchema.safeParse(user);

  if (!validatedFields.success) {
    return {
      ...state,
      errors: validatedFields.error.flatten().fieldErrors,
      data: user,
    };
  }

  try {
    const dbUser = getUserByEmail(user.email);

    if (!dbUser) {
      throw new Error('User not found.');
    }

    if (user.password !== dbUser.password) {
      throw new Error('Invalid password.');
    }

    await loginUser(user.email);

    return {
      ...state,
      data: user,
      isSuccess: true,
    };
  } catch (err) {
    return {
      ...state,
      data: user,
      isError: true,
      message: `${err}`,
    };
  }
}

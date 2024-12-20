import {
  LoginFormSchema,
  LoginFormState,
  RegisterFormSchema,
  RegisterFormState,
} from '@/lib/definitions/auth/definitions';

export async function register(_state: RegisterFormState, formData: FormData) {
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
      errors: validatedFields.error.flatten().fieldErrors,
      data: user,
      isError: false,
    };
  }

  // TODO validate password here
  return {
    data: user,
    isError: false,
    message: '',
  };
  // Call the provider or db to create a user...
  // return user here login here with token
}

export async function login(_state: LoginFormState, formData: FormData) {
  const user = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  const validatedFields = LoginFormSchema.safeParse(user);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      data: user,
      isError: false,
    };
  }

  return {
    data: user,
    isError: false,
    message: '',
  };
  // TODO validate password here

  // Call the provider or db to create a user...
  // return user here login here with token
}

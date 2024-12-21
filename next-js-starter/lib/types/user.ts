export type User = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  isLoggedIn: LoggedIn;
};

type LoggedIn = 1 | 0;

export const LoggedIn = {
  logIn: 1,
  logOut: 0,
} as const;

export type GeneralFormState<D, E> = {
  data: D;
  isError: boolean;
  isSuccess: boolean;
  errors?: E;
  message?: string;
};

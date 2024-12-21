export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};

export type GeneralFormState<D, E> = {
  data: D;
  isError: boolean;
  errors?: E;
  message?: string;
};

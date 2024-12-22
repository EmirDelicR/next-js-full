import { hash, verify } from 'argon2';

const SECRET = Buffer.from(`${process.env.AUTH_PASSWORD_SALT}`, 'utf-8');

export const hashPassword = async (password: string) => {
  return await hash(password, { secret: SECRET });
};

export const verifyPassword = async (userPassword: string, passwordToCheck: string) => {
  return await verify(userPassword, passwordToCheck, {
    secret: SECRET,
  });
};

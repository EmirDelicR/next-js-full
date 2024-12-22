import 'server-only';

import { cache } from 'react';
import { cookies } from 'next/headers';
import { jwtVerify, SignJWT } from 'jose';
import { Session, SessionPayload } from '@/lib/definitions/sessions';
import { getUserById } from '../db/db';

const ENCODED_KEY = new TextEncoder().encode(process.env.SESSION_SECRET);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(ENCODED_KEY);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, ENCODED_KEY, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to verify session');
  }
}

export const verifySession = cache(async (): Promise<Session> => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return { isAuth: false, userId: undefined };
  }

  return { isAuth: true, userId: session?.userId as number };
});

export async function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

export const getUserFromSession = cache(async () => {
  const session = (await verifySession()) as Session;
  if (!session || !session.userId) {
    return null;
  }

  try {
    const user = getUserById(session.userId);
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to fetch user');
    return null;
  }
});

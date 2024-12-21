import { JWTPayload } from 'jose';

export interface SessionPayload extends JWTPayload {
  userId: number;
  expiresAt: Date;
}

export type Session = {
  isAuth: boolean;
  userId: number;
};

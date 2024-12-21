import sql from 'better-sqlite3';
import { User } from '@/lib/definitions/user';

const db = sql('example.db');

export function getUsers() {
  return db.prepare<User[], null>('SELECT * FROM users').all();
}

export function getUserById(id: number) {
  return db.prepare<string, User>('SELECT * FROM users WHERE id = ?').get(`${id}`);
}

export function getUserByEmail(email: string) {
  return db.prepare<string, User>('SELECT * FROM users WHERE email = ?').get(email);
}

export async function saveUser(user: User) {
  return db
    .prepare<
      User,
      null
    >('INSERT INTO users (firstName, lastName, userName, email, password, isLoggedIn) VALUES (@firstName, @lastName, @userName, @email, @password, @isLoggedIn)')
    .run(user).lastInsertRowid as number;
}

import nextEnv from '@next/env';
import { hash } from 'argon2';
import sql from 'better-sqlite3';

const projectDir = process.cwd();
nextEnv.loadEnvConfig(projectDir);
const SECRET = Buffer.from(`${process.env.AUTH_PASSWORD_SALT}`, 'utf-8');

const db = sql('example.db');

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       email TEXT NOT NULL UNIQUE,
       password TEXT NOT NULL,
       firstName TEXT NOT NULL,
       lastName TEXT NOT NULL,
       userName TEXT NOT NULL,
       isLoggedIn NUMBER NOT NULL
    )
`
).run();

async function initData() {
  const EXAMPLE_USER = {
    firstName: 'John',
    lastName: 'Doo',
    userName: 'Cabal',
    email: 'john@doo.com',
    password: await hash('Test123!', { secret: SECRET }),
    isLoggedIn: 0,
  };

  db.prepare(
    `
      INSERT INTO users VALUES (
         null,
         @email,
         @password,
         @firstName,
         @lastName,
         @userName,
         @isLoggedIn
      )
   `
  ).run(EXAMPLE_USER);

  db.close();
}

initData();

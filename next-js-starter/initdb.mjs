import sql from 'better-sqlite3';

const db = sql('example.db');

export const EXAMPLE_USER = {
  firstName: 'John',
  lastName: 'Doo',
  userName: 'Cabal',
  email: 'john@doo.com',
  password: 'Test123!',
  isLoggedIn: 0,
};

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
}

initData();

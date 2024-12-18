import sql from 'better-sqlite3';

const db = sql('meal.db');

export const DUMMY_MEALS = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
  },
  {
    title: 'Spicy Curry',
    slug: 'spicy-curry',
    summary: 'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       summary TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @summary
      )
   `);

  for (const meal of DUMMY_MEALS) {
    stmt.run(meal);
  }
}

initData();

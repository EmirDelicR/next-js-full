import sql from 'better-sqlite3';
import { Meal } from '../types/app.type';

const db = sql('meal.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare<Meal[], Meal>('SELECT * FROM meals').all();
}

export function getMeal(id: string) {
  return db.prepare<string, Meal>('SELECT * FROM meals WHERE id = ?').get(id);
}

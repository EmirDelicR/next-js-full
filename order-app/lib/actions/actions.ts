'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from '../db/db';
import { Meal } from '../types/app.type';

export async function shareMeal(formData: FormData) {
  const meal: Meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    slug: formData.get('slug') as string,
  };

  await saveMeal(meal);

  redirect('/meals');
}

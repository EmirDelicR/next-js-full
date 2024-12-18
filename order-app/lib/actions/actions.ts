'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveMeal } from '../db/db';
import { Meal } from '../types/app.type';
import { DEFAULT_MEAL_STATE } from './constants';

const validateField = (text: string, field: 'Title' | 'Summary' | 'Slug') => {
  return !text || text.trim() === '' ? `${field} must be set!` : null;
};

export async function shareMeal(_previousState: unknown, formData: FormData) {
  let redirectPath: string | null = null;
  const title = formData.get('title') as string;
  const summary = formData.get('summary') as string;
  const slug = formData.get('slug') as string;

  const validationError = {
    title: validateField(title, 'Title'),
    summary: validateField(summary, 'Summary'),
    slug: validateField(slug, 'Slug'),
  };
  const item: Meal = {
    title,
    summary,
    slug,
  };

  if (validationError.title || validationError.summary || validationError.slug) {
    return {
      ...DEFAULT_MEAL_STATE,
      messages: { ...validationError },
      item,
    };
  }

  try {
    await saveMeal(item);
    redirectPath = '/meals';
  } catch (err) {
    return {
      ...DEFAULT_MEAL_STATE,
      message: `Error occurred: ${err}`,
      isError: true,
      item,
    };
  } finally {
    if (redirectPath) {
      revalidatePath('/meals');
      redirect(redirectPath);
    }
  }
}

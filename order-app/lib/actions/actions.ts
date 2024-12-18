'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from '../db/db';
import { Meal } from '../types/app.type';

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
  const meal: Meal = {
    title,
    summary,
    slug,
  };

  if (validationError.title || validationError.summary || validationError.slug) {
    return {
      message: null,
      messages: { ...validationError },
      isError: false,
      meal,
    };
  }

  try {
    await saveMeal(meal);
    redirectPath = '/meals';
  } catch (err) {
    return {
      message: `Error occurred: ${err}`,
      messages: { ...validationError },
      isError: true,
      meal,
    };
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

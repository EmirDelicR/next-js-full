'use client';

import { useActionState } from 'react';
import Form from 'next/form';
import { Alert, Button, Stack, Textarea, TextInput } from '@mantine/core';
import { shareMeal } from '@/lib/actions/actions';

export default function MealForm() {
  const [state, formAction, isPending] = useActionState(shareMeal, null);

  return (
    <Form action={formAction}>
      <Stack gap="md">
        <TextInput
          name="title"
          withAsterisk
          label="Title"
          placeholder="Meal title"
          defaultValue={state?.meal?.title || ''}
          error={state?.messages?.title}
        />
        <TextInput
          withAsterisk
          label="Slug"
          placeholder="Slug"
          name="slug"
          description="Add specific slug to meal for easy recognition."
          defaultValue={state?.meal?.slug || ''}
          error={state?.messages?.slug}
        />
        <Textarea
          withAsterisk
          label="Summary"
          name="summary"
          description="Add summary about this meal"
          placeholder="Summary"
          defaultValue={state?.meal?.summary || ''}
          error={state?.messages?.summary}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Add meal'}
        </Button>
        {state?.isError && <Alert color="red">{state.message}</Alert>}
      </Stack>
    </Form>
  );
}

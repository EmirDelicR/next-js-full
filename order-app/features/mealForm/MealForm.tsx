'use client';

import { useActionState } from 'react';
import Form from 'next/form';
import { Alert, Button, Stack, Textarea, TextInput } from '@mantine/core';
import { shareMeal } from '@/lib/actions/actions';
import { DEFAULT_MEAL_STATE } from '@/lib/actions/constants';

export default function MealForm() {
  const [state, formAction, isPending] = useActionState(shareMeal, DEFAULT_MEAL_STATE);

  return (
    <Form action={formAction}>
      <Stack gap="md">
        <TextInput
          name="title"
          withAsterisk
          label="Title"
          placeholder="Meal title"
          defaultValue={state?.item?.title}
          error={state?.messages?.title}
        />
        <TextInput
          withAsterisk
          label="Slug"
          placeholder="Slug"
          name="slug"
          description="Add specific slug to meal for easy recognition."
          defaultValue={state?.item?.slug}
          error={state?.messages?.slug}
        />
        <Textarea
          withAsterisk
          label="Summary"
          name="summary"
          description="Add summary about this meal"
          placeholder="Summary"
          defaultValue={state?.item?.summary}
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

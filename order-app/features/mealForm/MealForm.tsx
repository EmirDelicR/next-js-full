import Form from 'next/form';
import { Button, Stack, Textarea, TextInput } from '@mantine/core';
import { shareMeal } from '@/lib/actions/actions';

export default function MealForm() {
  return (
    <Form action={shareMeal} default>
      <Stack gap="md">
        <TextInput name="title" withAsterisk label="Title" placeholder="Meal title" />
        <TextInput
          withAsterisk
          label="Slug"
          placeholder="Slug"
          name="slug"
          description="Add specific slug to meal for easy recognition."
        />
        <Textarea
          withAsterisk
          label="Summary"
          name="summary"
          description="Add summary about this meal"
          placeholder="Summary"
        />
        <Button type="submit">Add meal</Button>
      </Stack>
    </Form>
  );
}

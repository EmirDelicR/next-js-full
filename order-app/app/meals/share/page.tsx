import Link from 'next/link';
import { Button, Paper, Stack, Title } from '@mantine/core';
import MealForm from '@/features/mealForm/MealForm';

export default function SharePage() {
  return (
    <Paper>
      <Stack my="lg" align="center">
        <Title>Share page</Title>
        <Link href="/meals">
          <Button>Go back</Button>
        </Link>
        <MealForm />
      </Stack>
    </Paper>
  );
}

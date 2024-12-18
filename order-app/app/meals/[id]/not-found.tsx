import Link from 'next/link';
import { Button, Stack, Title } from '@mantine/core';

export default function MealNotFoundPage() {
  return (
    <Stack align="center">
      <Title>Meal not found!</Title>
      <Link href="/meals">
        <Button variant="filled">Go to meals page</Button>
      </Link>
    </Stack>
  );
}

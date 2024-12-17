import Link from 'next/link';
import { Button, Paper, Stack, Title } from '@mantine/core';

export default function MealsPage() {
  return (
    <Paper>
      <Stack my="lg" align="center">
        <Title>Meals page</Title>
        <Link href="/">
          <Button>Home page</Button>
        </Link>
        <Link href="/meals/share">
          <Button>Share page</Button>
        </Link>
        <Link href="/meals/item-1">
          <Button>Item 1</Button>
        </Link>
        <Link href="/meals/item-2">
          <Button>Item 2</Button>
        </Link>
      </Stack>
    </Paper>
  );
}

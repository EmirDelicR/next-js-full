import Link from 'next/link';
import { Button, Paper, Stack, Title } from '@mantine/core';

export default function SharePage() {
  return (
    <Paper>
      <Stack my="lg" align="center">
        <Title>Share page</Title>
        <Link href="/">
          <Button>Home page</Button>
        </Link>
        <Link href="/meals">
          <Button>Meals page</Button>
        </Link>
      </Stack>
    </Paper>
  );
}

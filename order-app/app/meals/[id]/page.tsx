import Link from 'next/link';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { Button, Paper, Stack, Text, Title } from '@mantine/core';

type Props = {
  params: { id: string };
  searchParams: ReadonlyURLSearchParams;
};

export default async function SharePage({ params }: Props) {
  const { id } = await params;

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
        <Text>{id}</Text>
      </Stack>
    </Paper>
  );
}

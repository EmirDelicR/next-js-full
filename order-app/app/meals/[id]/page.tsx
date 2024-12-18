import Link from 'next/link';
import { notFound, ReadonlyURLSearchParams } from 'next/navigation';
import { Button, Paper, Stack, Text, Title } from '@mantine/core';
import { getMeal } from '@/lib/db/db';

type Props = {
  params: { id: string };
  searchParams: ReadonlyURLSearchParams;
};

export default async function SharePage({ params }: Props) {
  const { id } = await params;
  const meal = getMeal(id);

  if (!meal) {
    notFound();
  }

  return (
    <Paper withBorder p="lg" m="lg">
      <Stack my="lg" align="center">
        <Title>Meal detail page</Title>
        <Title order={3}>{meal?.title}</Title>
        <Text>{meal?.summary}</Text>
        <Text>{meal?.slug}</Text>
        <Link href="/meals">
          <Button>Go back</Button>
        </Link>
      </Stack>
    </Paper>
  );
}

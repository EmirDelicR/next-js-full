import { Suspense } from 'react';
import Link from 'next/link';
import { Button, Card, Grid, GridCol, Loader, Paper, Stack, Text, Title } from '@mantine/core';
import { getMeals } from '@/lib/db/db';

async function Meals() {
  const meals = await getMeals();

  return (
    <Grid>
      {meals?.map((item) => (
        <GridCol span={4} key={item.slug}>
          <Card>
            <Title>{item.title}</Title>
            <Text>{item.summary}</Text>
            <Link href={`/meals/${item.id}`}>
              <Button>Details</Button>
            </Link>
          </Card>
        </GridCol>
      ))}
    </Grid>
  );
}

export default function MealsPage() {
  return (
    <Paper p="lg">
      <Stack my="lg" align="center">
        <Title>Meals page</Title>
        <Link href="/meals/share">
          <Button>Go to share page</Button>
        </Link>
        <Suspense fallback={<Loader type="dots" />}>
          <Meals />
        </Suspense>
      </Stack>
    </Paper>
  );
}

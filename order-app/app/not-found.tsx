import Link from 'next/link';
import { Button, Stack, Text, Title } from '@mantine/core';

export default function RootNOtFOuntPage() {
  return (
    <Stack align="center">
      <Title>404 Page not found!</Title>
      <Text>Something went wrong. Please go to home page.</Text>
      <Link href="/">
        <Button variant="filled">Go to home page</Button>
      </Link>
    </Stack>
  );
}

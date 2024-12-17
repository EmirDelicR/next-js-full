import Link from 'next/link';
import { Button, Paper, Stack, Title } from '@mantine/core';

export default function CommunityPage() {
  return (
    <Paper>
      <Stack my="lg" align="center">
        <Title>Community Page</Title>
        <Link href="/">
          <Button>Home page</Button>
        </Link>
      </Stack>
    </Paper>
  );
}

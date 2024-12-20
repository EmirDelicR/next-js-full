'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Group, Stack, Text } from '@mantine/core';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Stack align="center" mt="xl">
      <Image src="/error.png" alt="Not found image" width={600} height={500} />
      <a
        target="blank"
        href="https://www.freepik.com/free-vector/computer-troubleshooting-concept-illustration_20064239.htm?sign-up=google#fromView=keyword&page=1&position=26&uuid=827cc373-041c-41ac-ae3a-f39cffdcfdfc&new_detail=true"
      >
        <Button variant="subtle">Image by storyset on Freepik</Button>
      </a>

      <Text>{error?.message ?? 'Unknown error occurred!'}</Text>
      <Group>
        <Button variant="light" onClick={reset}>
          Try again
        </Button>
        <Link href="/">
          <Button variant="filled">Go to home page</Button>
        </Link>
      </Group>
    </Stack>
  );
}

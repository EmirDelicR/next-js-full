import Image from 'next/image';
import Link from 'next/link';
import { Button, Stack, Text } from '@mantine/core';

export default function RootNotFountPage() {
  return (
    <Stack align="center" mt="xl">
      <Image src="/404.png" alt="Not found image" width={600} height={500} />
      <a
        target="blank"
        href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#fromView=keyword&page=1&position=46&uuid=827cc373-041c-41ac-ae3a-f39cffdcfdfc&new_detail=true"
      >
        <Button variant="subtle">Image by storyset on Freepik</Button>
      </a>
      <Text>Page that you requested is not implemented.</Text>
      <Link href="/">
        <Button variant="filled">Go to home page</Button>
      </Link>
    </Stack>
  );
}

import Link from 'next/link';
import { Button, Flex } from '@mantine/core';

export default function Header() {
  return (
    <Flex p="md" justify="flex-end">
      <Link href="/">
        <Button variant="subtle">Home</Button>
      </Link>
      <Link href="/meals">
        <Button variant="subtle">Meals</Button>
      </Link>
      <Link href="/community">
        <Button variant="subtle">Community</Button>
      </Link>
    </Flex>
  );
}

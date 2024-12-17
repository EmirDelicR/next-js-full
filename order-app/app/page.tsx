import Link from 'next/link';
import { Button, Center, Flex } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/colorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Center>
        <Flex my="md" align="center" gap="md">
          <Link href="/meals">
            <Button variant="gradient">Meals Page</Button>
          </Link>
          <Link href="/community">
            <Button variant="gradient">Community Page</Button>
          </Link>
        </Flex>
      </Center>
    </>
  );
}

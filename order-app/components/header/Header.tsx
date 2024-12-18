import Image from 'next/image';
import { Flex, Group } from '@mantine/core';
import logo from '@/public/logo.png';
import NavLink from '../link/NavLink';

export default function Header() {
  return (
    <Flex p="md" justify="space-between">
      <Image src={logo} alt="logo" width="50" height="50" />
      <Group>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/meals">Meals</NavLink>
        <NavLink href="/community">Community</NavLink>
      </Group>
    </Flex>
  );
}

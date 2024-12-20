import React from 'react';
import { Divider, Flex, Group } from '@mantine/core';
import Logo from '@/components/logo/Logo';
import MobileNav from '@/components/nav/MobileNav';
import Nav from '@/components/nav/Nav';
import ThemeToggle from '../themeToggle/ThemeToggle';

export default function Header() {
  return (
    <header>
      <Group justify="space-between" px="md" h={60}>
        <Flex align="center" gap="lg">
          <MobileNav />
          <Logo />
        </Flex>
        <Flex>
          <Nav />
          <ThemeToggle />
        </Flex>
      </Group>
      <Divider />
    </header>
  );
}

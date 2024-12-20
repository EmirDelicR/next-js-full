import React from 'react';
import { Divider, Group } from '@mantine/core';
import Logo from '@/components/logo/Logo';
import UserMenu from '@/components/menu/UserMenu';
import MobileNav from '@/components/nav/MobileNav';
import Nav from '@/components/nav/Nav';
import ThemeToggle from '@/components/themeToggle/ThemeToggle';

export default function Header() {
  return (
    <header>
      <Group justify="space-between" px="md" h={60}>
        <Group align="center">
          <MobileNav />
          <Logo />
        </Group>
        <Group>
          <Nav />
          <ThemeToggle />
          <UserMenu />
        </Group>
      </Group>
      <Divider />
    </header>
  );
}

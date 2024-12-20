'use client';

import { Box, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavLink from '@/components/link/NavLink';
import Logo from '@/components/logo/Logo';
import { NAV_ITEMS } from './navItems';

export default function MobileNav() {
  const [opened, { toggle, close }] = useDisclosure();
  return (
    <Box display={{ md: 'none' }}>
      <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      <Drawer opened={opened} onClose={close} title={<Logo />} size="xs" position="left">
        <Stack>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              href={item.link}
              fullWidth
              justify="left"
              icon={<item.icon size={16} />}
            >
              {item.label}
            </NavLink>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}

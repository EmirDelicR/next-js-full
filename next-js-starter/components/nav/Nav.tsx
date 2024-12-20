import React from 'react';
import { Group } from '@mantine/core';
import NavLink from '@/components/link/NavLink';
import { NAV_ITEMS } from './navItems';

export default function Nav() {
  return (
    <Group visibleFrom="md">
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.label} href={item.link} icon={<item.icon size={14} />}>
          {item.label}
        </NavLink>
      ))}
    </Group>
  );
}

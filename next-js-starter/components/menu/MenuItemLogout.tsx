'use client';

import { IconLogout } from '@tabler/icons-react';
import { MenuItem, MenuItemProps, rem } from '@mantine/core';
import { logout } from '@/actions/user/auth';

export default function MenuItemLogout(props: MenuItemProps) {
  return (
    <MenuItem
      variant="subtle"
      color="red"
      leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
      onClick={logout}
      {...props}
    >
      Logout
    </MenuItem>
  );
}

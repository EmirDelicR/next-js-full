import Link from 'next/link';
import { IconBriefcase2, IconLogin, IconSettings, IconUser } from '@tabler/icons-react';
import {
  ActionIcon,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  rem,
} from '@mantine/core';
import { verifySession } from '@/lib/sessions/sessions';
import Logout from '../link/Logout';

export default async function UserMenu() {
  return (
    <Menu
      shadow="md"
      width={200}
      position="bottom-end"
      offset={20}
      withArrow
      arrowPosition="center"
    >
      <MenuTarget>
        <ActionIcon size={34} variant="light" radius="xl" aria-label="User-menu">
          <IconUser style={{ width: '70%', height: '70%' }} stroke={2.5} />
        </ActionIcon>
      </MenuTarget>

      <MenuDropdown>
        <MenuLabel>Application</MenuLabel>
        <UserMenuItems />
      </MenuDropdown>
    </Menu>
  );
}

async function UserMenuItems() {
  const session = await verifySession();

  if (session?.isAuth) {
    return (
      <>
        <MenuItem leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </MenuItem>
        <MenuItem
          component={Link}
          href="/work"
          leftSection={<IconBriefcase2 style={{ width: rem(14), height: rem(14) }} />}
        >
          Work
        </MenuItem>
        <MenuDivider />

        <Logout />
      </>
    );
  }

  return (
    <MenuItem
      component={Link}
      href="/auth"
      leftSection={<IconLogin style={{ width: rem(14), height: rem(14) }} />}
    >
      Login
    </MenuItem>
  );
}

import Link from 'next/link';
import { IconUser } from '@tabler/icons-react';
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
import MenuItemLogout from './MenuItemLogout';
import { MENU_ITEMS } from './menuItems';

export default async function UserMenu() {
  return (
    <Menu
      shadow="md"
      width={200}
      position="bottom-end"
      offset={20}
      withArrow
      arrowPosition="center"
      closeOnItemClick
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
  const items = session?.isAuth ? MENU_ITEMS.loggedIn : MENU_ITEMS.default;

  return (
    <>
      {items.map((item) => (
        <MenuItem
          component={Link}
          href={item.link}
          leftSection={<item.icon style={{ width: rem(14), height: rem(14) }} />}
        >
          {item.label}
        </MenuItem>
      ))}
      <MenuDivider display={session.isAuth ? 'block' : 'none'} />
      <MenuItemLogout display={session.isAuth ? 'flex' : 'none'} />
    </>
  );
}

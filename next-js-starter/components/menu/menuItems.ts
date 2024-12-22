import { IconBriefcase2, IconLogin, IconSettings } from '@tabler/icons-react';

export const MENU_ITEMS = {
  loggedIn: [
    { label: 'Settings', link: '/settings', icon: IconSettings },
    { label: 'Work', link: '/work', icon: IconBriefcase2 },
  ],
  default: [{ label: 'Login', link: '/auth', icon: IconLogin }],
};

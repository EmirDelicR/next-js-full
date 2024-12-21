import { IconLogout } from '@tabler/icons-react';
import { Button, rem } from '@mantine/core';
import { logout } from '@/actions/user/auth';

export default function Logout() {
  return (
    <Button
      variant="subtle"
      color="red"
      leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
      onClick={logout}
      fullWidth
      justify="left"
    >
      Logout
    </Button>
  );
}

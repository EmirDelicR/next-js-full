import { IconLogin, IconUser } from '@tabler/icons-react';
import { Tabs, TabsList, TabsPanel, TabsTab } from '@mantine/core';
import Login from '@/features/auth/login/LoginForm';
import Register from '@/features/auth/register/RegisterForm';

export default function AuthPage() {
  return (
    <Tabs variant="outline" defaultValue="login" keepMounted={false} mt="xl">
      <TabsList grow justify="center">
        <TabsTab value="login" leftSection={<IconLogin style={{ stroke: 'orange' }} />}>
          Login
        </TabsTab>
        <TabsTab value="register" leftSection={<IconUser style={{ stroke: 'orange' }} />}>
          Register
        </TabsTab>
      </TabsList>

      <TabsPanel value="login" pt="xs">
        <Login />
      </TabsPanel>
      <TabsPanel value="register" pt="xs">
        <Register />
      </TabsPanel>
    </Tabs>
  );
}

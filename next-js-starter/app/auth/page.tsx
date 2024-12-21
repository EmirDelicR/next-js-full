import { IconLogin, IconUser } from '@tabler/icons-react';
import { Container, Tabs, TabsList, TabsPanel, TabsTab, Title } from '@mantine/core';
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
        <Container size={500} my={40}>
          <Title ta="center">Welcome back</Title>
          <Login />
        </Container>
      </TabsPanel>
      <TabsPanel value="register" pt="xs">
        <Container size={500} my={40}>
          <Title ta="center">Welcome aboard</Title>
          <Register />
        </Container>
      </TabsPanel>
    </Tabs>
  );
}

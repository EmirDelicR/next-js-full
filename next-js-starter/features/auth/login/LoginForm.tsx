'use client';

import {
  Button,
  Container,
  LoadingOverlay,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import Error from '@/components/error/Error';

// interface FormFields {
//   email: string;
//   password: string;
// }

// const INITIAL_FORM_VALUES: FormFields = {
//   email: '',
//   password: '',
// };

export default function Login() {
  return (
    <Container size={500} my={40}>
      <Title ta="center">Welcome back</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" pos="relative">
        <LoadingOverlay
          data-testid="login-loading-overlay"
          visible={false}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'var(--mantine-color-blue-6)', type: 'bars' }}
        />
        <form onSubmit={() => console.log('login!')}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            data-testid="login-email"
            withAsterisk
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            data-testid="login-password"
            withAsterisk
            mt="md"
          />
          <Button type="submit" fullWidth my="xl" data-testid="login-submit">
            Login
          </Button>
        </form>
        <Error isError={false} />
      </Paper>
    </Container>
  );
}

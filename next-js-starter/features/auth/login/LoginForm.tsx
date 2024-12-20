'use client';

import { useActionState } from 'react';
import Form from 'next/form';
import {
  Button,
  Container,
  LoadingOverlay,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import { login } from '@/actions/user/auth';
import Error from '@/components/error/Error';
import { LoginFormState } from '@/lib/definitions/auth';

export const DEFAULT_LOGIN_STATE: LoginFormState = {
  isError: false,
  data: {
    email: '',
    password: '',
  },
};

export default function Login() {
  const [state, action, pending] = useActionState(login, DEFAULT_LOGIN_STATE);

  return (
    <Container size={500} my={40}>
      <Title ta="center">Welcome back</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" pos="relative">
        <LoadingOverlay
          data-testid="login-loading-overlay"
          visible={pending}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'var(--mantine-color-blue-6)', type: 'bars' }}
        />
        <Form action={action}>
          <TextInput
            name="email"
            label="Email"
            placeholder="your@email.com"
            data-testid="login-email"
            withAsterisk
            error={state?.errors?.email}
            defaultValue={state?.data?.email}
          />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Your password"
            data-testid="login-password"
            withAsterisk
            mt="md"
            error={state?.errors?.password}
            defaultValue={state?.data?.password}
          />
          <Button disabled={pending} type="submit" fullWidth my="xl" data-testid="login-submit">
            Login
          </Button>
        </Form>
        <Error isError={state?.isError} errorMessage={state?.message} />
      </Paper>
    </Container>
  );
}

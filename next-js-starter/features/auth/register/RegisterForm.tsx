'use client';

import { useActionState } from 'react';
import {
  Box,
  Button,
  Container,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import { register } from '@/actions/user/auth';
import Error from '@/components/error/Error';
import HelpPopover from '@/components/popover/HelpPopover';
import { RegisterFormState } from '../../../lib/definitions/auth/definitions';

export const DEFAULT_REGISTER_STATE: RegisterFormState = {
  message: '',
  isError: false,
  data: {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  },
};

export default function Register() {
  const [state, action, pending] = useActionState(register, DEFAULT_REGISTER_STATE);

  return (
    <Container size={500} my={40}>
      <Title ta="center">Welcome aboard</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" pos="relative">
        <LoadingOverlay
          data-testid="register-loading-overlay"
          visible={pending}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'var(--mantine-color-blue-6)', type: 'bars' }}
        />
        <form action={action}>
          <TextInput
            label="Name"
            placeholder="Your first name"
            data-testid="register-first-name"
            withAsterisk
            mb="md"
            error={state?.errors?.firstName}
          />
          <TextInput
            label="Surname"
            placeholder="Your last name"
            data-testid="register-last-name"
            withAsterisk
            mb="md"
            error={state?.errors?.lastName}
          />
          <TextInput
            label="Username"
            placeholder="Your user name"
            data-testid="register-user-name"
            mb="md"
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            data-testid="register-email"
            withAsterisk
            mb="md"
            error={state?.errors?.email}
          />
          <Group justify="space-between" gap="sm" align="center">
            <Box flex={1} mih="85px">
              <PasswordInput
                label="Password"
                placeholder="Your password"
                data-testid="register-password"
                withAsterisk
                error={state?.errors?.password}
              />
            </Box>
            <HelpPopover hintText="Password must contain minimum 8 characters,at least one letter, number and special character." />
          </Group>
          <Button disabled={pending} type="submit" fullWidth mt="my" data-testid="register-submit">
            Register
          </Button>
        </form>
        <Error isError={false} errorMessage={state?.message} />
      </Paper>
    </Container>
  );
}

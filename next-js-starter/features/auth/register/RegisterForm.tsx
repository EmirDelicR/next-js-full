'use client';

import { useActionState } from 'react';
import Form from 'next/form';
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
import { RegisterFormState } from '../../../lib/definitions/auth';

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
        <Form action={action}>
          <TextInput
            name="firstName"
            label="Name"
            placeholder="Your first name"
            data-testid="register-first-name"
            withAsterisk
            mb="md"
            error={state?.errors?.firstName}
            defaultValue={state?.data?.firstName}
          />
          <TextInput
            name="lastName"
            label="Surname"
            placeholder="Your last name"
            data-testid="register-last-name"
            withAsterisk
            mb="md"
            error={state?.errors?.lastName}
            defaultValue={state?.data?.lastName}
          />
          <TextInput
            name="userName"
            label="Username"
            placeholder="Your user name"
            data-testid="register-user-name"
            mb="md"
            defaultValue={state?.data?.userName}
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="your@email.com"
            data-testid="register-email"
            withAsterisk
            mb="md"
            error={state?.errors?.email}
            defaultValue={state?.data?.email}
          />
          <Group justify="space-between" gap="sm" align="center">
            <Box flex={1} mih="85px">
              <PasswordInput
                name="password"
                label="Password"
                placeholder="Your password"
                data-testid="register-password"
                withAsterisk
                error={state?.errors?.password}
                defaultValue={state?.data?.password}
              />
            </Box>
            <HelpPopover hintText="Password must contain minimum 8 characters,at least one letter, number and special character." />
          </Group>
          <Button disabled={pending} type="submit" fullWidth mt="my" data-testid="register-submit">
            Register
          </Button>
        </Form>
        <Error isError={false} errorMessage={state?.message} />
      </Paper>
    </Container>
  );
}

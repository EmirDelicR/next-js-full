'use client';

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
import Error from '@/components/error/Error';
import HelpPopover from '@/components/popover/HelpPopover';

// interface FormFields {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   userName?: string;
// }

// const INITIAL_FORM_VALUES: FormFields = {
//   firstName: '',
//   lastName: '',
//   userName: '',
//   email: '',
//   password: '',
// };

export default function Register() {
  return (
    <Container size={500} my={40}>
      <Title ta="center">Welcome aboard</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" pos="relative">
        <LoadingOverlay
          data-testid="register-loading-overlay"
          visible={false}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'var(--mantine-color-blue-6)', type: 'bars' }}
        />
        <form onSubmit={() => console.log('Register!')}>
          <TextInput
            label="Name"
            placeholder="Your first name"
            data-testid="register-first-name"
            withAsterisk
            mb="md"
          />
          <TextInput
            label="Surname"
            placeholder="Your last name"
            data-testid="register-last-name"
            withAsterisk
            mb="md"
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
          />
          <Group justify="space-between" gap="sm" align="center">
            <Box flex={1} mih="85px">
              <PasswordInput
                label="Password"
                placeholder="Your password"
                data-testid="register-password"
                withAsterisk
              />
            </Box>
            <HelpPopover hintText="Password must contain minimum 8 characters,one number and one of this special signs !#$%&()*+,-/:;<=>?" />
          </Group>
          <Button type="submit" fullWidth mt="my" data-testid="register-submit">
            Register
          </Button>
        </form>
        <Error isError={false} />
      </Paper>
    </Container>
  );
}

'use client';

import { IconInfoCircle } from '@tabler/icons-react';
import { Alert, Center, Text } from '@mantine/core';

export default function MealsErrorPage({ error }: { error: Error & { digest?: string } }) {
  return (
    <Center>
      <Alert
        w="50vw"
        variant="light"
        color="red"
        title={error?.name || 'Unknown error occurred.'}
        icon={<IconInfoCircle />}
      >
        <Text>{error?.message}</Text>
      </Alert>
    </Center>
  );
}

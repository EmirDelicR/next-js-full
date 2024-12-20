import { IconAlertTriangle } from '@tabler/icons-react';
import { Alert } from '@mantine/core';

interface Props {
  isError: boolean;
  errorMessage?: string;
}

export default function Error({ isError, errorMessage }: Props) {
  if (!isError) {
    return null;
  }

  return (
    <Alert
      variant="light"
      color="red"
      title="Error occurred"
      icon={<IconAlertTriangle />}
      data-testid="error-log-message"
    >
      {errorMessage ?? 'Unknown Error occurred!'}
    </Alert>
  );
}

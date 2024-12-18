import { Center, LoadingOverlay, Text } from '@mantine/core';

export default function RootLoadingPage() {
  return (
    <Center pos="relative" mih="80vh">
      <LoadingOverlay
        visible
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 1 }}
        loaderProps={{ color: 'pink', type: 'bars' }}
      />
      <Text>Loading data...</Text>
    </Center>
  );
}

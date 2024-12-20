'use client';

import { ReactNode } from 'react';
import { IconHelpCircle } from '@tabler/icons-react';
import { Button, Popover, PopoverDropdown, PopoverTarget, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface Props {
  buttonText?: string | ReactNode;
  hintText: string;
}

export default function HelpPopover({ hintText, buttonText = <IconHelpCircle /> }: Props) {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Popover width={250} position="bottom" withArrow shadow="md" opened={opened}>
      <PopoverTarget>
        <Button px="xs" onMouseEnter={open} onMouseLeave={close} variant="light">
          {buttonText}
        </Button>
      </PopoverTarget>
      <PopoverDropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">{hintText}</Text>
      </PopoverDropdown>
    </Popover>
  );
}

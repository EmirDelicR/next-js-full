'use client';

import { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, ButtonProps } from '@mantine/core';

interface Props extends PropsWithChildren<ButtonProps> {
  href: string;
  icon: ReactNode;
}

export default function NavLink({ href, children, icon, ...props }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Button variant={isActive(href) ? 'light' : 'subtle'} leftSection={icon} {...props}>
        {children}
      </Button>
    </Link>
  );
}

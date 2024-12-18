'use client';

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@mantine/core';

interface Props extends PropsWithChildren {
  href: string;
}

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <Link href={href}>
      <Button variant={isActive(href) ? 'light' : 'subtle'}>{children}</Button>
    </Link>
  );
}

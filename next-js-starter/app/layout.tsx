import '@mantine/core/styles.css';

import React, { ReactNode } from 'react';
import { ColorSchemeScript, Container, mantineHtmlProps, MantineProvider } from '@mantine/core';
import Header from '@/components/header/Header';
import { theme } from '@/theme';

export const metadata = {
  title: 'Next.js template with Mantine',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Container maw="1600px">
            <Header />
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}

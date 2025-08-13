'use client'

import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <ThemeProvider theme={themes}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

'use client'

import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { GlobalStyles } from '../styles/GlobalStyles';
import { MyListProvider } from '@/context/MyListContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <MyListProvider themes={themes}>
          <GlobalStyles />
          {children}
        </MyListProvider>
      </body>
    </html>
  );
}

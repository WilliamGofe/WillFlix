'use client';

import { themes } from '../styles/themes';
import { GlobalStyles } from '../styles/GlobalStyles';
import { MyListProvider } from '../context/MyListContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MyListProvider themes={themes}>
      <GlobalStyles />
      {children}
    </MyListProvider>
  );
}
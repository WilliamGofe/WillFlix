import React from 'react';
import { ClientProviders } from '../providers/ClientProviders';
import StyledComponentsRegistry from '../lib/registry';
import { SearchProvider } from '@/context/SearchContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ClientProviders>
            <SearchProvider>
              {children}
            </SearchProvider>
          </ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import React from 'react';
import { ClientProviders } from '../providers/ClientProviders';
import StyledComponentsRegistry from '../lib/registry';

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
            {children}
          </ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

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
      <head />
      <body>
        <ClientProviders>
          <StyledComponentsRegistry>
             {children}         
          </StyledComponentsRegistry>
        </ClientProviders>
      </body>
    </html>
  );
}

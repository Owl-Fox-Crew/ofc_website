import { ReactNode } from 'react';
import IntlWrapper from '@/components/intlwrapper';
import './globals.css'; // Asegurar que esto esté

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-white bg-black overflow-x-hidden">
        <IntlWrapper>{children}</IntlWrapper>
      </body>
    </html>
  );
}

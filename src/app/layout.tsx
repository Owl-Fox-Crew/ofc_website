import { ReactNode } from 'react';
import IntlWrapper from '@/components/IntlWrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <IntlWrapper>{children}</IntlWrapper>
      </body>
    </html>
  );
}

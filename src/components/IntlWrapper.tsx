'use client';

import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { usePathname } from 'next/navigation';

import enMessages from '@/locales/en/index.json';
import esMessages from '@/locales/es/index.json';

const messages: Record<'en' | 'es', typeof enMessages> = {
  en: enMessages,
  es: esMessages,
};

const defaultLocale: 'en' | 'es' = 'en';

function getLocaleFromPath(pathname: string): 'en' | 'es' {
  const locale = pathname.split('/')[1];
  return locale === 'es' ? 'es' : 'en';
}

type Props = {
  children: ReactNode;
};

export default function IntlWrapper({ children }: Props) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const localeMessages = messages[locale];

  return (
    <IntlProvider locale={locale} messages={localeMessages}>
      {children}
    </IntlProvider>
  );
}

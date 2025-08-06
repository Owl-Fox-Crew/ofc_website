import en from '@/locales/en/index.json';
import es from '@/locales/es/index.json';

export const messages = {
  en,
  es,
};

export const defaultLocale = 'en';

export const getLocaleFromPath = (pathname: string): keyof typeof messages => {
  const segments = pathname.split('/');
  const locale = segments[1];
  return Object.keys(messages).includes(locale) ? (locale as keyof typeof messages) : defaultLocale;
};

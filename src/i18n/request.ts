import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(({ locale }) => ({
  locale: locale ?? 'en',
  messages: (async () =>
    (await import(`../messages/${locale ?? 'en'}/Hero.json`)).default)(),
}));

// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(({ locale }) => ({
  locale,
  messages: (async () =>
    (await import(`../messages/${locale}/Hero.json`)).default)(),
}));

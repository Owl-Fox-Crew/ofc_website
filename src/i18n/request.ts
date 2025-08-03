import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const fallbackLocale = 'en';
  const safeLocale = locale ?? fallbackLocale;

  const messages = await import(`../messages/${safeLocale}/Hero.json`);
  return {
    locale: safeLocale,
    messages: messages.default.Hero
  };
});

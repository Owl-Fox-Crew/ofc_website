import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const fallbackLocale = 'en';
  const safeLocale = locale ?? fallbackLocale;

  const messagesFile = await import(`../messages/${safeLocale}/Hero.json`);
  const messages = messagesFile.default;

  return {
    locale: safeLocale,
    messages
  };
});

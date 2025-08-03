import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = await import(`../messages/${locale}/Hero.json`);
  return {
    locale,
    messages: messages.default.Hero
  };
});

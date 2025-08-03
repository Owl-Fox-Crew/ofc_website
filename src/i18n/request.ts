import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(({ locale }) => {
  const safeLocale = locale ?? 'en';

  let messages;
  switch (safeLocale) {
    case 'es':
      messages = require('../messages/es/Hero.json');
      break;
    case 'en':
      messages = require('../messages/en/Hero.json');
      break;
    default:
      messages = require('../messages/en/Hero.json');
      break;
  }

  return {
    locale: safeLocale,
    messages,
  };
});

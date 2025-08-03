import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(({ locale }) => {
  const safeLocale = locale ?? 'en';

  let heroMessages;
  switch (safeLocale) {
    case 'es':
      heroMessages = require('../messages/es/Hero.json');
      break;
    case 'en':
      heroMessages = require('../messages/en/Hero.json');
      break;
    default:
      heroMessages = require('../messages/en/Hero.json');
      break;
  }

  return {
    locale: safeLocale,
    messages: {
      Hero: heroMessages
    }
  };
});

'use client';

import { useIntl } from 'react-intl';

export default function Hero() {
  const intl = useIntl();

  return (
    <section>
      <h1>{intl.formatMessage({ id: 'hero.title1' })}</h1>
      <h2>{intl.formatMessage({ id: 'hero.title2' })}</h2>
      <p>{intl.formatMessage({ id: 'hero.subtitle1' })}</p>
      <p>{intl.formatMessage({ id: 'hero.subtitle2' })}</p>
      <p>{intl.formatMessage({ id: 'hero.tagline' })}</p>
      <button>{intl.formatMessage({ id: 'hero.cta1' })}</button>
      <button>{intl.formatMessage({ id: 'hero.cta2' })}</button>
      <p>{intl.formatMessage({ id: 'hero.muteAudio' })}</p>
      <p>{intl.formatMessage({ id: 'hero.enableAudio' })}</p>
    </section>
  );
}

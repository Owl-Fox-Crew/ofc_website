'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { trackEvent } from '@/lib/analytics';
import Hero from '@/components/home/Hero';
import ClientBenefits from '@/components/home/ClientBenefits';
import ClientEaseForYou from '@/components/home/ClientEaseForYou';
import ClientCases from '@/components/home/ClientCases';

export default function Home() {
  const t = useTranslations('Hero');
  const tB = useTranslations('Benefits');

  useEffect(() => {
    trackEvent('PageView_Home');
  }, []);

  return (
    <>
      <Hero
        title1={t('title1')}
        title2={t('title2')}
        subtitle1={t('subtitle1')}
        subtitle2={t('subtitle2')}
        tagline={t('tagline')}
        cta1={t('cta1')}
        cta2={t('cta2')}
        muteAudio={t('muteAudio')}
        enableAudio={t('enableAudio')}
      />
      <ClientBenefits
        emotional={[tB('emotional')]}
        strategic={[tB('strategic')]}
      />
      <ClientEaseForYou />
      <ClientCases />
    </>
  );
}

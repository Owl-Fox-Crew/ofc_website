'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Cases from './Cases';

export default function ClientCases() {
  const [isMounted, setIsMounted] = useState(false);
  const t = useTranslations('Cases');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const items = [
    {
      title: t('case1.title'),
      slug: t('case1.slug'),
      problem: t('case1.problem'),
      decision: t('case1.decision'),
      videoUrl: t('case1.videoUrl')
    },
    {
      title: t('case2.title'),
      slug: t('case2.slug'),
      problem: t('case2.problem'),
      decision: t('case2.decision'),
      videoUrl: t('case2.videoUrl')
    },
    {
      title: t('case3.title'),
      slug: t('case3.slug'),
      problem: t('case3.problem'),
      decision: t('case3.decision'),
      videoUrl: t('case3.videoUrl')
    }
  ];

  return <Cases items={items} />;
}

'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import EaseForYou from './EaseForYou';

export default function ClientEaseForYou() {
  const [isMounted, setIsMounted] = useState(false);
  const t = useTranslations('EaseForYou');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const items = [
    {
      title: t('item1.title'),
      description: t('item1.description')
    },
    {
      title: t('item2.title'),
      description: t('item2.description')
    },
    {
      title: t('item3.title'),
      description: t('item3.description')
    }
  ];

  return <EaseForYou items={items} />;
}

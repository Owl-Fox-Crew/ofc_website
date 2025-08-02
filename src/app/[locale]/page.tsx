"use client";

import Hero from '../../components/home/Hero';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { Benefits } from '../../components/home/Benefits';
import { EaseForYou } from '../../components/home/EaseForYou';
import { Cases } from '../../components/home/Cases';

export default function Home() {
  useEffect(() => {
    trackEvent('PageView_Home');
  }, []);

  return (
    <>
      <Hero />
      <Benefits
        emotional={["Emotional insight 1", "Emotional insight 2"]}
        strategic={["Strategic value 1", "Strategic value 2"]}
      />
      <EaseForYou
        items={["Ease 1", "Ease 2", "Ease 3"]}
      />
      <Cases />
    </>
  );
}

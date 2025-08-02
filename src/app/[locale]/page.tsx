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
        items={[
          { title: "Ease point 1", description: "Description 1" },
          { title: "Ease point 2", description: "Description 2" },
          { title: "Ease point 3", description: "Description 3" }
        ]}
      />
      <Cases />
    </>
  );
}

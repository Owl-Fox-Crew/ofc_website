import Hero from '@/components/home/Hero';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { Benefits } from '@/components/home/Benefits';
import { EaseForYou } from '@/components/home/EaseForYou';
import { Cases } from '@/components/home/Cases';

export default function Page() {
  useEffect(() => {
    trackEvent('PageView_Home');
  }, []);

  return (
    <>
      <Hero />
      <Benefits />
      <EaseForYou />
      <Cases />
    </>
  );
}

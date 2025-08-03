"use client";

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { useAudio } from '@/hooks/useAudio';
import { Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  tagline: string;
  cta1: string;
  cta2: string;
  muteAudio: string;
  enableAudio: string;
}

export default function Hero({
  title1,
  title2,
  subtitle1,
  subtitle2,
  tagline,
  cta1,
  cta2,
  muteAudio,
  enableAudio,
}: HeroProps) {
  const { locale } = useLocale();
  const t = useTranslations('Hero');
  const { toggleAudio, isAudioEnabled } = useAudio();

  return (
    <section className="w-full min-h-[90vh] px-6 pt-28 pb-20 bg-black text-white flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        {title1} <br /> {title2}
      </h1>
      <p className="text-lg md:text-xl max-w-3xl">
        {subtitle1} <br /> {subtitle2}
      </p>
      <p className="text-md md:text-lg italic text-[#ff7503] font-serif">
        {tagline}
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Link
          href={`/${locale}/about`}
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          {cta1}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          {cta2}
        </Link>
      </div>
      <button
        onClick={toggleAudio}
        className="absolute top-6 right-6 text-white hover:text-orange-500"
        aria-label={isAudioEnabled ? muteAudio : enableAudio}
      >
        {isAudioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </section>
  );
}

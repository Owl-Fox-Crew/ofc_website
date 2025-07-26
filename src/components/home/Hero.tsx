'use client'

import { motion } from 'framer-motion'
import { VideoReel } from '@/components/common/VideoReel'
import { trackEvent } from '@/lib/analytics'

export interface CTA {
  label: string
  href: string
}

export interface HeroProps {
  headline: string
  subheadline?: string
  videoSrc: string
  posterSrc: string
  primaryCta?: CTA
  secondaryCta?: CTA
  microcopy?: string
}

export function Hero({
  headline,
  subheadline,
  videoSrc,
  posterSrc,
  primaryCta,
  secondaryCta,
  microcopy
}: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <VideoReel src={videoSrc} poster={posterSrc} />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-5xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 text-lg md:text-xl opacity-90"
          >
            {subheadline}
          </motion.p>
        )}
        {microcopy && (
          <p className="mt-4 text-sm uppercase tracking-wide opacity-70">{microcopy}</p>
        )}

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href}
              onClick={() => trackEvent('cta_click_primary', { location: 'hero' })}
              className="rounded-2xl px-6 py-3 text-lg transition duration-200 bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white"
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              onClick={() => trackEvent('cta_click_secondary', { location: 'hero' })}
              className="rounded-2xl px-6 py-3 text-lg transition duration-200 border border-white text-white hover:bg-white hover:text-black"
            >
              {secondaryCta.label}
            </a>) }
        </div>
      </div>
    </section>
  )
}

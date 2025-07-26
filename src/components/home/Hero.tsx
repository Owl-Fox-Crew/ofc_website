'use client';

type HeroProps = {
  headline: string;
  subheadline: string;
  videoSrc: string;
  posterSrc: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  microcopy: string;
};

export function Hero({
  headline,
  subheadline,
  videoSrc,
  posterSrc,
  primaryCta,
  secondaryCta,
  microcopy,
}: HeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        poster={posterSrc}
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/40 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{headline}</h1>
        <h2 className="text-xl md:text-2xl mb-6">{subheadline}</h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href={primaryCta.href}
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            {secondaryCta.label}
          </a>
        </div>
        <p className="mt-8 text-sm text-zinc-300 max-w-md">{microcopy}</p>
      </div>
    </section>
  );
}

// src/components/home/Hero.tsx
export function Hero({ headline, subheadline, videoSrc, posterSrc, primaryCta, secondaryCta, microcopy }) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white bg-black/40 backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{headline}</h1>
        {subheadline && <p className="text-lg md:text-2xl mb-6">{subheadline}</p>}
        {microcopy && <p className="text-sm italic mb-6">{microcopy}</p>}
        <div className="flex flex-col md:flex-row gap-4">
          {primaryCta && (
            <a href={primaryCta.href} className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition">
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

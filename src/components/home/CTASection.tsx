// src/components/home/CTASection.tsx
export function CTASection({ headline, primaryCta, secondaryCta }) {
  return (
    <div className="text-center px-6 py-12 bg-zinc-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{headline}</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a href={primaryCta.href} className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition">
          {primaryCta.label}
        </a>
        {secondaryCta && (
          <a href={secondaryCta.href} className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            {secondaryCta.label}
          </a>
        )}
      </div>
    </div>
  );
}

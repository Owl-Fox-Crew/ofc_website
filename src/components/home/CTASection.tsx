'use client';

type CTASectionProps = {
  headline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function CTASection({ headline, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <div className="text-center px-6 py-12 bg-zinc-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{headline}</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href={primaryCta.href}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          {primaryCta.label}
        </a>
        <a
          href={secondaryCta.href}
          className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          {secondaryCta.label}
        </a>
      </div>
    </div>
  );
}

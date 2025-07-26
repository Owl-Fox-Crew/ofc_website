export interface CTASectionProps {
  headline: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTASection({ headline, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">{headline}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <a href={primaryCta.href} className="rounded-2xl px-6 py-3 text-lg transition duration-200 bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white">
          {primaryCta.label}
        </a>
        {secondaryCta && (
          <a href={secondaryCta.href} className="rounded-2xl px-6 py-3 text-lg transition duration-200 border border-white text-white hover:bg-white hover:text-black">
            {secondaryCta.label}
          </a>
        )}
      </div>
    </div>
  )
}

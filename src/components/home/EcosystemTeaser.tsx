export interface EcosystemChip { name: string; href: string }
export interface EcosystemTeaserProps { chips: EcosystemChip[]; copy: string }

export function EcosystemTeaser({ chips, copy }: EcosystemTeaserProps) {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="sr-only">Teaser del ecosistema</h2>
      <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl">{copy}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip, i) => (
          <a key={i} href={chip.href} className="rounded-full bg-zinc-800/60 px-4 py-2 text-sm hover:bg-zinc-700">
            {chip.name}
          </a>
        ))}
      </div>
    </div>
  )
}

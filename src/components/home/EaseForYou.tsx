export interface EaseItem { title: string; description?: string }
export interface EaseForYouProps { items: EaseItem[]; cta?: { label: string; href: string } }

export function EaseForYou({ items, cta }: EaseForYouProps) {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">Cómo lo hacemos fácil para ti</h2>
      <ul className="space-y-4 text-lg opacity-90">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
            <div>
              <strong>{item.title}</strong>
              {item.description && <p className="opacity-70 text-sm">{item.description}</p>}
            </div>
          </li>
        ))}
      </ul>
      {cta && (
        <a href={cta.href} className="inline-block mt-8 rounded-2xl px-6 py-3 text-lg border border-white hover:bg-white hover:text-black transition">
          {cta.label}
        </a>
      )}
    </div>
  )
}

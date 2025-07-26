export interface ManifestoProps { bullets: string[] }

export function Manifesto({ bullets }: ManifestoProps) {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Filosofía / Manifiesto</h2>
      <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside opacity-90">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

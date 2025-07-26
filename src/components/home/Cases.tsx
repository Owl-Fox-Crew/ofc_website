export interface CaseItem {
  slug: string
  title: string
  client?: string
  problem: string
  decision: string
  impact?: { emotional?: string[]; strategic?: string[] }
  videoUrl: string
  stack?: string[]
  nextPhase?: string
}
export interface CasesProps { items: CaseItem[] }

export function Cases({ items }: CasesProps) {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">Casos destacados — De problema a transformación</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <article key={item.slug} className="rounded-2xl bg-zinc-900/40 p-6 border border-zinc-800">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            {item.client && <p className="text-sm opacity-70 mb-2">Cliente: {item.client}</p>}
            <div className="space-y-2 text-sm opacity-90">
              <p><strong>Problema/Objetivo:</strong> {item.problem}</p>
              <p><strong>Decisión clave:</strong> {item.decision}</p>
            </div>
            <div className="my-4">
              <video src={item.videoUrl} className="w-full rounded-xl" controls muted playsInline/>
            </div>
            {item.impact && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Impacto emocional:</strong>
                  <ul className="list-disc list-inside opacity-80">
                    {item.impact.emotional?.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
                <div>
                  <strong>Impacto estratégico:</strong>
                  <ul className="list-disc list-inside opacity-80">
                    {item.impact.strategic?.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>
            )}
            {item.stack && (
              <p className="mt-4 text-xs opacity-50">Stack: {item.stack.join(', ')}</p>
            )}
            {item.nextPhase && (
              <p className="mt-1 text-xs opacity-60">Fase 2: {item.nextPhase}</p>
            )}
          </article>
        ))}
      </div>
      <span className="inline-block mt-6 text-xs uppercase tracking-wider opacity-60">Historias a medida, no plantillas.</span>
    </div>
  )
}

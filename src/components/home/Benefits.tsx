export interface BenefitsProps {
  emotional: string[]
  strategic: string[]
}

export function Benefits({ emotional, strategic }: BenefitsProps) {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Lo que pasa cuando cuentas bien tu historia
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-medium mb-4 opacity-80">Emocionales</h3>
          <ul className="space-y-2 opacity-90 list-disc list-inside">
            {emotional.map((e, i) => (<li key={i}>{e}</li>))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4 opacity-80">Estratégicos</h3>
          <ul className="space-y-2 opacity-90 list-disc list-inside">
            {strategic.map((s, i) => (<li key={i}>{s}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export interface LeadQuizProps {
  questions?: string[]
  resultMap?: { title: string; subtitle?: string }
}

export function LeadQuiz({ questions = [], resultMap }: LeadQuizProps) {
  return (
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <h3 className="text-2xl font-semibold mb-4">Mini‑quiz (4 preguntas)</h3>
      <p className="opacity-80 mb-6">
        Te proponemos el camino más óptimo, sin perder tiempo.
      </p>

      {questions.length === 0 ? (
        <p className="opacity-60">[Lead Quiz: próximamente interactivo]</p>
      ) : (
        <ul className="text-left list-disc list-inside opacity-80 mb-6">
          {questions.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      )}

      {resultMap && (
        <div className="mt-6 opacity-80">
          <strong>{resultMap.title}</strong>
          {resultMap.subtitle && <p className="text-sm">{resultMap.subtitle}</p>}
        </div>
      )}
    </div>
  )
}

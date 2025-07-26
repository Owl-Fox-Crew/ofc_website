export interface ProcessStep { id: number; title: string; description: string; keystone?: string }
export interface ProcessProps { steps: ProcessStep[] }

export function Process({ steps }: ProcessProps) {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">Proceso OFC en 4 pasos</h2>
      <ol className="relative border-l border-zinc-800 space-y-8 pl-6">
        {steps.map(step => (
          <li key={step.id} className="ml-4">
            <div className="absolute w-3 h-3 bg-brand-primary rounded-full -left-[7px] mt-1.5" />
            <h3 className="text-xl font-medium">{step.id}. {step.title}</h3>
            <p className="opacity-80 text-sm mt-1">{step.description}</p>
            {step.keystone && (
              <p className="mt-1 text-xs text-brand-primary">Keystone: {step.keystone}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

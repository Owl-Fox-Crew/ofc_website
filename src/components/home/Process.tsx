// src/components/home/Process.tsx
export function Process({ steps }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proceso OFC en 4 pasos</h2>
      <ol className="space-y-8">
        {steps.map(step => (
          <li key={step.id} className="bg-zinc-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-zinc-300">{step.description}</p>
            {step.keystone && <p className="text-xs mt-2 italic text-zinc-400">Keystone: {step.keystone}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

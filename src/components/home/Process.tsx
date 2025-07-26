// src/components/home/Process.tsx
type ProcessItem = {
  title: string;
  description: string;
};

type ProcessProps = {
  steps: ProcessItem[];
};

export function Process({ steps }: ProcessProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestro proceso</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-zinc-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-zinc-400">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

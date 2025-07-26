// src/components/home/Manifesto.tsx
type ManifestoProps = {
  bullets: string[];
};

export function Manifesto({ bullets }: ManifestoProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Filosofía OFC</h2>
      <ul className="space-y-4 text-left list-disc list-inside text-lg">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-zinc-300">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

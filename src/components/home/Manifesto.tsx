// src/components/home/Manifesto.tsx
export function Manifesto({ bullets }) {
  return (
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Filosofía OFC</h2>
      <ul className="space-y-3">
        {bullets.map((bullet, idx) => <li key={idx} className="text-lg">✔️ {bullet}</li>)}
      </ul>
    </div>
  );
}

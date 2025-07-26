// src/components/home/Cases.tsx
export function Cases({ items }) {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Casos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((c, idx) => (
          <div key={idx} className="bg-zinc-800 rounded-xl overflow-hidden shadow-md">
            <div className="aspect-video">
              <iframe src={c.videoUrl} className="w-full h-full" allow="autoplay; fullscreen"></iframe>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="text-sm text-zinc-300">{c.problem}</p>
              <p className="text-sm italic text-zinc-400">{c.decision}</p>
              {c.impact && (
                <div className="text-sm">
                  <p className="mt-2 font-semibold">Impacto emocional:</p>
                  <ul className="list-disc list-inside">
                    {c.impact.emotional?.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                  <p className="mt-2 font-semibold">Impacto estratégico:</p>
                  <ul className="list-disc list-inside">
                    {c.impact.strategic?.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

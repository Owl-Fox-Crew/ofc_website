// src/components/home/EaseForYou.tsx
export function EaseForYou({ items, cta }) {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Lo hacemos fácil para ti</h2>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="text-lg">✔️ {item.title}</li>
        ))}
      </ul>
      {cta && (
        <div className="mt-8">
          <a href={cta.href} className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition">
            {cta.label}
          </a>
        </div>
      )}
    </div>
  );
}

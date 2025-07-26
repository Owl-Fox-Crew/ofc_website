// src/components/home/EcosystemTeaser.tsx
export function EcosystemTeaser({ chips, copy }) {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué tipo de historia podría ser la tuya?</h2>
      <p className="mb-6 text-zinc-300">{copy}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {chips.map((chip, idx) => (
          <a key={idx} href={chip.href} className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            {chip.name}
          </a>
        ))}
      </div>
    </div>
  );
}

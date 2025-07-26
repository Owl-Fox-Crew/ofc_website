'use client';

type Chip = {
  label: string;
};

type EcosystemTeaserProps = {
  chips: Chip[];
  copy: string;
};

export function EcosystemTeaser({ chips, copy }: EcosystemTeaserProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        ¿Qué tipo de historia podría ser la tuya?
      </h2>
      <p className="text-zinc-300 mb-8">{copy}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {chips.map((chip, index) => (
          <span
            key={index}
            className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

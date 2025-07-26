'use client';

type Item = {
  title: string;
  description: string;
};

type CTA = {
  label: string;
  href: string;
};

type EaseForYouProps = {
  items: Item[];
  cta: CTA;
};

export function EaseForYou({ items, cta }: EaseForYouProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Lo hacemos fácil para ti</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {items.map((item, index) => (
          <div key={index} className="bg-zinc-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-zinc-300">{item.description}</p>
          </div>
        ))}
      </div>
      <a
        href={cta.href}
        className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition"
      >
        {cta.label}
      </a>
    </div>
  );
}

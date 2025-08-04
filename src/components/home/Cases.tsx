export interface CasesProps {
  items: {
    title: string;
    slug: string;
    problem: string;
    decision: string;
    videoUrl: string;
  }[];
}

export default function Cases({ items }: CasesProps) {
  return (
    <section className="py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Historias reales de impacto</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-video bg-black overflow-hidden rounded-xl">
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-80">{item.problem}</p>
              <p className="text-sm text-[#ff7503] font-medium">{item.decision}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

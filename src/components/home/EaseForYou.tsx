export interface EaseForYouProps {
  items: {
    title: string;
    description: string;
  }[];
}

export default function EaseForYou({ items }: EaseForYouProps) {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Pensado para que sea fácil</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/home/Benefits.tsx

type Benefit = {
  title: string;
  description: string;
};

type BenefitsProps = {
  emotional: Benefit[];
  strategic: Benefit[];
};

export function Benefits({ emotional, strategic }: BenefitsProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Lo que pasa cuando cuentas bien tu historia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Impacto emocional</h3>
          <ul className="space-y-2">
            {emotional.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Impacto estratégico</h3>
          <ul className="space-y-2">
            {strategic.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// src/components/home/Benefits.tsx
export function Benefits({ emotional, strategic }) {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Lo que pasa cuando cuentas bien tu historia</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Emocionales</h3>
          <ul className="space-y-2 text-left">
            {emotional.map((item, idx) => <li key={idx} className="list-disc list-inside">{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Estratégicos</h3>
          <ul className="space-y-2 text-left">
            {strategic.map((item, idx) => <li key={idx} className="list-disc list-inside">{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

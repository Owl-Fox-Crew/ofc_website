// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Parece que esta historia aún no fue contada.</h1>
      <p className="opacity-80">La página que buscás no existe o cambió de escenario.</p>
      <a href="/" className="mt-6 underline text-brand-primary hover:text-zinc-300">Volver al Home</a>
    </div>
  );
}

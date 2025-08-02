// src/app/500.tsx
export default function ServerError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Algo salió mal en la sala de edición.</h1>
      <p className="opacity-80">Estamos trabajando para resolverlo. Vuelve a intentar en unos minutos.</p>
      <a href="/" className="mt-6 underline text-brand-primary hover:text-zinc-300">Volver al Home</a>
    </div>
  );
}

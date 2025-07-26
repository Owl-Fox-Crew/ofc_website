export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 — Página no encontrada</h1>
      <p className="opacity-80">Volvamos al inicio.</p>
      <a href="/" className="mt-6 underline text-brand-primary">Ir al Home</a>
    </div>
  )
}

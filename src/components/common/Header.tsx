// src/components/common/Header.tsx
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md text-white py-4 px-6 flex justify-between items-center">
      <a href="#" className="text-xl font-bold">OFC</a>
      <nav className="space-x-6 hidden md:block">
        <a href="#casos" className="hover:underline">Historias</a>
        <a href="#proceso" className="hover:underline">Proceso</a>
        <a href="#ecosistema" className="hover:underline">Activación 360</a>
        <a href="#nosotros" className="hover:underline">Nosotros</a>
        <a href="#contacto" className="hover:underline">Contacto</a>
      </nav>
      <a href="#agenda" className="hidden md:inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-zinc-200 transition">
        Agenda una sesión
      </a>
    </header>
  );
}

// src/components/common/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center px-6 text-sm">
      <p>© {new Date().getFullYear()} Owl Fox Crew. Todos los derechos reservados.</p>
      <div className="mt-2">Hecho con 🦉🦊 & IA</div>
    </footer>
  );
}

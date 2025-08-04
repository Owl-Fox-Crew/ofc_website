export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 py-16 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 opacity-70">
        <div>© {new Date().getFullYear()} Owl Fox Crew</div>
        <div className="flex gap-4">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
        <div>
          <a href="/privacidad">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

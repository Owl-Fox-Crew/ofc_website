// src/app/layout.tsx
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export const metadata = {
  title: 'Owl Fox Crew — Historias cinematográficas a medida que transforman tu comunicación',
  description: 'Comunidad creativa que revoluciona el storytelling corporativo. Cinematografía + IA para activar, medir y optimizar tu impacto.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

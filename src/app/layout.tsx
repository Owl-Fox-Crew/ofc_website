// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/common/Footer';
import Analytics from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Owl Fox Crew – Historias cinematográficas a medida que transforman tu comunicación',
  description: 'Comunidad creativa que revoluciona el storytelling corporativo. Cinematografía + IA + Estrategia = conexión emocional con propósito.',
  metadataBase: new URL('https://staging.owlfoxcrew.com')
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black text-white antialiased">
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

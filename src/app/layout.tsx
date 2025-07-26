import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Owl Fox Crew — Historias cinematográficas a medida que transforman tu comunicación',
  description:
    'Comunidad creativa que revoluciona el storytelling corporativo. Cinematografía + IA para activar, medir y optimizar tu impacto.',
  metadataBase: new URL('https://staging.owlfoxcrew.com')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

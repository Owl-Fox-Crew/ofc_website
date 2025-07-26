import type { ReactNode } from 'react'
import '../app/globals.css'
import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '@/lib/seo'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black text-white antialiased">
        <DefaultSeo {...defaultSEO} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

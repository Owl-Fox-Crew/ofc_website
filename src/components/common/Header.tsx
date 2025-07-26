'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const nav = [
  { label: 'Historias', href: '/historias' },
  { label: 'Proceso', href: '/proceso' },
  { label: 'Activación 360', href: '/estrategia-activacion-analisis' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-black/80 backdrop-blur border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">Owl Fox Crew</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">{item.label}</Link>
          ))}
        </nav>
        <Link href="#agenda" className="rounded-2xl px-4 py-2 text-sm bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white transition">
          Agenda una sesión
        </Link>
      </div>
    </header>
  )
}

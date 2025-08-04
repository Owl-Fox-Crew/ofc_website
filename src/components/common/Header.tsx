'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'Stories', href: '/stories' },
  { label: 'Services', href: '/services' },
  { label: 'Crew', href: '/team' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'es' : 'en'));

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-black/80 backdrop-blur border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/Logo_Low_White.png"
            alt="Owl Fox Crew Logo"
            width={40}
            height={40}
            className="hover:opacity-90 transition-opacity"
          />
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/free-talk"
            className="rounded-2xl px-4 py-2 text-sm bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white transition"
          >
            Free Talk
          </Link>
          <button
            onClick={toggleLanguage}
            className="text-white/70 text-xs tracking-wide hover:text-white transition"
            aria-label="Change language"
          >
            {language}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const nav = [
  { label: 'Stories', href: '/stories' },
  { label: 'Services', href: '/services' },
  { label: 'Crew', href: '/team' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' }
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentLocale = pathname?.startsWith('/es') ? 'es' : 'en';
  const otherLocale = currentLocale === 'es' ? 'en' : 'es';
  const switchLocaleHref = pathname?.replace(`/${currentLocale}`, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-black/80 backdrop-blur border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${currentLocale}`} className="font-semibold tracking-wide">
          <img src="/Logo_Low_White.png" alt="OFC logo" className="h-8" />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={`/${currentLocale}${item.href}`} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={`/${currentLocale}/free-talk`}
            className="rounded-2xl px-4 py-2 text-sm bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white transition"
          >
            Free Talk
          </Link>
          <Link
            href={switchLocaleHref}
            className="text-sm text-white/60 hover:text-white transition-opacity"
          >
            {otherLocale}
          </Link>
        </div>
      </div>
    </header>
  );
}

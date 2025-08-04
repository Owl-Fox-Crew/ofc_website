'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const t = useTranslations('Header'); // Namespace correcto
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const currentLocale = pathname?.startsWith('/es') ? 'es' : 'en';
  const otherLocale = currentLocale === 'es' ? 'en' : 'es';
  const switchLocaleHref = pathname?.replace(`/${currentLocale}`, `/${otherLocale}`) || `/${otherLocale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { label: t('stories'), href: '/stories' },
    {
      label: t('services.label'),
      href: '/services',
      submenu: [
        { label: t('services.cinematic'), href: '/services/cinematic' },
        { label: t('services.trailer'), href: '/services/trailer' },
        { label: t('services.marketing'), href: '/services/marketing' },
        { label: t('services.documentary'), href: '/services/documentary' },
        { label: t('services.animated'), href: '/services/animated' },
        { label: t('services.single'), href: '/services/single' },
        { label: t('services.full'), href: '/services/full' }
      ]
    },
    { label: t('crew'), href: '/team' },
    { label: t('pricing'), href: '/pricing' },
    {
      label: t('resources.label'),
      href: '/resources',
      submenu: [
        { label: t('resources.blog'), href: '/resources/blog' },
        { label: t('resources.downloads'), href: '/resources/downloads' },
        { label: t('resources.podcast'), href: '/resources/podcast' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${scrolled ? 'bg-black/80 backdrop-blur border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${currentLocale}`} className="font-semibold tracking-wide">
          <img src="/Logo_Low_White.png" alt="OFC logo" className="h-8" />
        </Link>

        <nav className="hidden md:flex gap-6 text-[15px] text-white">
          {nav.map((item) =>
            item.submenu ? (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                  {item.label} <ChevronDown size={14} />
                </button>
                {openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-2 bg-black/90 shadow-lg rounded-xl overflow-hidden border border-zinc-700 min-w-[200px] z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={`/${currentLocale}${sub.href}`}
                        className="block px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={`/${currentLocale}${item.href}`}
                className="hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={`/${currentLocale}/free-talk`}
            className="rounded-2xl px-4 py-2 text-sm bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white transition"
          >
            {t('freeTalk')}
          </Link>
          <Link
            href={switchLocaleHref}
            className="text-sm text-white/60 hover:text-white transition-opacity"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

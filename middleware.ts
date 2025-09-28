import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'es'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar archivos estáticos y API
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes('/_next/')
  ) {
    return NextResponse.next();
  }

  // Si la ruta ya tiene locale → continuar
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Detectar idioma preferido del navegador
  const acceptLang = request.headers.get('accept-language');
  const preferredLocale = acceptLang?.split(',')[0].split('-')[0];

  const locale = locales.includes(preferredLocale || '')
    ? preferredLocale
    : defaultLocale;

  // Redirigir a /en o /es
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/',
    '/((?!_next|api|static|favicon.ico).*)',
  ],
};

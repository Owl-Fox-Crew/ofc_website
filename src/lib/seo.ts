import { DefaultSeoProps } from 'next-seo'

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Owl Fox Crew',
  defaultTitle: 'Owl Fox Crew — Historias cinematográficas a medida',
  description:
    'Comunidad creativa que revoluciona el storytelling corporativo. Cinematografía + IA para activar, medir y optimizar tu impacto. Agenda tu diagnóstico narrativo gratis.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    site_name: 'Owl Fox Crew',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Owl Fox Crew'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image'
  },
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
}

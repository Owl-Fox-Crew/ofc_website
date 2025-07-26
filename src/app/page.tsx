''use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { Hero } from '@/components/home/Hero';
import { Benefits } from '@/components/home/Benefits';
import { EaseForYou } from '@/components/home/EaseForYou';
import { Cases } from '@/components/home/Cases';
import { Process } from '@/components/home/Process';
import { Manifesto } from '@/components/home/Manifesto';
import { CTASection } from '@/components/home/CTASection';
import { LeadQuiz } from '@/components/home/LeadQuiz';

const hero = {
  headline: 'Creamos historias con calidad cinematográfica',
  subheadline: 'Revolucionamos el storytelling corporativo',
  videoSrc: '/videos/hero-video.mp4',
  posterSrc: '/images/hero-poster.jpg',
  primaryCta: {
    label: 'Agenda tu diagnóstico narrativo gratuito (20’)',
    href: '#agenda',
  },
  secondaryCta: {
    label: 'Hazme 4 preguntas y propón un camino',
    href: '#quiz',
  },
  microcopy: 'Damos voz a tu marca para que conectes con tu audiencia desde lo visual, lo emocional y lo auténtico.',
};

const benefits = {
  emotional: [
    { title: 'Mayor recordación', description: 'Tu marca deja huella emocional en quien la ve.' },
    { title: 'Conexión profunda', description: 'Generas vínculos humanos, no solo visuales.' },
    { title: 'Identificación auténtica', description: 'Tu historia refleja tu esencia con honestidad.' },
  ],
  strategic: [
    { title: 'Más visibilidad', description: 'El contenido emocional tiene mayor alcance.' },
    { title: 'Mejor conversión', description: 'Tu audiencia entiende y valora lo que ofreces.' },
    { title: 'Alianzas efectivas', description: 'Una historia clara atrae a quienes piensan como tú.' },
  ],
};

const easeForYou = {
  items: [
    {
      title: 'Creamos desde cero',
      description: 'Solo necesitás contarnos para quién comunicás y qué querés transmitir. Nosotros nos encargamos del resto.',
    },
    {
      title: 'Sin sobrecarga para tu equipo',
      description: 'No hace falta que redactes, diseñes ni armes presentaciones. Hacemos que tu tiempo valga más.',
    },
    {
      title: 'Iteramos con vos, no sobre vos',
      description: 'Te compartimos avances y decisiones clave en el proceso, sin exigirte un seguimiento diario.',
    },
  ],
  cta: {
    label: 'Quiero trabajar así',
    href: '#agenda',
  },
};

const caseItems = [
  {
    videoSrc: '/videos/caso1.mp4',
    poster: '/images/poster1.jpg',
  },
  {
    videoSrc: '/videos/caso2.mp4',
    poster: '/images/poster2.jpg',
  },
  {
    videoSrc: '/videos/caso3.mp4',
    poster: '/images/poster3.jpg',
  },
];

const process = {
  steps: [
    {
      number: '01',
      title: 'Entendimiento',
      description: 'Conocemos a tu marca, su historia, su tono, sus objetivos y el público al que quiere llegar.',
    },
    {
      number: '02',
      title: 'Narrativa',
      description: 'Diseñamos el guión, visualizamos el enfoque y creamos el relato emocional que vas a contar.',
    },
    {
      number: '03',
      title: 'Producción',
      description: 'Damos vida a tu historia con animación, música, edición y efectos para lograr impacto visual y emocional.',
    },
  ],
};

const manifesto = {
  questions: [
    '¿Por qué las empresas siguen comunicando con tanto ruido visual?',
    '¿Por qué todo parece tan genérico y repetido?',
    '¿Por qué la comunicación corporativa sigue siendo aburrida?',
  ],
  resultMap: {
    title: 'Queremos cambiar eso.',
    subtitle: 'Y lo hacemos con historias que emocionan, conmueven y conectan.',
  },
  bullets: [
    'Creamos desde lo emocional, no desde lo funcional.',
    'Narramos con propósito y estética.',
    'Damos voz a marcas que necesitan algo más que un contenido: necesitan identidad.',
  ],
};

export default function HomePage() {
  useEffect(() => {
    trackEvent('home_page_view');
  }, []);

  return (
    <>
      <Hero {...hero} />

      <section id="beneficios" className="py-24">
        <Benefits {...benefits} />
      </section>

      <section id="facilidades" className="py-24 bg-zinc-900/30">
        <EaseForYou {...easeForYou} />
      </section>

      <section id="casos" className="py-24">
        <Cases items={caseItems} />
      </section>

      <section id="proceso" className="py-24 bg-zinc-900/30">
        <Process {...process} />
      </section>

      <section id="manifiesto" className="py-24 bg-zinc-900/30">
        <Manifesto {...manifesto} />
      </section>

      <section id="cta" className="py-24">
        <CTASection
          headline="¿Quieres contar tu historia de marca y transformar cómo te comunicas? Owl Fox Crew es para ti."
          primaryCta={{ label: 'Agenda tu diagnóstico narrativo gratuito (20’)', href: '#agenda' }}
          secondaryCta={{ label: 'Hazme 4 preguntas y propón un camino', href: '#quiz' }}
        />
      </section>

      <section id="quiz" className="py-24 bg-zinc-900/30">
        <LeadQuiz />
      </section>
    </>
  );
}

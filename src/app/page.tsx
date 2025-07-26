'use client';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { Hero } from '@/components/home/Hero';
import { Benefits } from '@/components/home/Benefits';
import { EaseForYou } from '@/components/home/EaseForYou';
import { Cases } from '@/components/home/Cases';
import { Process } from '@/components/home/Process';
import { EcosystemTeaser } from '@/components/home/EcosystemTeaser';
import { Manifesto } from '@/components/home/Manifesto';
import { CTASection } from '@/components/home/CTASection';
import { LeadQuiz } from '@/components/home/LeadQuiz';

export default function HomePage() {
  useEffect(() => { trackEvent('view_home'); }, []);

  const hero = {
    headline: 'Historias que transforman cómo se comunica tu empresa.',
    subheadline: 'Cinematografía, criterio y tecnología para contar lo que tu marca realmente es.',
    videoSrc: '/videos/reel-ofc.mp4',
    posterSrc: '/images/reel-ofc-poster.jpg',
    primaryCta: { label: 'Explora nuestra forma de contar historias', href: '#casos' },
    secondaryCta: { label: 'Agenda una sesión de diagnóstico (20’)', href: '#agenda' },
    microcopy: 'Comunidad creativa, no agencia. IA como herramienta, no como eslogan.'
  };

  const benefits = {
    emotional: ['Tu audiencia te reconoce y te recuerda.', 'Tu equipo se alinea.', 'Tu marca se vuelve narrativa, no solo visual.'],
    strategic: ['Menos contenido irrelevante, más impacto real.', 'Aprovechas presupuestos existentes.', 'Mides, aprendes, mejoras.']
  };

  const easeForYou = {
    items: [
      { title: 'Diagnóstico narrativo express (20’)' },
      { title: 'Diseño macro→micro con duración definida upfront' },
      { title: 'Producción con IA y coherencia visual garantizada' },
      { title: 'Activación & Análisis 360' },
      { title: 'Acompañamiento continuo' }
    ],
    cta: { label: 'Quiero verlo aplicado a mi caso', href: '#agenda' }
  };

  const cases = {
    items: [
      {
        slug: 'cultura-compartida',
        title: 'De cultura desalineada a una voz compartida',
        problem: 'La empresa quería alinear a su equipo bajo un mismo propósito emocional.',
        decision: 'Diseñamos una historia cinematográfica breve que condensó su ADN en 60 segundos.',
        impact: {
          emotional: ['Mayor sentido de pertenencia', 'Lenguaje común en la comunicación interna'],
          strategic: ['+35% en retención del vídeo', 'Material reutilizable en onboarding']
        },
        videoUrl: 'https://vimeo.com/xxxx',
        stack: ['Storycrafter – A Cinematic Mind', 'IA para coherencia visual', 'Activación 360'],
        nextPhase: 'Serie documental corta para profundizar en cada valor.'
      }
    ]
  };

  const process = {
    steps: [
      { id: 1, title: 'Te escuchamos 20’ y te damos claridad.', description: 'Definimos tu objetivo emocional/estratégico.', keystone: 'Objetivo claro' },
      { id: 2, title: 'Diseñamos tu historia con la duración justa para cuidar tu ROI.', description: 'Guion aprobado + lógica visual.', keystone: 'Guion + lógica visual' },
      { id: 3, title: 'Producimos con IA, asegurando coherencia visual desde el inicio.', description: 'Storyboard + reel preliminar.', keystone: 'Storyboard + reel' },
      { id: 4, title: 'Activamos, medimos y volvemos con decisiones claras.', description: 'Informe audiovisual + recomendaciones.', keystone: 'Informe + decisiones' }
    ]
  };

  const chips = [
    { name: 'Cinematográfica', href: '/formatos#cinematografica' },
    { name: 'Documental', href: '/formatos#documental' },
    { name: 'Animada', href: '/formatos#animada' },
    { name: 'Marketing de Producto', href: '/formatos#marketing' },
    { name: 'Trailer', href: '/formatos#trailer' }
  ];

  const manifesto = {
    bullets: [
      'No informamos, movemos.',
      'Cada historia es única.',
      'IA como herramienta, no como narrativa.',
      'Visualidad coherente desde el inicio.',
      'Criterio sobre patrones.',
      'Total apertura comunicativa.',
      'No empujamos. Invitamos.'
    ]
  };

  return (
    <>
      <Hero {...hero} />
      <section id="beneficios" className="py-24"><Benefits {...benefits} /></section>
      <section id="facilidades" className="py-24 bg-zinc-900/30"><EaseForYou {...easeForYou} /></section>
      <section id="casos" className="py-24"><Cases {...cases} /></section>
      <section id="proceso" className="py-24 bg-zinc-900/30"><Process {...process} /></section>
      <section id="ecosistema" className="py-24"><EcosystemTeaser chips={chips} copy="No producimos formatos enlatados: elegimos la forma que tu reto necesita. Conócelo en detalle →" /></section>
      <section id="manifiesto" className="py-24 bg-zinc-900/30"><Manifesto {...manifesto} /></section>
      <section id="cta" className="py-24"><CTASection headline="¿Quieres contar tu historia de marca y transformar cómo te comunicas? Owl Fox Crew es para ti." primaryCta={{ label: 'Agenda tu diagnóstico narrativo gratuito (20’)', href: '#agenda' }} secondaryCta={{ label: 'Hazme 4 preguntas y propón un camino', href: '#quiz' }} /></section>
      <section id="quiz" className="py-24 bg-zinc-900/30"><LeadQuiz /></section>
    </>
  );
}

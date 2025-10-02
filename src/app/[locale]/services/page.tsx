// src/app/[locale]/services/page.tsx
import SectionHero from "@/components/services/sectionhero";
import ServicesIntro from "@/components/services/servicesintro";
import FormatGuide from "@/components/services/formatguide";
import FormatQuickSelector from "@/components/services/formatquickselector";
import FormatHelp from "@/components/services/formathelp";
import FormatSolutions from "@/components/services/formatsolutions";

export default function ServicesPage() {
  return (
    <main>
      {/* HERO de apertura de Services */}
      <SectionHero backgroundImage="/images/services/Hero.png" />

      {/* APERTURA – Beneficios de contar tu historia */}
      <ServicesIntro />

      {/* GUÍA INTERACTIVA – Elección de formato */}
      <FormatGuide />

      {/* QUIZ – Comparador rápido */}
      <FormatQuickSelector />

      {/* CIERRE – Decisión orientada / contención */}
      <FormatHelp />

      {/* FORMATOS & SERVICIOS – Macro módulo (5 formatos + 2 acompañamientos + comparativo + cierre) */}
      <FormatSolutions />
    </main>
  );
}

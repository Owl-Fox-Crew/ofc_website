// src/app/(routes)/services/page.tsx
import SectionHero from "@/components/services/SectionHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import FormatGuide from "@/components/services/FormatGuide";
import FormatQuickSelector from "@/components/services/FormatQuickSelector";
import FormatHelp from "@/components/services/FormatHelp";
import FormatSolutions from "@/components/services/FormatSolutions"; // ⬅️ reemplazo

export default function ServicesPage() {
  return (
    <main>
      {/* HERO de apertura de Services */}
      <SectionHero
        backgroundImage="/images/services/Hero.png"
        headlineLine1="Deja ser visto,"
        headlineLine2="empieza a ser escuchado"
      />

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

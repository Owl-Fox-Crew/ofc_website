"use client";

import CrewHero from "@/components/crew/CrewHero";
import CrewIntro from "@/components/crew/CrewIntro";
import CrewGallery from "@/components/crew/CrewGallery";
import CrewBackstage from "@/components/crew/CrewBackstage";
import CrewDifferential from "@/components/crew/CrewDifferential";
import CrewClosing from "@/components/crew/CrewClosing";

export default function Crew() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero cinematográfico con título + subtítulo */}
      <CrewHero />

      {/* Intro filosófica con manifiesto narrativo */}
      <CrewIntro />

      {/* Galería de retratos cinematográficos con microinteracciones */}
      <CrewGallery />

      {/* Bloque backstage con imágenes de acción tras bambalinas */}
      <CrewBackstage />

      {/* Diferenciales del Crew: IA + creatividad, visión cinematográfica, etc. */}
      <CrewDifferential />

      {/* Cierre narrativo con frase inspiradora + CTA */}
      <CrewClosing />
    </main>
  );
}

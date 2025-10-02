"use client";

import CrewHero from "@/components/Crew/CrewHero";
import CrewIntro from "@/components/Crew/CrewIntro";
import CrewGallery from "@/components/Crew/CrewGallery";
import CrewBackstage from "@/components/Crew/CrewBackstage";
import CrewDifferential from "@/components/Crew/CrewDifferential";
import CrewClosing from "@/components/Crew/CrewClosing";

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

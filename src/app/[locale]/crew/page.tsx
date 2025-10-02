"use client";

import CrewHero from "@/components/crew/crewhero";
import CrewIntro from "@/components/crew/crewintro";
import CrewGallery from "@/components/crew/crewgallery";
import CrewBackstage from "@/components/crew/crewbackstage";
import CrewDifferential from "@/components/crew/crewdifferential";
import CrewClosing from "@/components/crew/crewclosing";

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

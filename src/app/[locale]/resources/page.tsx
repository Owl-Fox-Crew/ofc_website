"use client";

import ResourcesHero from "@/components/resources/resourceshero";
import ResourcesIntro from "@/components/resources/resourcesintro";
import ResourcesGrid from "@/components/resources/resourcesgrid";
import ResourcesHighlight from "@/components/resources/resourceshighlight";
import ResourcesClosing from "@/components/resources/resourcesclosing";

export default function Resources() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero: Imagen + copy inspirador */}
      <ResourcesHero />

      {/* Intro breve: manifiesto del porqué de la sección */}
      <ResourcesIntro />

      {/* Grid/Listado de recursos (artículos, guías, videos) */}
      <ResourcesGrid />

      {/* Highlight o bloque especial: 
          puede ser un recurso premium (ej: ebook, masterclass) 
          o un carrusel de “más vistos” */}
      <ResourcesHighlight />

      {/* Closing: nube reflexiva + CTA global */}
      <ResourcesClosing />
    </main>
  );
}

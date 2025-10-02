"use client";

import StoriesHero from "@/components/stories/storieshero";
import StoriesGallery from "@/components/stories/storiesgallery";
import StoriesClosing from "@/components/stories/storiesclosing";

export default function Stories() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero section */}
      <StoriesHero />

      {/* Galería de historias */}
      <StoriesGallery />

      {/* Cierre narrativo con nube lila + CTA */}
      <StoriesClosing />
    </main>
  );
}

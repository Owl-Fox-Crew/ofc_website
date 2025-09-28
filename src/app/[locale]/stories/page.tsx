"use client";

import StoriesHero from "@/components/stories/StoriesHero";
import StoriesGallery from "@/components/stories/StoriesGallery";
import StoriesClosing from "@/components/stories/StoriesClosing";

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

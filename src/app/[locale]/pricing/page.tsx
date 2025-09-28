"use client";

import PricingHero from "@/components/pricing/PricingHero";
import PricingIntro from "@/components/pricing/PricingIntro";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingClosing from "@/components/pricing/PricingClosing";

export default function Pricing() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero section */}
      <PricingHero />

      {/* Intro con 4 beneficios narrativos */}
      <PricingIntro />

      {/* Cards principales con planes narrativos */}
      <PricingPlans />

      {/* Tabla comparativa simple (features narrativos, no precios) */}
      <PricingComparison />

      {/* Cierre narrativo con frase inspiradora + CTAs globales */}
      <PricingClosing />
    </main>
  );
}

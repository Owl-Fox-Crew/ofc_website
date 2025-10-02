"use client";

import PricingHero from "@/components/pricing/pricinghero";
import PricingIntro from "@/components/pricing/pricingintro";
import PricingPlans from "@/components/pricing/pricingplans";
import PricingComparison from "@/components/pricing/pricingcomparison";
import PricingClosing from "@/components/pricing/pricingclosing";

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

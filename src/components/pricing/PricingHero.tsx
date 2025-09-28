"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function PricingHero() {
  const intl = useIntl();

  return (
    <section className="relative w-full h-screen min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/pricing/Hero.png"
          alt="Pricing background"
          className="w-full h-full object-cover"
        />
        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      {/* Texto central animado */}
      <motion.div
        className="
          absolute 
          z-10 
          max-w-6xl 
          px-6
          left-[10%]     
          top-[25%]      
          md:left-[60%]  
          md:top-[62%]   
          text-right    
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-[60px] font-bold text-white leading-snug drop-shadow-lg">
          {intl.formatMessage({ id: "pricing.hero.line1" })}
        </h1>
        <h2 className="text-5xl md:text-[60px] font-bold text-white -mt-1 drop-shadow-lg">
          {intl.formatMessage({ id: "pricing.hero.line2" })}
        </h2>
      </motion.div>
    </section>
  );
}

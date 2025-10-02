"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function ResourcesHero() {
  const intl = useIntl();

  return (
    <section className="relative w-full h-screen min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/resources/Hero.png"
          alt={intl.formatMessage({ id: "resources.hero.alt" })}
          className="w-full h-full object-cover"
        />
        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />
      </div>

      {/* Texto central animado */}
      <motion.div
        className="absolute z-20 max-w-6xl px-6 md:px-12 left-[10%] top-[40%] md:left-[0%] md:top-[76%] text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-[60px] font-bold text-white leading-snug -mt-4 drop-shadow-lg">
          {intl.formatMessage({ id: "resources.hero.line1" })}
        </h2>
        <h3 className="text-5xl md:text-[60px] font-bold text-white leading-snug -mt-4 drop-shadow-lg">
          {intl.formatMessage({ id: "resources.hero.line2" })}
        </h3>
        <h4 className="text-5xl md:text-[60px] font-bold text-white leading-snug -mt-4 drop-shadow-lg">
          {intl.formatMessage({ id: "resources.hero.line3" })}
        </h4>
      </motion.div>
    </section>
  );
}

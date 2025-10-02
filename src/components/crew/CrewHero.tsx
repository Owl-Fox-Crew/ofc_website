"use client";

import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

export default function CrewHero() {
  return (
    <section className="relative w-full h-screen min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/crew/Hero.png"
          alt="Crew background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />
      </div>

      {/* Texto central animado */}
      <motion.div
        className="absolute z-20 max-w-9xl px-6 left-[20%] top-[45%] md:left-[0%] md:top-[48%] text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-[60px] font-bold text-white leading-snug drop-shadow-lg">
          <FormattedMessage id="crew.hero.line1" defaultMessage="Una tripulación guiada" />
        </h1>
        <h2 className="text-5xl md:text-[60px] font-bold text-white -mt-1 drop-shadow-lg">
          <FormattedMessage id="crew.hero.line2" defaultMessage="por la narrativa" />
        </h2>
        <h3 className="text-5xl md:text-[60px] font-bold text-white leading-snug drop-shadow-lg">
          <FormattedMessage id="crew.hero.line3" defaultMessage="Impulsada por el deseo de" />
        </h3>
        <h4 className="text-5xl md:text-[60px] font-bold text-white -mt-1 drop-shadow-lg">
          <FormattedMessage id="crew.hero.line4" defaultMessage="contar historias" />
        </h4>
      </motion.div>
    </section>
  );
}

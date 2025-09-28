"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

interface SectionHeroProps {
  backgroundImage?: string;
}

export default function SectionHero({
  backgroundImage = "/images/services/Hero.png",
}: SectionHeroProps) {
  const intl = useIntl();

  return (
    <section className="relative w-full h-screen min-h-[80vh] flex items-center justify-center text-center bg-black overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={intl.formatMessage({ id: "services.hero.alt" })}
          className="w-full h-full object-cover"
        />
        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      {/* Texto central animado */}
      <motion.div
        className="absolute top-[29%] z-10 max-w-6xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug drop-shadow-lg">
          {intl.formatMessage({ id: "services.hero.headline1" })}
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold text-white mt-3 drop-shadow-lg">
          {intl.formatMessage({ id: "services.hero.headline2" })}
        </h2>
      </motion.div>
    </section>
  );
}

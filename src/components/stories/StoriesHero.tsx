"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function StoriesHero() {
  const intl = useIntl();

  return (
    <section className="relative w-full h-screen min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/stories/Hero.png"
          alt={intl.formatMessage({ id: "stories.hero.alt" })}
          className="w-full h-full object-cover"
        />
        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />
      </div>

      {/* Texto central animado */}
      <motion.div
        className="absolute z-20 max-w-9xl px-14 left-[20%] top-[810%] md:left-[0%] md:top-[14%] text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-[60px] font-bold text-white leading-snug drop-shadow-lg">
          {intl.formatMessage({ id: "stories.hero.title1" })}
        </h1>
        <h2 className="text-5xl md:text-[60px] font-bold text-white -mt-1 drop-shadow-lg">
          {intl.formatMessage({ id: "stories.hero.title2" })}
        </h2>
      </motion.div>
    </section>
  );
}

// src/components/services/FormatHelp.tsx
"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function FormatHelp() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-16 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "services.help.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue mt-2">
          {intl.formatMessage({ id: "services.help.subtitle" })}
        </h3>
      </div>

      {/* Nube de cierre con CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[55rem] mx-auto rounded-2xl border-2 border-brand-orange bg-white/5 backdrop-blur-md shadow-lg p-6 md:p-8"
      >
        <div className="flex items-start gap-4 md:gap-5">
          <p className="text-center text-lg md:text-xl font-semibold text-white/90 leading-snug">
            {intl.formatMessage({ id: "services.help.text" })}
          </p>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="/sesion-gratuita"
            className="inline-block px-8 py-4 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
          >
            {intl.formatMessage({ id: "services.help.cta" })}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

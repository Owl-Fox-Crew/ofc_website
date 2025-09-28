"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function ResourcesClosing() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-2 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "resources.closing.title" })}
        </h2>
        <h3 className="text-3xl md:text-5xl font-semibold text-white/85 mt-2">
          {intl.formatMessage({ id: "resources.closing.subtitle" })}
        </h3>
      </div>

      {/* Nube de cierre */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[55rem] mx-auto mb-12 rounded-2xl border-2 border-brand-purple bg-white/5 backdrop-blur-md shadow-lg p-5 md:p-7"
      >
        <p className="text-center text-lg md:text-xl font-semibold text-white/90 leading-snug">
          {intl.formatMessage({ id: "resources.closing.cloud" })}
        </p>
      </motion.div>

      {/* CTA Final */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg md:text-2xl lg:text-3xl font-medium text-brand-blue mb-6">
          {intl.formatMessage({ id: "resources.closing.cta.question" })}
        </p>
        <motion.div
          whileHover={{ scale: 1.075 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="/contacto"
            className="inline-block px-6 md:px-8 py-3 md:py-6 mb-6 rounded-2xl bg-gray-200 
                       text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 
                       transition-colors hover:bg-brand-orange hover:text-white"
          >
            {intl.formatMessage({ id: "resources.closing.cta.button" })}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

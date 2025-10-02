"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function StoriesClosing() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-16 overflow-hidden">
      {/* Nube de cierre */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[55rem] mx-auto mb-12 rounded-2xl border-2 border-brand-purple bg-white/5 backdrop-blur-md shadow-lg p-5 md:p-7"
      >
        <p className="text-center text-lg md:text-xl font-semibold text-white/90 leading-snug">
          {intl.formatMessage({ id: "stories.closing.text" })}
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
          {intl.formatMessage({ id: "stories.closing.ctaText" })}
        </p>
        <motion.div
          whileHover={{ scale: 1.075 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="/contacto"
            className="inline-block px-6 md:px-8 py-3 md:py-4 -mb-8 rounded-2xl bg-gray-200 
                       text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 
                       transition-colors hover:bg-brand-orange hover:text-white"
          >
            {intl.formatMessage({ id: "stories.closing.ctaButton" })}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

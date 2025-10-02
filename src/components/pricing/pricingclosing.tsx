"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function PricingClosing() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-4 md:px-8 lg:px-12 py-14 overflow-hidden">
      {/* Texto de cierre */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl mx-auto"
      >
        <p className="text-2xl md:text-3xl text-brand-blue font-medium mb-10 leading-snug">
          {intl.formatMessage({ id: "pricing.closing.text" })}
        </p>

        {/* CTA doble */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {/* CTA 1 */}
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-8 py-4 rounded-2xl bg-white text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-orange hover:text-white"
          >
            {intl.formatMessage({ id: "pricing.closing.cta.choosePlan" })}
          </motion.a>

          {/* CTA 2 */}
          <motion.a
            href="/asesoria"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-8 py-4 rounded-2xl bg-white text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
          >
            {intl.formatMessage({ id: "pricing.closing.cta.consulting" })}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

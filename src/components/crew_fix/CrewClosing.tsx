"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function CrewClosing() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-4 md:px-8 lg:px-12 py-6 overflow-hidden">
      {/* CTA Final */}
      <motion.div
        className="text-center mt-12 md:mt-14 lg:mt-[-14px]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg md:text-2xl lg:text-3xl font-medium text-brand-blue mb-6">
          {intl.formatMessage({ id: "crew.closing.text" })}
        </p>
        <motion.div
          whileHover={{ scale: 1.075 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="/contacto"
            className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gray-200 
                       text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 
                       transition-colors hover:bg-brand-orange hover:text-white"
          >
            {intl.formatMessage({ id: "crew.closing.cta" })}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

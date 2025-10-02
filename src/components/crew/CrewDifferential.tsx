"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function CrewDifferential() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-8 py-0 mt-[-14px] mb-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "crew.differential.title" })}
        </h2>
        <h3 className="text-3xl md:text-5xl max-w-7xl mx-auto font-semibold text-white/85 mt-2">
          {intl.formatMessage({ id: "crew.differential.subtitle" })}
        </h3>
      </div>

      {/* Texto en nube gris */}
      <div className="max-w-[76rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <p className="text-[1.30rem] font-medium text-white/85 justify-center text-center leading-relaxed mb-4">
            {intl.formatMessage({ id: "crew.differential.text1" })}
          </p>
          <p className="text-[1.30rem] font-medium text-white/85 justify-center text-center leading-relaxed mb-4">
            {intl.formatMessage({ id: "crew.differential.text2" })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

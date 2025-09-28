"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function ResourcesIntro() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-4 md:px-8 lg:px-12 py-16 overflow-hidden">
      {/* Título y subtítulo */}
      <div className="text-center mb-10 md:mb-12 lg:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "resources.intro.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/85 max-w-7xl mx-auto leading-snug mt-2">
          {intl.formatMessage({ id: "resources.intro.subtitle" })}
        </h3>
      </div>

      {/* Texto en nube gris */}
      <div className="max-w-[76rem] mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/10 rounded-2xl p-6 md:p-7 shadow-lg"
        >
          <p className="text-[1.30rem] font-semibold text-white/85 justify-center text-center leading-relaxed mb-4">
            {intl.formatMessage({ id: "resources.intro.paragraph1" })}
          </p>
          <p className="text-[1.30rem] font-semibold text-white/85 justify-center text-center leading-relaxed">
            {intl.formatMessage({ id: "resources.intro.paragraph2" })}
          </p>
        </motion.div>
      </div>

      {/* Frase de cierre */}
      <motion.div
        className="mt-12 md:mt-14 -mb-1 flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-brand-blue text-2xl md:text-3xl italic font-semibold max-w-6xl">
          {`"${intl.formatMessage({ id: "resources.intro.closing" })}"`}
        </p>
      </motion.div>
    </section>
  );
}

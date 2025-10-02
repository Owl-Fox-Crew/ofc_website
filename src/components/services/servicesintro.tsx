"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function ServicesIntro() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-4 md:px-8 lg:px-12 py-10 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-12 md:mb-14 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "services.intro.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/85 mt-2">
          {intl.formatMessage({ id: "services.intro.subtitle" })}
        </h3>
      </div>

      {/* Contenido central: nubes enfrentadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 max-w-[110rem] lg:max-w-[100rem] md:max-w-[90rem] mx-auto px-2 md:px-0 mt-10 md:mt-14 lg:mt-16 items-stretch">
        {/* Lado Izquierdo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-stretch gap-2 md:gap-4 w-full"
        >
          {/* Imagen */}
          <div className="flex-[1.2] rounded-2xl overflow-hidden">
            <img
              src="/images/services/emocionales.png"
              alt={intl.formatMessage({ id: "services.intro.emotional.alt" })}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto con borde */}
          <div className="flex-[1.8] rounded-2xl border-2 border-brand-purple hover:border-4 hover:border-brand-blue transition-all duration-200 p-6 md:p-8 backdrop-blur-md flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-semibold text-brand-orange mb-8">
              {intl.formatMessage({ id: "services.intro.emotional.title" })}
            </h4>
            <ul className="space-y-3 text-white/90 text-base md:text-lg leading-relaxed list-none">
              <li>{intl.formatMessage({ id: "services.intro.emotional.item1" })}</li>
              <li>{intl.formatMessage({ id: "services.intro.emotional.item2" })}</li>
              <li>{intl.formatMessage({ id: "services.intro.emotional.item3" })}</li>
            </ul>
          </div>
        </motion.div>

        {/* Lado Derecho */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col-reverse md:flex-row items-stretch gap-2 md:gap-4 w-full justify-end"
        >
          {/* Texto con borde */}
          <div className="flex-[1.8] rounded-2xl border-2 border-brand-purple hover:border-4 hover:border-brand-blue transition-all duration-200 p-6 md:p-8 backdrop-blur-md flex flex-col justify-center text-right">
            <h4 className="text-xl md:text-2xl font-semibold text-brand-orange mb-8">
              {intl.formatMessage({ id: "services.intro.strategic.title" })}
            </h4>
            <ul className="space-y-3 text-white/90 text-base md:text-lg leading-relaxed list-none">
              <li>{intl.formatMessage({ id: "services.intro.strategic.item1" })}</li>
              <li>{intl.formatMessage({ id: "services.intro.strategic.item2" })}</li>
              <li>{intl.formatMessage({ id: "services.intro.strategic.item3" })}</li>
            </ul>
          </div>

          {/* Imagen */}
          <div className="flex-[1.2] rounded-2xl overflow-hidden">
            <img
              src="/images/services/estrategicos.png"
              alt={intl.formatMessage({ id: "services.intro.strategic.alt" })}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* CTA Final */}
      <motion.div
        className="text-center mt-12 md:mt-14 lg:mt-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg md:text-2xl lg:text-3xl font-medium text-brand-blue mb-6">
          {intl.formatMessage({ id: "services.intro.cta.text" })}
        </p>
        <motion.div
          whileHover={{ scale: 1.075 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="/contacto"
            className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
          >
            {intl.formatMessage({ id: "services.intro.cta.button" })}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

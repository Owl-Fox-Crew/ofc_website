"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useIntl } from "react-intl";

export default function PricingPlans() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-4 md:px-8 lg:px-12 py-16 overflow-hidden">
      {/* Título global */}
      <div className="text-center mb-10 md:mb-12 lg:mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "pricing.plans.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/85 max-w-7xl mx-auto leading-snug">
          {intl.formatMessage({ id: "pricing.plans.subtitle" })}
        </h3>
      </div>

      {/* Texto introductorio en nube gris */}
      <div className="max-w-[76rem] mx-auto mb-12">
        <div className="bg-white/10 rounded-2xl p-6 md:p-7 shadow-lg">
          <p className="text-[1.40rem] font-semibold text-white/85 text-justify leading-snug">
            {intl.formatMessage({ id: "pricing.plans.intro" })}
          </p>
        </div>
      </div>

      {/* Grid de planes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[105rem] mx-auto">
        
        {/* Card Plan 1 → Zorro Solitario */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col items-stretch rounded-2xl border-2 border-brand-purple hover:border-4 hover:border-brand-orange transition-all duration-300 overflow-hidden"
        >
          {/* Imagen */}
          <div className="w-full h-[210px] md:h-[250px] lg:h-[290px] overflow-hidden">
            <img
              src="/images/pricing/plan-solitario.png"
              alt={intl.formatMessage({ id: "pricing.plans.solitario.alt" })}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-1 p-6">
            <h4 className="text-2xl font-bold text-brand-orange">
              {intl.formatMessage({ id: "pricing.plans.solitario.title" })}
            </h4>
            <h5 className="text-xl font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.plans.solitario.subtitle" })}
            </h5>

            {/* Precio y servicios incluidos */}
            <div className="mt-4 flex flex-col items-start gap-3">
              {/* Precio */}
              <p className="text-[35px] font-bold text-brand-orange -mb-3">
                {intl.formatMessage({ id: "pricing.plans.solitario.price" })}
              </p>
              <p className="text-lg font-medium text-white/70">
                {intl.formatMessage({ id: "pricing.plans.solitario.priceNote" })}
              </p>
              {/* Servicios incluidos */}
              <div className="bg-brand-purple/95 rounded-xl px-4 py-4 text-[18px] font-bold text-white/85 shadow-inner w-full">
                <p>{intl.formatMessage({ id: "pricing.plans.solitario.services.story" })}</p>
                <p>{intl.formatMessage({ id: "pricing.plans.solitario.services.activation" })}</p>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-white/85 mt-2 text-base md:text-lg font-medium text-justify leading-relaxed">
              {intl.formatMessage({ id: "pricing.plans.solitario.description" })}
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-2 text-white/85 text-base md:text-lg leading-relaxed">
              {[
                "feature1",
                "feature2",
                "feature3",
                "feature4",
                "feature5",
                "feature6",
                "feature7",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  {intl.formatMessage({ id: `pricing.plans.solitario.${f}` })}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6"
            >
              <a
                href="/contacto"
                className="inline-block w-full text-center px-6 py-3 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
              >
                {intl.formatMessage({ id: "pricing.plans.cta" })}
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Card Plan 2 → Parlamento de Búhos */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col items-stretch rounded-2xl border-2 border-brand-purple hover:border-4 hover:border-brand-orange transition-all duration-300 overflow-hidden"
        >
          {/* Imagen */}
          <div className="w-full h-[210px] md:h-[250px] lg:h-[290px] overflow-hidden">
            <img
              src="/images/pricing/plan-parlamento.png"
              alt={intl.formatMessage({ id: "pricing.plans.parlamento.alt" })}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-1 p-6">
            <h4 className="text-2xl font-bold text-brand-orange">
              {intl.formatMessage({ id: "pricing.plans.parlamento.title" })}
            </h4>
            <h5 className="text-xl font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.plans.parlamento.subtitle" })}
            </h5>

            {/* Precio y servicios incluidos */}
            <div className="mt-4 flex flex-col items-start gap-3">
              <p className="text-[35px] font-bold text-brand-orange -mb-3">
                {intl.formatMessage({ id: "pricing.plans.parlamento.price" })}
              </p>
              <p className="text-lg font-medium text-white/70">
                {intl.formatMessage({ id: "pricing.plans.parlamento.priceNote" })}
              </p>
              <div className="bg-brand-purple/95 rounded-xl px-4 py-4 text-[18px] font-bold text-white/85 shadow-inner w-full">
                <p>{intl.formatMessage({ id: "pricing.plans.parlamento.services.story" })}</p>
                <p>{intl.formatMessage({ id: "pricing.plans.parlamento.services.activation" })}</p>
              </div>
            </div>  

            {/* Descripción */}
            <p className="text-white/85 mt-2 text-base md:text-lg font-medium text-justify leading-relaxed">
              {intl.formatMessage({ id: "pricing.plans.parlamento.description" })}
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-2 text-white/85 text-base md:text-lg leading-relaxed">
              {[
                "feature1",
                "feature2",
                "feature3",
                "feature4",
                "feature5",
                "feature6",
                "feature7",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  {intl.formatMessage({ id: `pricing.plans.parlamento.${f}` })}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6"
            >
              <a
                href="/contacto"
                className="inline-block w-full text-center px-6 py-3 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
              >
                {intl.formatMessage({ id: "pricing.plans.cta" })}
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Card Plan 3 → Manada */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col items-stretch rounded-2xl border-2 border-brand-purple hover:border-4 hover:border-brand-orange transition-all duration-300 overflow-hidden"
        >
          {/* Imagen */}
          <div className="w-full h-[210px] md:h-[250px] lg:h-[290px] overflow-hidden">
            <img
              src="/images/pricing/plan-manada.png"
              alt={intl.formatMessage({ id: "pricing.plans.manada.alt" })}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-1 p-6">
            <h4 className="text-2xl font-bold text-brand-orange">
              {intl.formatMessage({ id: "pricing.plans.manada.title" })}
            </h4>
            <h5 className="text-xl font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.plans.manada.subtitle" })}
            </h5>

            {/* Precio y servicios incluidos */}
            <div className="mt-4 flex flex-col items-start gap-3">
              <p className="text-[35px] font-bold text-brand-orange -mb-3">
                {intl.formatMessage({ id: "pricing.plans.manada.price" })}
              </p>
              <p className="text-lg font-medium text-white/70">
                {intl.formatMessage({ id: "pricing.plans.manada.priceNote" })}
              </p>
              <div className="bg-brand-purple/95 rounded-xl px-4 py-4 text-[18px] font-bold text-white/85 shadow-inner w-full">
                <p>{intl.formatMessage({ id: "pricing.plans.manada.services.story" })}</p>
                <p>{intl.formatMessage({ id: "pricing.plans.manada.services.activation" })}</p>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-white/85 mt-2 text-base md:text-lg font-medium text-justify leading-relaxed">
              {intl.formatMessage({ id: "pricing.plans.manada.description" })}
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-2 text-white/85 text-base md:text-lg leading-relaxed">
              {[
                "feature1",
                "feature2",
                "feature3",
                "feature4",
                "feature5",
                "feature6",
                "feature7",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  {intl.formatMessage({ id: `pricing.plans.manada.${f}` })}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6"
            >
              <a
                href="/contacto"
                className="inline-block w-full text-center px-6 py-3 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
              >
                {intl.formatMessage({ id: "pricing.plans.cta" })}
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Card Plan 4 → Ecosistema */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col items-stretch rounded-2xl border-2 border-brand-purple hover:border-4 hover:border-brand-orange transition-all duration-300 overflow-hidden"
        >
          {/* Imagen */}
          <div className="w-full h-[210px] md:h-[250px] lg:h-[290px] overflow-hidden">
            <img
              src="/images/pricing/plan-ecosistema.png"
              alt={intl.formatMessage({ id: "pricing.plans.ecosistema.alt" })}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-1 p-6">
            <h4 className="text-2xl font-bold text-brand-orange">
              {intl.formatMessage({ id: "pricing.plans.ecosistema.title" })}
            </h4>
            <h5 className="text-xl font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.plans.ecosistema.subtitle" })}
            </h5>

            {/* Precio y servicios incluidos */}
            <div className="mt-4 flex flex-col items-start gap-3">
              <p className="text-[35px] font-bold text-brand-orange -mb-3">
                {intl.formatMessage({ id: "pricing.plans.ecosistema.price" })}
              </p>
              <p className="text-lg font-medium text-white/70">
                {intl.formatMessage({ id: "pricing.plans.ecosistema.priceNote" })}
              </p>
              <div className="bg-brand-purple/95 rounded-xl px-4 py-4 text-[18px] font-bold text-white/85 shadow-inner w-full">
                <p>{intl.formatMessage({ id: "pricing.plans.ecosistema.services.story" })}</p>
                <p>{intl.formatMessage({ id: "pricing.plans.ecosistema.services.activation" })}</p>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-white/85 mt-2 text-base md:text-lg font-medium text-justify leading-relaxed">
              {intl.formatMessage({ id: "pricing.plans.ecosistema.description" })}
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-2 text-white/85 text-base md:text-lg leading-relaxed">
              {[
                "feature1",
                "feature2",
                "feature3",
                "feature4",
                "feature5",
                "feature6",
                "feature7",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  {intl.formatMessage({ id: `pricing.plans.ecosistema.${f}` })}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6"
            >
              <a
                href="/contacto"
                className="inline-block w-full text-center px-6 py-3 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
              >
                {intl.formatMessage({ id: "pricing.plans.cta" })}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Frase reflexiva */}
      <motion.div
        className="mt-16 md:mt-18 -mb-1 flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-brand-blue text-3xl italic font-semibold max-w-6xl">
          {`"${intl.formatMessage({ 
            id: 'pricing.plans.closing', 
            defaultMessage: 'Invierte en el futuro narrativo de tu marca: con un lenguaje narrativo propio y el poder de transformar tus comunicaciones' 
          })}"`}
        </p>
      </motion.div>
    </section>
  );
}


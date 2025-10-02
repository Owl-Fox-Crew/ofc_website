"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import {
  Film,
  Clapperboard,
  Megaphone,
  Video,
  Palette,
  Rocket,
} from "lucide-react";

export default function FormatGuide() {
  const intl = useIntl();

  const formats = [
    {
      question: intl.formatMessage({ id: "services.format.shortfilm.question" }),
      label: intl.formatMessage({ id: "services.format.shortfilm.label" }),
      href: "#shortfilm",
      icon: Film,
    },
    {
      question: intl.formatMessage({ id: "services.format.trailer.question" }),
      label: intl.formatMessage({ id: "services.format.trailer.label" }),
      href: "#trailer",
      icon: Clapperboard,
    },
    {
      question: intl.formatMessage({ id: "services.format.marketing.question" }),
      label: intl.formatMessage({ id: "services.format.marketing.label" }),
      href: "#marketing",
      icon: Megaphone,
    },
    {
      question: intl.formatMessage({ id: "services.format.documentary.question" }),
      label: intl.formatMessage({ id: "services.format.documentary.label" }),
      href: "#documentary",
      icon: Video,
    },
    {
      question: intl.formatMessage({ id: "services.format.animated.question" }),
      label: intl.formatMessage({ id: "services.format.animated.label" }),
      href: "#animated",
      icon: Palette,
    },
    {
      question: intl.formatMessage({ id: "services.format.activation.question" }),
      label: intl.formatMessage({ id: "services.format.activation.label1" }),
      href: "#launch",
      label2: intl.formatMessage({ id: "services.format.activation.label2" }),
      href2: "#experience360",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-16 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "services.format.title" })}
        </h2>
      </div>

      {/* Texto introductorio en nube gris */}
      <div className="max-w-6xl mx-auto mb-14">
        <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
          <p className="text-[1.40rem] font-semibold text-white/85 text-center leading-snug">
            {intl.formatMessage({ id: "services.format.intro" })}
          </p>
        </div>
      </div>

      {/* Grid de microsecciones 2x3 */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {formats.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="group rounded-2xl border-2 border-brand-purple p-6 bg-white/5 backdrop-blur-md shadow-lg flex items-start gap-4 transition-all duration-300 hover:border-4 hover:border-brand-orange"
          >
            {/* Icono */}
            <item.icon className="w-8 h-8 text-brand-purple transition-colors duration-300 group-hover:text-brand-orange" />

            {/* Texto */}
            <div className="flex-1">
              <p className="text-lg md:text-xl text-white/90 mb-3 leading-snug">
                {item.question}
              </p>
              {/* Uno o dos CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={item.href}
                  className="inline-block text-brand-blue font-semibold hover:text-brand-orange transition-colors"
                >
                  {item.label} →
                </a>
                {item.label2 && item.href2 && (
                  <a
                    href={item.href2}
                    className="inline-block text-brand-blue font-semibold hover:text-brand-orange transition-colors"
                  >
                    {item.label2} →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

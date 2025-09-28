"use client";

import { motion } from "framer-motion";
import { Handshake, Brain, BarChart, Search, Compass, Bot } from "lucide-react";
import { useIntl } from "react-intl";

export default function ValueOffer() {
  const intl = useIntl();

  const benefits = [
    { icon: Handshake, title: intl.formatMessage({ id: "ValueOffer.benefit1.title" }), subtitle: intl.formatMessage({ id: "ValueOffer.benefit1.subtitle" }) },
    { icon: Bot, title: intl.formatMessage({ id: "ValueOffer.benefit2.title" }), subtitle: intl.formatMessage({ id: "ValueOffer.benefit2.subtitle" }) },
    { icon: BarChart, title: intl.formatMessage({ id: "ValueOffer.benefit3.title" }), subtitle: intl.formatMessage({ id: "ValueOffer.benefit3.subtitle" }) },
    { icon: Brain, title: intl.formatMessage({ id: "ValueOffer.benefit4.title" }), subtitle: intl.formatMessage({ id: "ValueOffer.benefit4.subtitle" }) },
    { icon: Search, title: intl.formatMessage({ id: "ValueOffer.benefit5.title" }), subtitle: intl.formatMessage({ id: "ValueOffer.benefit5.subtitle" }) },
    { icon: Compass, title: intl.formatMessage({ id: "ValueOffer.benefit6.title" }), subtitle: intl.formatMessage({ id: "ValueOffer.benefit6.subtitle" }) },
  ];

  return (
    <section className="w-full bg-black text-white pt-6 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Título */}
      <h2 className="text-center -mt-4 mb-20">
        <span className="block text-5xl md:text-6xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "ValueOffer.title.line1" })}
        </span>
        <span className="block text-4xl md:text-5xl font-semibold text-white mt-2">
          {intl.formatMessage({ id: "ValueOffer.title.line2" })}
        </span>
      </h2>

      {/* Grid Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.1, delay: index * 0.01 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className="group flex flex-col items-center text-center p-5 border border-white/10 rounded-xl transition-all duration-200 hover:bg-brand-purple hover:shadow-lg hover:shadow-brand-purple/30"
            >
              <Icon className="w-14 h-14 mb-4 text-white stroke-[2.5] transition-colors duration-300 group-hover:text-brand-blue" />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-lg font-medium">{item.subtitle}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Slider Mobile */}
      <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-20">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className="group flex-none w-64 snap-center p-5 border border-white/10 rounded-xl bg-black/80 transition-all duration-200 hover:bg-brand-purple hover:shadow-lg hover:shadow-brand-purple/30"
            >
              <Icon className="w-14 h-14 mb-4 text-white stroke-[2.5] transition-colors duration-300 group-hover:text-brand-blue" />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-lg font-medium">{item.subtitle}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Closing sentence */}
      <p className="mt-0 text-center text-brand-blue text-2xl italic font-light max-w-2xl mx-auto">
        {`"${intl.formatMessage({ id: "ValueOffer.closing" })}"`}
      </p>
    </section>
  );
}

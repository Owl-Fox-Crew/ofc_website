"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function PricingIntro() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-4 md:px-8 lg:px-12 py-6 overflow-hidden">
      {/* Título global */}
      <div className="text-center mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "pricing.intro.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/85 mt-2">
          {intl.formatMessage({ id: "pricing.intro.subtitle" })}
        </h3>
      </div>

      {/* Grid con 4 bloques narrativos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 max-w-[115rem] lg:max-w-[105rem] md:max-w-[90rem] mx-auto px-2 md:px-0 mt-8 md:mt-12 lg:mt-14 items-stretch">
        
        {/* Bloque 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-stretch gap-2 md:gap-4 w-full"
        >
          <div className="flex-[1.2] rounded-2xl overflow-hidden bg-gray-700">
            <img
              src="/images/pricing/intro-1.png"
              alt={intl.formatMessage({ id: "pricing.intro.block1.alt" })}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-[2.4] rounded-2xl border-2 border-brand-purple hover:border-brand-blue hover:border-4 transition-all duration-200 p-6 md:p-7 backdrop-blur-md flex flex-col justify-center">
            <h4 className="text-[30px] font-bold text-brand-orange leading-[1.1]">
              {intl.formatMessage({ id: "pricing.intro.block1.title" })}
            </h4>
            <h5 className="text-[22px] font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.intro.block1.subtitle" })}
            </h5>
            <p className="text-white/85 mt-6 text-base md:text-lg font-medium leading-relaxed">
              {intl.formatMessage({ id: "pricing.intro.block1.text" })}
            </p>
          </div>
        </motion.div>

        {/* Bloque 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col-reverse md:flex-row items-stretch gap-2 md:gap-4 w-full"
        >
          <div className="flex-[2.5] rounded-2xl border-2 border-brand-purple hover:border-brand-blue hover:border-4 transition-all duration-200 p-6 md:p-7 backdrop-blur-md flex flex-col justify-center text-right">
            <h4 className="text-[30px] font-bold text-brand-orange leading-[1.1]">
              {intl.formatMessage({ id: "pricing.intro.block2.title" })}
            </h4>
            <h5 className="text-[22px] font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.intro.block2.subtitle" })}
            </h5>
            <p className="text-white/85 mt-6 text-base md:text-lg font-medium leading-relaxed">
              {intl.formatMessage({ id: "pricing.intro.block2.text" })}
            </p>
          </div>
          <div className="flex-[1.2] rounded-2xl overflow-hidden bg-gray-700">
            <img
              src="/images/pricing/intro-2.png"
              alt={intl.formatMessage({ id: "pricing.intro.block2.alt" })}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Bloque 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-stretch gap-2 md:gap-4 w-full"
        >
          <div className="flex-[1.2] rounded-2xl overflow-hidden bg-gray-700">
            <img
              src="/images/pricing/intro-3.png"
              alt={intl.formatMessage({ id: "pricing.intro.block3.alt" })}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-[2.4] rounded-2xl border-2 border-brand-purple hover:border-brand-blue hover:border-4 transition-all duration-200 p-6 md:p-7 backdrop-blur-md flex flex-col justify-center">
            <h4 className="text-[30px] font-bold text-brand-orange leading-[1.1]">
              {intl.formatMessage({ id: "pricing.intro.block3.title" })}
            </h4>
            <h5 className="text-[22px] font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.intro.block3.subtitle" })}
            </h5>
            <p className="text-white/85 mt-6 text-base md:text-lg font-medium leading-relaxed">
              {intl.formatMessage({ id: "pricing.intro.block3.text" })}
            </p>
          </div>
        </motion.div>

        {/* Bloque 4 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col-reverse md:flex-row items-stretch gap-2 md:gap-4 w-full"
        >
          <div className="flex-[2.4] rounded-2xl border-2 border-brand-purple hover:border-brand-blue hover:border-4 transition-all duration-200 p-6 md:p-7 backdrop-blur-md flex flex-col justify-center text-right">
            <h4 className="text-[30px] font-bold text-brand-orange leading-[1.1]">
              {intl.formatMessage({ id: "pricing.intro.block4.title" })}
            </h4>
            <h5 className="text-[22px] font-semibold text-brand-blue mt-1">
              {intl.formatMessage({ id: "pricing.intro.block4.subtitle" })}
            </h5>
            <p className="text-white/85 mt-6 text-base md:text-lg font-medium leading-relaxed">
              {intl.formatMessage({ id: "pricing.intro.block4.text" })}
            </p>
          </div>
          <div className="flex-[1.2] rounded-2xl overflow-hidden bg-gray-700">
            <img
              src="/images/pricing/intro-4.png"
              alt={intl.formatMessage({ id: "pricing.intro.block4.alt" })}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

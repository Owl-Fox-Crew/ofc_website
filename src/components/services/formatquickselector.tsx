"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntl } from "react-intl";
import { Film, Clapperboard, Megaphone, Video, Palette } from "lucide-react";

export default function FormatQuickSelector() {
  const intl = useIntl();
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [showResult, setShowResult] = useState(false);

  const formatMapping: Record<
    string,
    { label: string; description: string; icon: JSX.Element; href: string }
  > = {
    shortfilm: {
      label: intl.formatMessage({ id: "services.quick.shortfilm.label" }),
      description: intl.formatMessage({ id: "services.quick.shortfilm.desc" }),
      icon: <Film className="w-8 h-8 text-brand-orange" />,
      href: "shortfilm",
    },
    marketing: {
      label: intl.formatMessage({ id: "services.quick.marketing.label" }),
      description: intl.formatMessage({ id: "services.quick.marketing.desc" }),
      icon: <Megaphone className="w-8 h-8 text-brand-orange" />,
      href: "marketing",
    },
    animated: {
      label: intl.formatMessage({ id: "services.quick.animated.label" }),
      description: intl.formatMessage({ id: "services.quick.animated.desc" }),
      icon: <Palette className="w-8 h-8 text-brand-orange" />,
      href: "animated",
    },
    documentary: {
      label: intl.formatMessage({ id: "services.quick.documentary.label" }),
      description: intl.formatMessage({ id: "services.quick.documentary.desc" }),
      icon: <Video className="w-8 h-8 text-brand-orange" />,
      href: "documentary",
    },
    trailer: {
      label: intl.formatMessage({ id: "services.quick.trailer.label" }),
      description: intl.formatMessage({ id: "services.quick.trailer.desc" }),
      icon: <Clapperboard className="w-8 h-8 text-brand-orange" />,
      href: "trailer",
    },
  };

  const handleSubmit = () => {
    if (step1 && step2) setShowResult(true);
  };

  const selected = [step1, step2].filter(Boolean);
  const uniqueResults = [...new Set(selected)].map((key) => formatMapping[key]);

  const message =
    uniqueResults.length > 1
      ? intl.formatMessage({ id: "services.quick.result.multiple" })
      : intl.formatMessage({ id: "services.quick.result.single" });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-6 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "services.quick.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/85 mt-2">
          {intl.formatMessage({ id: "services.quick.subtitle" })}
        </h3>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto mb-14">
        <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
          <p className="text-[1.375rem] font-semibold text-white/85 text-center leading-snug">
            {intl.formatMessage({ id: "services.quick.intro" })}
          </p>
        </div>
      </div>

      {/* Quiz */}
      <div className="max-w-[55rem] mx-auto bg-white/5 border-2 border-brand-blue rounded-2xl p-10 backdrop-blur-md shadow-lg">
        <div className="space-y-6">
          {/* Pregunta 1 */}
          <div className="relative group">
            <label className="block text-lg font-semibold text-white mb-2">
              {intl.formatMessage({ id: "services.quick.q1" })}
            </label>
            <div className="relative">
              <select
                value={step1}
                onChange={(e) => setStep1(e.target.value)}
                className="w-full h-12 pl-3 pr-10 rounded-xl bg-black/50 border border-white/20 text-white appearance-none"
              >
                <option value="">
                  {intl.formatMessage({ id: "services.quick.select" })}
                </option>
                <option value="shortfilm">
                  {intl.formatMessage({ id: "services.quick.q1.shortfilm" })}
                </option>
                <option value="marketing">
                  {intl.formatMessage({ id: "services.quick.q1.marketing" })}
                </option>
                <option value="animated">
                  {intl.formatMessage({ id: "services.quick.q1.animated" })}
                </option>
                <option value="documentary">
                  {intl.formatMessage({ id: "services.quick.q1.documentary" })}
                </option>
                <option value="trailer">
                  {intl.formatMessage({ id: "services.quick.q1.trailer" })}
                </option>
              </select>
              <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-xs text-white group-hover:text-brand-orange transition-colors">
                ▼
              </span>
            </div>
          </div>

          {/* Pregunta 2 */}
          <div className="relative group">
            <label className="block text-lg font-semibold text-white mb-2">
              {intl.formatMessage({ id: "services.quick.q2" })}
            </label>
            <div className="relative">
              <select
                value={step2}
                onChange={(e) => setStep2(e.target.value)}
                className="w-full h-12 pl-3 pr-10 rounded-xl bg-black/50 border border-white/20 text-white appearance-none"
              >
                <option value="">
                  {intl.formatMessage({ id: "services.quick.select" })}
                </option>
                <option value="shortfilm">
                  {intl.formatMessage({ id: "services.quick.q2.shortfilm" })}
                </option>
                <option value="documentary">
                  {intl.formatMessage({ id: "services.quick.q2.documentary" })}
                </option>
                <option value="animated">
                  {intl.formatMessage({ id: "services.quick.q2.animated" })}
                </option>
                <option value="trailer">
                  {intl.formatMessage({ id: "services.quick.q2.trailer" })}
                </option>
                <option value="marketing">
                  {intl.formatMessage({ id: "services.quick.q2.marketing" })}
                </option>
              </select>
              <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-xs text-white group-hover:text-brand-orange transition-colors">
                ▼
              </span>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
            className="w-full px-6 py-3 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-md hover:bg-brand-orange hover:text-white transition-colors"
          >
            {intl.formatMessage({ id: "services.quick.cta" })}
          </motion.button>
        </div>
      </div>

      {/* Resultado */}
      <AnimatePresence>
        {showResult && uniqueResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mt-12 bg-white/10 border-2 border-brand-orange rounded-2xl p-8 shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-bold text-brand-orange mb-4">
              {message}
            </h3>

            {uniqueResults.map((res, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">{res.icon}</div>
                <div className="flex flex-col">
                  <p className="text-lg text-white/90">
                    <span className="font-semibold">{res.label}:</span>{" "}
                    {res.description}
                  </p>
                  {uniqueResults.length > 1 ? (
                    <button
                      onClick={() => handleScroll(res.href)}
                      className="mt-2 text-brand-blue font-semibold hover:text-brand-orange transition-colors text-left"
                    >
                      {intl.formatMessage({ id: "services.quick.result.cta.multi" })}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleScroll(res.href)}
                      className="mt-2 text-brand-blue font-semibold hover:text-brand-orange transition-colors text-left"
                    >
                      {intl.formatMessage({ id: "services.quick.result.cta.single" })}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

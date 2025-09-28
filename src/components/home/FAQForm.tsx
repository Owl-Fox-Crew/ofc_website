"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function FAQForm() {
  const [submitted, setSubmitted] = useState(false);
  const intl = useIntl();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-10 overflow-hidden">
      {/* Encabezado */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange mb-3">
          {intl.formatMessage({ id: "faqForm.title" })}
        </h2>
        <h3 className="text-3xl md:text-5xl font-semibold text-brand-blue mt-2 mb-6">
          {intl.formatMessage({ id: "faqForm.subtitle" })}
        </h3>
        <p className="text-3xl font-bold text-white/85 max-w-5xl mx-auto mt-8">
          {intl.formatMessage({ id: "faqForm.description" })}
        </p>
      </motion.div>

      {/* Formulario */}
      <div className="relative max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-10">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-lg font-semibold text-brand-orange mb-2">
                {intl.formatMessage({ id: "faqForm.fields.name" })}
              </label>
              <input
                type="text"
                required
                placeholder={intl.formatMessage({ id: "faqForm.placeholders.name" })}
                className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-lg font-semibold text-brand-orange mb-2">
                {intl.formatMessage({ id: "faqForm.fields.email" })}
              </label>
              <input
                type="email"
                required
                placeholder={intl.formatMessage({ id: "faqForm.placeholders.email" })}
                className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            {/* Marca / Proyecto */}
            <div>
              <label className="block text-lg font-semibold text-brand-orange mb-2">
                {intl.formatMessage({ id: "faqForm.fields.brand" })}{" "}
                <span className="text-white/40 font-normal">
                  ({intl.formatMessage({ id: "faqForm.optional" })})
                </span>
              </label>
              <input
                type="text"
                placeholder={intl.formatMessage({ id: "faqForm.placeholders.brand" })}
                className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            {/* Pregunta */}
            <div>
              <label className="block text-lg font-semibold text-brand-orange mb-2">
                {intl.formatMessage({ id: "faqForm.fields.question" })}
              </label>
              <textarea
                required
                rows={4}
                placeholder={intl.formatMessage({ id: "faqForm.placeholders.question" })}
                className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              ></textarea>
            </div>

            {/* Botón */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 rounded-2xl bg-brand-blue text-white font-semibold text-lg shadow-lg shadow-brand-blue/30 transition-colors hover:bg-brand-purple"
            >
              {intl.formatMessage({ id: "faqForm.submit" })}
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-orange mb-3">
              {intl.formatMessage({ id: "faqForm.success.title" })}
            </h3>
            <p className="text-lg text-white/85 max-w-xl mx-auto">
              {intl.formatMessage({ id: "faqForm.success.message" })}
            </p>
          </motion.div>
        )}

        {/* Nota al pie */}
        {!submitted && (
          <p className="text-sm text-white/50 mt-6 text-center italic">
            {intl.formatMessage({ id: "faqForm.footerNote" })}
          </p>
        )}
      </div>
    </section>
  );
}

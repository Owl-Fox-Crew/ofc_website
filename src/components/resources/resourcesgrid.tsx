"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function ResourcesGrid() {
  const intl = useIntl();
  const initialVisible = 9; // estado inicial: 3 filas de 3
  const increment = 6; // mostrar siempre 2 filas (6 recursos)

  const [visible, setVisible] = useState(initialVisible);

  const resources = Array.from({ length: 9 }).map((_, i) => ({
    title: intl.formatMessage({ id: `resources.grid.items.${i + 1}.title` }),
    description: intl.formatMessage({ id: `resources.grid.items.${i + 1}.description` }),
    image: `/images/resources/resource-${i + 1}.png`,
    alt: intl.formatMessage({ id: `resources.grid.items.${i + 1}.alt` }),
  }));

  const showMore = () => {
    setVisible((prev) => Math.min(prev + increment, resources.length));
  };

  const showLess = () => {
    setVisible(initialVisible);
  };

  const allVisible = visible >= resources.length;
  const noMoreContent = resources.length <= initialVisible;

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-4 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 md:mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "resources.grid.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/85 max-w-7xl mx-auto leading-snug mt-2 mb-6">
          {intl.formatMessage({ id: "resources.grid.subtitle" })}
        </h3>
      </div>

      {/* Grid de recursos */}
      <div className="grid md:grid-cols-3 gap-5 mt-14 max-w-[104rem] mx-auto">
        {resources.slice(0, visible).map((resource, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Imagen */}
            <img
              src={resource.image}
              alt={resource.alt}
              className="w-full h-64 object-cover"
            />

            {/* Overlay general */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300"></div>

            {/* Contenido superpuesto */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <h3 className="text-xl font-bold text-brand-orange mb-2">
                {resource.title}
              </h3>
              <p className="text-base text-white/85 leading-snug">
                {resource.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botón Mostrar más / Mostrar menos */}
      <div className="flex justify-center mt-16">
        {noMoreContent ? (
          <button
            disabled
            className="px-6 py-3 rounded-2xl bg-gray-600/40 text-white/50 font-semibold cursor-not-allowed"
          >
            {intl.formatMessage({ id: "resources.grid.noMore" })}
          </button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={allVisible ? showLess : showMore}
            className="px-6 py-3 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-orange hover:text-white"
          >
            {allVisible
              ? intl.formatMessage({ id: "resources.grid.showLess" })
              : intl.formatMessage({ id: "resources.grid.showMore" })}
          </motion.button>
        )}
      </div>
    </section>
  );
}

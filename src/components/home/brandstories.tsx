"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormattedMessage } from "react-intl";

export default function BrandStories() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const stories = [
    {
      titleId: "brandStories.cards.0.title",
      subtitleId: "brandStories.cards.0.subtitle",
      video: "/videos/BrandStories/TestVideo-Web.mp4",
    },
    {
      titleId: "brandStories.cards.1.title",
      subtitleId: "brandStories.cards.1.subtitle",
      video: "/videos/BrandStories/TestVideo-Web.mp4",
    },
    {
      titleId: "brandStories.cards.2.title",
      subtitleId: "brandStories.cards.2.subtitle",
      video: "/videos/BrandStories/TestVideo-Web.mp4",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-10 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-14 md:mb-10">
        <h2 className="text-5xl md:text-6xl font-bold text-brand-orange">
          <FormattedMessage id="brandStories.sectionTitle" />
        </h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-white/85 mt-2">
          <FormattedMessage id="brandStories.sectionSubtitle" />
        </h3>
      </div>

      {/* Rejilla de videos */}
      <div className="grid md:grid-cols-3 gap-1.5 mt-16 max-w-[104rem] mx-auto">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-700 cursor-pointer group z-0 hover:z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            onClick={() => setActiveVideo(i)}
          >
            {/* Placeholder / fondo del video */}
            <video
              src={story.video}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay con textos */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-[2.5rem] md:text-[2.5rem] font-bold text-white -mb-4">
                <FormattedMessage id={story.titleId} />
              </h3>
              <p className="text-[1.2rem] md:text-[1.8rem] font-bold tracking-tight text-brand-orange">
                <FormattedMessage id={story.subtitleId} />
              </p>
            </div>

            {/* Botón Play */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-white/80 hover:bg-white text-black rounded-full shadow-lg transition">
                ▶
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de video */}
      <AnimatePresence>
        {activeVideo !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-4 z-50 text-white text-3xl font-bold"
                >
                  ×
                </button>

                <video
                  src={stories[activeVideo].video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CTA Final */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl md:text-3xl font-medium text-brand-blue mb-6">
          <FormattedMessage id="brandStories.cta.text" />
        </p>
        <motion.div
          whileHover={{ scale: 1.075 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="/contacto"
            className="inline-block px-8 py-4 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
          >
            <FormattedMessage id="brandStories.cta.button" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

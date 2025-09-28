"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntl } from "react-intl";

interface Story {
  title: string;
  format: string;
  description: string;
  video: string;
  thumbnail: string;
  alt: string;
}

export default function StoriesGallery() {
  const intl = useIntl();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const stories: Story[] = Array.from({ length: 3 }).map((_, i) => ({
    title: intl.formatMessage({ id: `stories.gallery.items.${i + 1}.title` }),
    format: intl.formatMessage({ id: `stories.gallery.items.${i + 1}.format` }),
    description: intl.formatMessage({ id: `stories.gallery.items.${i + 1}.description` }),
    video: `/videos/stories/gallery-0${i + 1}.mp4`,
    thumbnail: `/images/stories/gallery-0${i + 1}.png`,
    alt: intl.formatMessage({ id: `stories.gallery.items.${i + 1}.alt` }),
  }));

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 md:mb-18">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange mt-4">
          {intl.formatMessage({ id: "stories.gallery.title" })}
        </h2>
        <h3 className="mx-auto max-w-7xl text-3xl md:text-5xl font-semibold text-white/85 mt-2 text-center leading-snug">
          {intl.formatMessage({ id: "stories.gallery.subtitle" })}
        </h3>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-5 max-w-[104rem] mx-auto -mb-12">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-800 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setActiveVideo(i)}
          >
            {/* Thumbnail */}
            <img
              src={story.thumbnail}
              alt={story.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay con detalles */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-right">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {story.title}
              </h3>
              <p className="text-sm font-semibold text-brand-orange">
                {story.format}
              </p>
              <p className="text-sm text-white/85 mt-1">{story.description}</p>
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
            {/* Fondo blur */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            />

            {/* Contenedor del video */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Botón de cierre */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-4 z-50 text-white text-3xl font-bold"
                >
                  ×
                </button>

                {/* Video */}
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
    </section>
  );
}

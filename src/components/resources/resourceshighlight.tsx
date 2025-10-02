"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function ResourcesHighlight() {
  const intl = useIntl();

  const highlights = [
    {
      title: intl.formatMessage({ id: "resources.highlight.blog.title" }),
      description: intl.formatMessage({ id: "resources.highlight.blog.description" }),
      image: "/images/resources/highlight-blog.png",
      alt: intl.formatMessage({ id: "resources.highlight.blog.alt" }),
      link: "/blog",
    },
    {
      title: intl.formatMessage({ id: "resources.highlight.podcast.title" }),
      description: intl.formatMessage({ id: "resources.highlight.podcast.description" }),
      image: "/images/resources/highlight-podcast.png",
      alt: intl.formatMessage({ id: "resources.highlight.podcast.alt" }),
      link: "https://youtube.com",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-16 overflow-hidden">
      {/* Grid de Highlights */}
      <div className="grid md:grid-cols-2 gap-6 max-w-[104rem] mx-auto mt-0">
        {highlights.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Imagen más alta */}
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay general */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

            {/* Contenido alineado abajo */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-10">
              <h3 className="text-3xl font-bold text-brand-orange mb-2">
                {item.title}
              </h3>
              <p className="text-2xl text-white/85 leading-snug">
                {item.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

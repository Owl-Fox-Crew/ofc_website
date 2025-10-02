"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function CommunicationKeysCarousel() {
  const intl = useIntl();

  // Cargar slides desde index.json
  const items = Array.from({ length: 6 }, (_, i) => ({
    key: intl.formatMessage({ id: `communicationKeys.slides.${i}.key` }),
    title: intl.formatMessage({ id: `communicationKeys.slides.${i}.title` }),
    phrase: intl.formatMessage({ id: `communicationKeys.slides.${i}.phrase` }),
    sub: intl.formatMessage({ id: `communicationKeys.slides.${i}.subtitle` }),
    img: intl.formatMessage({ id: `communicationKeys.slides.${i}.image` })
  }));

  const len = items.length;
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + len) % len);
  const next = () => setActive((a) => (a + 1) % len);
  const goTo = (i: number) => setActive(i);

  const signedDist = (i: number) => {
    const raw = (i - active + len) % len;
    return raw > len / 2 ? raw - len : raw;
  };

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 mt-12 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-14 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "communicationKeys.title" })}
        </h2>
        <h3 className="text-3xl md:text-5xl font-semibold text-white/85 mt-2">
          {intl.formatMessage({ id: "communicationKeys.subtitle" })}
        </h3>
      </div>

      {/* Carrusel */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        <div
          className="relative flex items-center justify-center w-full aspect-[17/9] mb-6"
          style={{ perspective: "1800px" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {items.map((it, i) => {
              const d = signedDist(i);

              let scale = 0.42,
                x = d * 34,
                rotY = d * -12,
                z = -220,
                opacity = 0.25,
                blur = "blur(0px)";

              if (d === 0) {
                scale = 1;
                x = 0;
                rotY = 0;
                z = 0;
                opacity = 1;
              } else if (Math.abs(d) === 1) {
                scale = 0.55;
                x = d * 44;
                z = -140;
                opacity = 0.9;
                blur = "blur(2px)";
              }

              // No renderizar la tercera posición
              if (Math.abs(d) === 3) return null;

              const shadow =
                d === 0
                  ? "0 25px 60px -20px rgba(120, 120, 120, 0.35)"
                  : "0 15px 40px -15px rgba(100, 100, 100, 0.25)";

              return (
                <motion.article
                  key={it.key}
                  aria-hidden={Math.abs(d) > 2}
                  className={`absolute w-[92%] md:w-[84%] lg:w-[82%] rounded-2xl overflow-hidden border border-white/10 pointer-events-auto transition-opacity duration-300 ${
                    Math.abs(d) > 2 ? "opacity-0 pointer-events-none" : ""
                  }`}
                  style={{
                    opacity,
                    filter: blur,
                    boxShadow: shadow,
                    transformStyle: "preserve-3d",
                    transform: `translateX(${x}%) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`,
                    zIndex: d === 0 ? 3 : Math.abs(d) === 1 ? 2 : 1
                  }}
                  animate={{
                    transform: `translateX(${x}%) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`,
                    opacity
                  }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                >
                  {d === 0 ? (
                    <motion.img
                      src={`/images/CommunicationKeys/${it.img}`}
                      alt={it.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1, filter: "saturate(1)" }}
                      whileHover={{ scale: 1.05, filter: "saturate(1.15)" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  ) : (
                    <img
                      src={`/images/CommunicationKeys/${it.img}`}
                      alt={it.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {d === 0 && (
                    <>
                      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                      <motion.div
                        className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="text-brand-orange text-lg md:text-xl tracking-wider uppercase font-bold">
                          {it.title}
                        </div>
                        <h3 className="mt-1 text-3xl md:text-4xl font-semibold leading-tight text-white">
                          {it.phrase}
                        </h3>
                        <p className="mt-2 text-lg md:text-x1 text-white/85 leading-relaxed max-w-prose">
                          {it.sub}
                        </p>
                      </motion.div>
                    </>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Flechas + Dots */}
        <div className="flex items-center justify-center gap-4 -mt-6 group">
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 opacity-50 group-hover:opacity-100 hover:bg-white/20 transition-opacity"
            aria-label={intl.formatMessage({ id: "carousel.prev" })}
            onClick={prev}
          >
            &lt;
          </button>

          <div className="flex items-center justify-center gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={intl.formatMessage(
                  { id: "carousel.goTo" },
                  { index: i + 1 }
                )}
                aria-current={i === active ? "true" : undefined}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === active
                    ? "bg-brand-blue scale-110"
                    : "bg-white/25 hover:bg-white/25"
                }`}
              />
            ))}
          </div>

          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 opacity-50 group-hover:opacity-100 hover:bg-white/20 transition-opacity"
            aria-label={intl.formatMessage({ id: "carousel.next" })}
            onClick={next}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-14 md:mt-18"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl md:text-3xl font-medium text-brand-blue mb-6">
          {intl.formatMessage({ id: "communicationKeys.ctaIntro" })}
        </p>
        <motion.div
          whileHover={{ scale: 1.075 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href={intl.formatMessage({ id: "communicationKeys.ctaHref" })}
            className="inline-block px-8 py-4 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
          >
            {intl.formatMessage({ id: "communicationKeys.ctaButton" })}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

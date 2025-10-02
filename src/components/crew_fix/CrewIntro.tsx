"use client";

import React from "react";
import { useIntl } from "react-intl";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

/* === CONFIGURACIÓN GLOBAL DE ANIMACIONES === */
const ANIM_DURATION = 0.6;
const ANIM_DELAY_STEP = 0.15;
const EASE_CURVE = [0.22, 1, 0.36, 1];

const HOVER_SCALE = 1.04;
const HOVER_TRANSITION = { duration: 0.4, ease: "easeOut" };

const PARALLAX_Y_DESKTOP = ["-5%", "5%"];
const PARALLAX_Y_MOBILE = ["-2%", "2%"];
const PARALLAX_STIFFNESS = 40;
const PARALLAX_DAMPING = 25;

const OVERLAY_START_OPACITY = 0.6;

/* === VARIANTES DE ANIMACIÓN === */
const fadeParent = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIM_DURATION, ease: EASE_CURVE, staggerChildren: ANIM_DELAY_STEP },
  },
};

const fadeChild = (direction: "left" | "right" = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -24 : 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIM_DURATION, ease: EASE_CURVE },
  },
});

/* === COMPONENTE DE IMAGEN CINEMÁTICA === */
const CinematicImage = ({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const yRange = useTransform(scrollYProgress, [0, 1], isMobile ? PARALLAX_Y_MOBILE : PARALLAX_Y_DESKTOP);
  const ySmooth = useSpring(yRange, { stiffness: PARALLAX_STIFFNESS, damping: PARALLAX_DAMPING });

  const blur = useTransform(scrollYProgress, [0, 0.2], ["10px", "0px"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [OVERLAY_START_OPACITY, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y: ySmooth }}
      className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-900"
      whileHover={!isMobile ? { scale: HOVER_SCALE } : {}}
      transition={HOVER_TRANSITION}
    >
      <motion.div style={{ filter: blur }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 720px"
          className="object-cover object-center will-change-transform"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0 pointer-events-none"
      />
    </motion.div>
  );
};

/* === COMPONENTE PRINCIPAL === */
const CrewIntro = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "crew.intro.header.title" });
  const subtitle = intl.formatMessage({ id: "crew.intro.header.subtitle" });
  const closing = intl.formatMessage({ id: "crew.intro.quote" });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cards = Array.from({ length: 5 }).map((_, i) => ({
    line1: intl.formatMessage({ id: `crew.intro.card${i + 1}.line1` }),
    line2: intl.formatMessage({ id: `crew.intro.card${i + 1}.line2` }),
    subtitle: intl.formatMessage({ id: `crew.intro.card${i + 1}.subtitle` }),
    description: intl.formatMessage({ id: `crew.intro.card${i + 1}.description` }),
    image: `/images/Crew/crew-intro-0${i + 1}.png`,
  }));

  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        variants={fadeParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-14 md:mb-20 max-w-4xl lg:max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          <span className="text-brand-orange text-5xl md:text-6xl">{title}</span>
          <br />
          <span className="text-muted-foreground">{subtitle}</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="mx-auto max-w-6xl space-y-12 md:space-y-16">
        {cards.map((card, index) => {
          const isEven = index % 2 === 0;
          const altText = `${card.line1} ${card.line2} – ${card.description}`.trim();
          const textAlign = isEven ? "text-left" : "text-right";

          return (
            <motion.article
              key={index}
              variants={fadeParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid items-center gap-6 md:gap-10 lg:gap-12 md:grid-cols-12"
            >
              {/* Imagen */}
              <div className={`${isEven ? "md:col-span-7 order-1" : "md:col-span-7 md:order-2 order-1"}`}>
                <CinematicImage
                  src={card.image}
                  alt={altText}
                  priority={index === 0}
                />
              </div>

              {/* Texto */}
              <motion.div
                variants={fadeParent}
                className={`md:col-span-5 flex flex-col ${isEven ? "order-2" : "md:order-1 order-2"} ${textAlign}`}
              >
                <div className="flex flex-col gap-1">
                  <motion.h3 variants={fadeChild(isEven ? "left" : "right")} className="text-3xl md:text-4xl font-bold text-brand-orange">
                    {card.line1}
                  </motion.h3>
                  <motion.p variants={fadeChild(isEven ? "left" : "right")} className="text-xl md:text-2xl font-medium text-brand-blue">
                    {card.line2}
                  </motion.p>
                </div>
                <motion.p variants={fadeChild(isEven ? "left" : "right")} className="mt-4 text-base md:text-lg text-muted-foreground">
                  {card.description}
                </motion.p>
              </motion.div>
            </motion.article>
          );
        })}
      </div>

      {/* Frase final */}
      <p className="mt-20 text-center text-brand-blue text-4xl font-bold max-w-3xl mx-auto">
        {`"${closing}"`}
      </p>
    </section>
  );
};

export default CrewIntro;


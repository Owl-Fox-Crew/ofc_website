// src/components/services/FormatSolutions.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Film,
  Clapperboard,
  Megaphone,
  Video,
  Palette,
  Rocket,
  Infinity as InfinityIcon,
} from "lucide-react";
import { useIntl } from "react-intl";

/* ====== Ajustes de animación ====== */
const ANIM_DURATION = 0.6;
const EASE = [0.22, 1, 0.36, 1] as const;
const HOVER_SCALE = 1.04;

const fadeParent = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIM_DURATION, ease: EASE, staggerChildren: 0.12 },
  },
};

/* ====== Imagen con parallax ====== */
function CinematicImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]), {
    stiffness: 40,
    damping: 22,
  });
  const blur = useTransform(scrollYProgress, [0, 0.18], ["8px", "0px"]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      whileHover={{ scale: HOVER_SCALE }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl bg-neutral-900 h-full shadow-lg"
    >
      <motion.div style={{ filter: blur }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 720px"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
    </motion.div>
  );
}

/* ====== Tipos de especificaciones ====== */
const SPEC_KEYS = [
  "duration",
  "tone",
  "ideal",
  "music",
  "strategy",
  "challenge",
  "connection",
  "emotion",
] as const;
type SpecKey = typeof SPEC_KEYS[number];

/* ====== Tipos de fases (sin acentos para claves) ====== */
type PhaseKey =
  | "DefaultActivacion"
  | "DefaultExperiencia"
  | "Preparacion"
  | "Impulso"
  | "Lanzamiento"
  | "Medicion"
  | "Entrega"
  | "Planeacion"
  | "Produccion"
  | "Activaciones"
  | "Analisis"
  | "Evolucion";

/* ====== Tipos de bloques ====== */
type Block = {
  id: "shortfilm" | "trailer" | "marketing" | "documentary" | "animated" | "lanzamiento" | "experiencia";
  kind: "format" | "service";
  title: string;
  highlight: string;
  icon: React.ReactNode;
  image: string;
  summary: string | string[];
  ctaLabel: string;
  specs?: Record<SpecKey, string>;
};

/* ====== CTA mini-card ====== */
function MiniCTA({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="group mt-6 inline-flex items-center gap-3 rounded-2xl border-2 border-brand-purple/90 bg-black/60 px-4 py-3 shadow-md hover:border-brand-orange"
    >
      <span className="text-brand-purple group-hover:text-brand-orange transition-colors">
        {icon}
      </span>
      <span className="text-brand-blue font-semibold group-hover:text-brand-orange transition-colors">
        {label} →
      </span>
    </motion.a>
  );
}

/* ====== Tabla interna de cada formato ====== */
function SpecTable({
  specs,
  getLabel,
}: {
  specs: Record<SpecKey, string>;
  getLabel: (k: SpecKey) => string;
}) {
  return (
    <div className="mt-6 rounded-2xl border-2 border-brand-purple/60 bg-white/5 backdrop-blur-md shadow-lg w-full">
      <table className="w-full text-left text-sm md:text-base">
        <tbody>
          {SPEC_KEYS.map((field) => (
            <tr key={field} className="border-b border-white/10 last:border-none">
              <td className="p-3 font-medium text-white/90">{getLabel(field)}</td>
              <td className="p-3 text-white/80">{specs[field]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ====== MicroTimeline para acompañamientos (recibe funciones de i18n) ====== */
function MicroTimeline({
  phases,
  defaultKey,
  getLabel,
  getContent,
}: {
  phases: PhaseKey[];
  defaultKey: PhaseKey;
  getLabel: (k: PhaseKey) => string;
  getContent: (k: PhaseKey) => { title: string; subtitle: string; text: string };
}) {
  const [activePhase, setActivePhase] = React.useState<PhaseKey | null>(null);

  const content = getContent(activePhase ?? defaultKey);

  return (
    <div className="mt-6 w-full">
      {/* Contenedor del timeline */}
      <div className="relative flex items-center justify-between w-full">
        {/* Línea base detrás de todas las esferas */}
        <div className="absolute top-[10px] left-[55px] right-[55px] h-[2px] bg-brand-purple/60 z-0" />

        {/* Esferas */}
        {phases.map((phase) => (
          <motion.div
            key={phase}
            className="relative flex flex-col items-center cursor-pointer flex-1"
            whileHover={{ scale: 1.1 }}
            onClick={() => setActivePhase(phase)}
          >
            {/* Esfera */}
            <div className="relative z-10 w-5 h-5 rounded-full bg-brand-blue border-2 border-white shadow-sm" />
            {/* Texto de la fase */}
            <span className="mt-2 text-sm md:text-base text-white/85 font-medium">
              {getLabel(phase)}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Ventana descriptiva siempre presente */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative mt-8 bg-white/10 rounded-2xl p-6 shadow-lg min-h-[180px]"
      >
        {/* Botón cerrar */}
        {activePhase && (
          <button
            onClick={() => setActivePhase(null)}
            className="absolute top-2 right-3 text-white text-sm font-bold"
            aria-label="Cerrar"
          >
            ×
          </button>
        )}

        <h4 className="text-2xl font-bold text-brand-orange">{content.title}</h4>
        <h5 className="text-xl font-semibold text-brand-blue mt-1">
          {content.subtitle}
        </h5>
        <p className="text-white/85 mt-2 text-base md:text-lg font-medium leading-relaxed">
          {content.text}
        </p>
      </motion.div>
    </div>
  );
}

/* ====== Componente principal ====== */
export default function FormatSolutions() {
  const intl = useIntl();
  const t = (id: string, values?: Record<string, any>) =>
    intl.formatMessage({ id }, values);

  /* ----- Etiquetas de especificaciones ----- */
  const specLabel = (k: SpecKey) =>
    t(`services.formatSolutions.spec.${k}.label`);

  /* ----- Contenido i18n del timeline ----- */
  const timelineLabel = (k: PhaseKey) =>
    t(`services.formatSolutions.timeline.${k}.label`);

  const timelineContent = (k: PhaseKey) => ({
    title: t(`services.formatSolutions.timeline.${k}.title`),
    subtitle: t(`services.formatSolutions.timeline.${k}.subtitle`),
    text: t(`services.formatSolutions.timeline.${k}.text`),
  });

  /* ----- Bloques (i18n) ----- */
  const BLOCKS: Block[] = [
    {
      id: "shortfilm",
      kind: "format",
      title: t("services.formatSolutions.blocks.shortfilm.title"),
      highlight: t("services.formatSolutions.blocks.shortfilm.highlight"),
      icon: <Film className="w-6 h-6 text-brand-orange" />,
      image: "/images/services/shortfilm.png",
      summary: t("services.formatSolutions.blocks.shortfilm.summary"),
      ctaLabel: t("services.formatSolutions.blocks.shortfilm.cta"),
      specs: {
        duration: t("services.formatSolutions.blocks.shortfilm.spec.duration"),
        tone: t("services.formatSolutions.blocks.shortfilm.spec.tone"),
        ideal: t("services.formatSolutions.blocks.shortfilm.spec.ideal"),
        music: t("services.formatSolutions.blocks.shortfilm.spec.music"),
        strategy: t("services.formatSolutions.blocks.shortfilm.spec.strategy"),
        challenge: t(
          "services.formatSolutions.blocks.shortfilm.spec.challenge"
        ),
        connection: t(
          "services.formatSolutions.blocks.shortfilm.spec.connection"
        ),
        emotion: t("services.formatSolutions.blocks.shortfilm.spec.emotion"),
      },
    },
    {
      id: "trailer",
      kind: "format",
      title: t("services.formatSolutions.blocks.trailer.title"),
      highlight: t("services.formatSolutions.blocks.trailer.highlight"),
      icon: <Clapperboard className="w-6 h-6 text-brand-orange" />,
      image: "/images/services/trailer.png",
      summary: t("services.formatSolutions.blocks.trailer.summary"),
      ctaLabel: t("services.formatSolutions.blocks.trailer.cta"),
      specs: {
        duration: t("services.formatSolutions.blocks.trailer.spec.duration"),
        tone: t("services.formatSolutions.blocks.trailer.spec.tone"),
        ideal: t("services.formatSolutions.blocks.trailer.spec.ideal"),
        music: t("services.formatSolutions.blocks.trailer.spec.music"),
        strategy: t("services.formatSolutions.blocks.trailer.spec.strategy"),
        challenge: t("services.formatSolutions.blocks.trailer.spec.challenge"),
        connection: t("services.formatSolutions.blocks.trailer.spec.connection"),
        emotion: t("services.formatSolutions.blocks.trailer.spec.emotion"),
      },
    },
    {
      id: "marketing",
      kind: "format",
      title: t("services.formatSolutions.blocks.marketing.title"),
      highlight: t("services.formatSolutions.blocks.marketing.highlight"),
      icon: <Megaphone className="w-6 h-6 text-brand-orange" />,
      image: "/images/services/marketing.png",
      summary: t("services.formatSolutions.blocks.marketing.summary"),
      ctaLabel: t("services.formatSolutions.blocks.marketing.cta"),
      specs: {
        duration: t("services.formatSolutions.blocks.marketing.spec.duration"),
        tone: t("services.formatSolutions.blocks.marketing.spec.tone"),
        ideal: t("services.formatSolutions.blocks.marketing.spec.ideal"),
        music: t("services.formatSolutions.blocks.marketing.spec.music"),
        strategy: t("services.formatSolutions.blocks.marketing.spec.strategy"),
        challenge: t(
          "services.formatSolutions.blocks.marketing.spec.challenge"
        ),
        connection: t(
          "services.formatSolutions.blocks.marketing.spec.connection"
        ),
        emotion: t("services.formatSolutions.blocks.marketing.spec.emotion"),
      },
    },
    {
      id: "documentary",
      kind: "format",
      title: t("services.formatSolutions.blocks.documentary.title"),
      highlight: t("services.formatSolutions.blocks.documentary.highlight"),
      icon: <Video className="w-6 h-6 text-brand-orange" />,
      image: "/images/services/documentary.png",
      summary: t("services.formatSolutions.blocks.documentary.summary"),
      ctaLabel: t("services.formatSolutions.blocks.documentary.cta"),
      specs: {
        duration: t("services.formatSolutions.blocks.documentary.spec.duration"),
        tone: t("services.formatSolutions.blocks.documentary.spec.tone"),
        ideal: t("services.formatSolutions.blocks.documentary.spec.ideal"),
        music: t("services.formatSolutions.blocks.documentary.spec.music"),
        strategy: t(
          "services.formatSolutions.blocks.documentary.spec.strategy"
        ),
        challenge: t(
          "services.formatSolutions.blocks.documentary.spec.challenge"
        ),
        connection: t(
          "services.formatSolutions.blocks.documentary.spec.connection"
        ),
        emotion: t("services.formatSolutions.blocks.documentary.spec.emotion"),
      },
    },
    {
      id: "animated",
      kind: "format",
      title: t("services.formatSolutions.blocks.animated.title"),
      highlight: t("services.formatSolutions.blocks.animated.highlight"),
      icon: <Palette className="w-6 h-6 text-brand-orange" />,
      image: "/images/services/animated.png",
      summary: t("services.formatSolutions.blocks.animated.summary"),
      ctaLabel: t("services.formatSolutions.blocks.animated.cta"),
      specs: {
        duration: t("services.formatSolutions.blocks.animated.spec.duration"),
        tone: t("services.formatSolutions.blocks.animated.spec.tone"),
        ideal: t("services.formatSolutions.blocks.animated.spec.ideal"),
        music: t("services.formatSolutions.blocks.animated.spec.music"),
        strategy: t("services.formatSolutions.blocks.animated.spec.strategy"),
        challenge: t(
          "services.formatSolutions.blocks.animated.spec.challenge"
        ),
        connection: t(
          "services.formatSolutions.blocks.animated.spec.connection"
        ),
        emotion: t("services.formatSolutions.blocks.animated.spec.emotion"),
      },
    },
    {
      id: "lanzamiento",
      kind: "service",
      title: t("services.formatSolutions.blocks.launch.title"),
      highlight: t("services.formatSolutions.blocks.launch.highlight"),
      icon: <Rocket className="w-6 h-6 text-brand-orange" />,
      image: "/images/services/launch.png",
      summary: [
        t("services.formatSolutions.blocks.launch.summary.0"),
        t("services.formatSolutions.blocks.launch.summary.1"),
        t("services.formatSolutions.blocks.launch.summary.2"),
      ],
      ctaLabel: t("services.formatSolutions.blocks.launch.cta"),
    },
    {
      id: "experiencia",
      kind: "service",
      title: t("services.formatSolutions.blocks.experience.title"),
      highlight: t("services.formatSolutions.blocks.experience.highlight"),
      icon: <InfinityIcon className="w-6 h-6 text-brand-orange" />,
      image: "/images/services/experience.png",
      summary: [
        t("services.formatSolutions.blocks.experience.summary.0"),
        t("services.formatSolutions.blocks.experience.summary.1"),
        t("services.formatSolutions.blocks.experience.summary.2"),
      ],
      ctaLabel: t("services.formatSolutions.blocks.experience.cta"),
    },
  ];

  /* ----- Textos de cabecera y cierres ----- */
  const headerTitle = t("services.formatSolutions.header.title");
  const headerSubtitle = t("services.formatSolutions.header.subtitle");
  const headerIntro = t("services.formatSolutions.header.intro");

  const tableTitle = t("services.formatSolutions.table.title");
  const tableSubtitle = t("services.formatSolutions.table.subtitle");
  const tableCategory = t("services.formatSolutions.table.category");
  const tableColShort = t("services.formatSolutions.table.col.shortfilm");
  const tableColTrailer = t("services.formatSolutions.table.col.trailer");
  const tableColMarketing = t("services.formatSolutions.table.col.marketing");
  const tableColDoc = t("services.formatSolutions.table.col.documentary");
  const tableColAnim = t("services.formatSolutions.table.col.animated");

  const bridgeText = t("services.formatSolutions.bridge");
  const closingText = t("services.formatSolutions.closing.text");
  const closingCta1 = t("services.formatSolutions.closing.cta1");
  const closingCta2 = t("services.formatSolutions.closing.cta2");

  return (
    <section className="bg-black text-white py-10 md:py-18 px-6 md:px-12 lg:px-20">
      {/* Header macro-módulo */}
      <motion.div
        variants={fadeParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-10 md:mb-14 max-w-5xl lg:max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-brand-orange">
          {headerTitle}
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue mt-2">
          {headerSubtitle}
        </h3>

        {/* Nube gris introductoria */}
        <div className="mt-14 bg-white/10 rounded-2xl p-6 md:p-8 shadow-lg max-w-[55rem] mx-auto">
          <p className="text-center text-lg md:text-xl font-semibold text-white/90 leading-snug">
            {headerIntro}
          </p>
        </div>
      </motion.div>

      {/* Bloques */}
      <div className="mx-auto max-w-6xl space-y-14 md:space-y-20">
        {BLOCKS.map((block, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.article
              id={block.id}
              key={block.id}
              variants={fadeParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid items-stretch gap-6 md:gap-10 lg:gap-12 md:grid-cols-12"
            >
              {/* Imagen */}
              <div
                className={`md:col-span-5 ${
                  isEven ? "order-1" : "md:order-2 order-1"
                } h-full`}
              >
                <CinematicImage
                  src={block.image}
                  alt={`${block.title} – visual`}
                  priority={idx === 0}
                />
              </div>

              {/* Texto */}
              <motion.div
                variants={fadeParent}
                className={`md:col-span-7 flex flex-col ${
                  isEven ? "order-2" : "md:order-1 order-2"
                } ${isEven ? "text-left" : "text-right"}`}
              >
                {/* Título + subtítulo */}
                <div
                  className={`flex flex-col gap-1 ${
                    isEven ? "items-start" : "items-end"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span>{block.icon}</span>
                    <h3 className="text-3xl md:text-4xl font-semibold text-brand-orange">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl font-medium text-brand-blue">
                    {block.highlight}
                  </p>
                </div>

                {/* Descripción */}
                {Array.isArray(block.summary) ? (
                  block.summary.map((para, i) => (
                    <p
                      key={i}
                      className="mt-4 text-base md:text-lg text-white/85 leading-snug"
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="mt-4 text-base md:text-lg text-white/85 leading-snug whitespace-pre-line">
                    {block.summary}
                  </p>
                )}

                {/* Tabla o Línea de tiempo */}
                {block.kind === "format" && block.specs && (
                  <SpecTable specs={block.specs} getLabel={specLabel} />
                )}
                {block.id === "lanzamiento" && (
                  <MicroTimeline
                    defaultKey="DefaultActivacion"
                    phases={[
                      "Preparacion",
                      "Impulso",
                      "Lanzamiento",
                      "Medicion",
                      "Entrega",
                    ]}
                    getLabel={timelineLabel}
                    getContent={timelineContent}
                  />
                )}
                {block.id === "experiencia" && (
                  <MicroTimeline
                    defaultKey="DefaultExperiencia"
                    phases={[
                      "Planeacion",
                      "Produccion",
                      "Activaciones",
                      "Analisis",
                      "Evolucion",
                    ]}
                    getLabel={timelineLabel}
                    getContent={timelineContent}
                  />
                )}

                {/* CTA */}
                <div className={`${isEven ? "" : "self-end"}`}>
                  <MiniCTA href="/contacto" icon={block.icon} label={block.ctaLabel} />
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>

      {/* Frase introductoria a la tabla */}
      <motion.div
        variants={fadeParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-10 md:mb-14 max-w-5xl lg:max-w-6xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue mt-20">
          {bridgeText}
        </h3>
      </motion.div>

      {/* Comparativo */}
      <motion.div
        variants={fadeParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 md:mt-20 max-w-[110rem] mx-auto"
      >
        {/* Título + subtítulo */}
        <div className="text-center mb-8 md:mb-10">
          <h4 className="text-4xl md:text-5xl font-bold text-brand-orange">
            {tableTitle}
          </h4>
          <p className="text-2xl md:text-3xl font-semibold text-white/85 mt-2">
            {tableSubtitle}
          </p>
        </div>

        {/* Contenedor con borde al estilo pricing */}
        <div className="overflow-x-auto max-w-[110rem] mx-auto border-4 border-brand-purple rounded-2xl">
          <table className="min-w-[1024px] w-full border-collapse text-center text-sm md:text-[15.5px]">
            <thead>
              <tr className="bg-brand-blue/85 text-white text-lg md:text-xl">
                <th className="p-4 text-left font-semibold">{tableCategory}</th>
                <th className="p-4 font-semibold">{tableColShort}</th>
                <th className="p-4 font-semibold">{tableColTrailer}</th>
                <th className="p-4 font-semibold">{tableColMarketing}</th>
                <th className="p-4 font-semibold">{tableColDoc}</th>
                <th className="p-4 font-semibold">{tableColAnim}</th>
              </tr>
            </thead>
            <tbody>
              {SPEC_KEYS.map((field, idx) => (
                <motion.tr
                  key={field}
                  whileHover={{
                    scale: 1.01,
                    backgroundColor: "rgba(138, 43, 226, 0.15)",
                  }}
                  transition={{ duration: 0.2 }}
                  className={`border-t border-white/20 ${
                    idx === SPEC_KEYS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <td className="p-4 min-w-[200px] font-semibold text-brand-orange text-lg md:text-xl text-left">
                    {specLabel(field)}
                  </td>
                  <td className="p-4">
                    {
                      (BLOCKS.find((b) => b.id === "shortfilm")!
                        .specs as Record<SpecKey, string>)[field]
                    }
                  </td>
                  <td className="p-4">
                    {
                      (BLOCKS.find((b) => b.id === "trailer")!
                        .specs as Record<SpecKey, string>)[field]
                    }
                  </td>
                  <td className="p-4">
                    {
                      (BLOCKS.find((b) => b.id === "marketing")!
                        .specs as Record<SpecKey, string>)[field]
                    }
                  </td>
                  <td className="p-4">
                    {
                      (BLOCKS.find((b) => b.id === "documentary")!
                        .specs as Record<SpecKey, string>)[field]
                    }
                  </td>
                  <td className="p-4">
                    {
                      (BLOCKS.find((b) => b.id === "animated")!
                        .specs as Record<SpecKey, string>)[field]
                    }
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Cierre */}
      <motion.div
        variants={fadeParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mt-16 md:mt-20"
      >
        <p className="text-2xl md:text-3xl text-brand-blue font-medium mb-8">
          {closingText}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-8 py-4 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-orange hover:text-white"
          >
            {closingCta1}
          </motion.a>
          <motion.a
            href="/sesion-gratuita"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-8 py-4 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
          >
            {closingCta2}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

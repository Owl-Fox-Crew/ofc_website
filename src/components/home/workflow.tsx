"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Workflow() {
  const baseTransition = { duration: 0.45, ease: "easeInOut" };

  // --- Estado para controlar el bloque activo ---
  const [activeBlock, setActiveBlock] = useState<string | null>("workflow");

  // --- Contenido de cada bloque (solo keys + iconos) ---
  const contentMap: Record<
    string,
    { title: string; subtitle: string; text: string; icon: string; keystone?: string }
  > = {
    workflow: {
      title: "workflow.title",
      subtitle: "workflow.subtitle",
      text: "workflow.text",
      icon: "/images/Workflow/Workflow.png",
      keystone: "workflow.keystone",
    },
    explora: {
      title: "explora.title",
      subtitle: "explora.subtitle",
      text: "explora.text",
      icon: "/images/Workflow/explore.png",
      keystone: "explora.keystone",
    },
    disena: {
      title: "disena.title",
      subtitle: "disena.subtitle",
      text: "disena.text",
      icon: "/images/Workflow/Design.png",
      keystone: "disena.keystone",
    },
    produce: {
      title: "produce.title",
      subtitle: "produce.subtitle",
      text: "produce.text",
      icon: "/images/Workflow/Production.png",
      keystone: "produce.keystone",
    },
    cocrea: {
      title: "cocrea.title",
      subtitle: "cocrea.subtitle",
      text: "cocrea.text",
      icon: "/images/Workflow/Co-Create.png",
      keystone: "cocrea.keystone",
    },
    master: {
      title: "master.title",
      subtitle: "master.subtitle",
      text: "master.text",
      icon: "/images/Workflow/Master.png",
      keystone: "master.keystone",
    },
    lanza: {
      title: "lanza.title",
      subtitle: "lanza.subtitle",
      text: "lanza.text",
      icon: "/images/Workflow/Launching.png",
      keystone: "lanza.keystone",
    },
    activa: {
      title: "activa.title",
      subtitle: "activa.subtitle",
      text: "activa.text",
      icon: "/images/Workflow/Activate.png",
      keystone: "activa.keystone",
    },
    une: {
      title: "une.title",
      subtitle: "une.subtitle",
      text: "une.text",
      icon: "/images/Workflow/Companion.png",
      keystone: "une.keystone",
    },
    shortfilm: {
      title: "shortfilm.title",
      subtitle: "shortfilm.subtitle",
      text: "shortfilm.text",
      icon: "/images/Workflow/ShortFilm.png",
      keystone: "shortfilm.keystone",
    },
    trailer: {
      title: "trailer.title",
      subtitle: "trailer.subtitle",
      text: "trailer.text",
      icon: "/images/Workflow/Trailer.png",
      keystone: "trailer.keystone",
    },
    documentary: {
      title: "documentary.title",
      subtitle: "documentary.subtitle",
      text: "documentary.text",
      icon: "/images/Workflow/Documentary.png",
      keystone: "documentary.keystone",
    },
    marketing: {
      title: "marketing.title",
      subtitle: "marketing.subtitle",
      text: "marketing.text",
      icon: "/images/Workflow/Marketing.png",
      keystone: "marketing.keystone",
    },
    animated: {
      title: "animated.title",
      subtitle: "animated.subtitle",
      text: "animated.text",
      icon: "/images/Workflow/Animated.png",
      keystone: "animated.keystone",
    },
  };

  // --- Animaciones hover ---
  const hoverAnimSphere = {
    animate: { scale: 1, transition: baseTransition },
    whileHover: {
      scale: 1.075,
      backgroundColor: "#0047AB",
      boxShadow: "0 0 25px rgba(0, 71, 171, 0.6)",
      borderColor: "#80bfff",
      transition: baseTransition,
    },
    whileTap: { scale: 1.1, transition: baseTransition },
  };

  const hoverAnimSatellite = {
    animate: { scale: 1, transition: baseTransition },
    whileHover: {
      scale: 1.1,
      backgroundColor: "#0047AB",
      boxShadow: "0 0 20px rgba(0, 71, 171, 0.7)",
      borderColor: "#80bfff",
      transition: baseTransition,
    },
    whileTap: { scale: 1.15, transition: baseTransition },
  };

  const fadeInSequence = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 1.1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 mt-24 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-14 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange">
          <FormattedMessage id="workflow.sectionTitle" />
        </h2>
        <h3 className="text-3xl md:text-5xl font-semibold text-white/85 mt-2">
          <FormattedMessage id="workflow.sectionSubtitle" />
        </h3>
      </div>

      {/* Diagrama base de esferas */}
      <div className="relative mx-auto mt-16 h-[400px] w-full max-w-5xl">
        {/* Esfera Diseña (2) */}
        <motion.div
          className="absolute left-[7%] top-[40%] w-48 h-48 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer"
          onClick={() => setActiveBlock("disena")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <Image src="/images/Workflow/Design.png" alt="Diseño" width={58} height={58} />
          <span className="mt-1">Diseña</span>
        </motion.div>

        {/* Esfera Explora (1) */}
        <motion.div
          className="absolute left-[-6%] top-[45%] w-36 h-36 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer"
          onClick={() => setActiveBlock("explora")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <Image src="/images/Workflow/explore.png" alt="Exploración" width={52} height={52} className="-mb-1" />
          <span className="mt-1">Explora</span>
        </motion.div>

        {/* Satélites */}
        <motion.div
          className="absolute left-[16%] top-[21%] w-16 h-16 rounded-full bg-brand-purple/75 border-[3px] border-white flex items-center justify-center cursor-pointer"
          onClick={() => setActiveBlock("shortfilm")}
          {...hoverAnimSatellite}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Image src="/images/Workflow/ShortFilm.png" alt="ShortFilm" width={42} height={42} />
        </motion.div>

        <motion.div
          className="absolute left-[24%] top-[20.5%] w-16 h-16 rounded-full bg-brand-purple/75 border-[3px] border-white flex items-center justify-center cursor-pointer"
          onClick={() => setActiveBlock("trailer")}
          {...hoverAnimSatellite}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Image src="/images/Workflow/Trailer.png" alt="Trailer" width={34} height={34} />
        </motion.div>

        <motion.div
          className="absolute left-[26%] top-[40%] w-16 h-16 rounded-full bg-brand-purple/75 border-[3px] border-white flex items-center justify-center cursor-pointer"
          onClick={() => setActiveBlock("documentary")}
          {...hoverAnimSatellite}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Image src="/images/Workflow/Documentary.png" alt="Documentary" width={40} height={40} />
        </motion.div>

        <motion.div
          className="absolute left-[32%] top-[53.75%] w-16 h-16 rounded-full bg-brand-purple/75 border-[3px] border-white flex items-center justify-center cursor-pointer"
          onClick={() => setActiveBlock("marketing")}
          {...hoverAnimSatellite}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Image src="/images/Workflow/Marketing.png" alt="Marketing" width={40} height={40} />
        </motion.div>

        <motion.div
          className="absolute left-[26.5%] top-[68%] w-16 h-16 rounded-full bg-brand-purple/75 border-[3px] border-white flex items-center justify-center cursor-pointer"
          onClick={() => setActiveBlock("animated")}
          {...hoverAnimSatellite}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Image src="/images/Workflow/Animated.png" alt="Animated" width={42} height={42} />
        </motion.div>

        {/* Esfera Master */}
        <motion.div
          className="absolute left-[59%] top-[22%] w-40 h-40 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer"
          onClick={() => setActiveBlock("master")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
        >
          <Image src="/images/Workflow/Master.png" alt="Masterización" width={60} height={60} className="-mb-1" />
          <span className="mt-1">Master</span>
        </motion.div>

        {/* Esfera Co-Crea */}
        <motion.div
          className="absolute left-[40%] top-[33%] w-60 h-60 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-[1.4rem] font-bold cursor-pointer"
          onClick={() => setActiveBlock("cocrea")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <Image src="/images/Workflow/Co-Create.png" alt="Co-Creación" width={85} height={85} className="-mb-1" />
          <span className="mt-1">Co-Crea</span>
        </motion.div>

        {/* Esfera Produce */}
        <motion.div
          className="absolute left-[32%] top-[3%] w-48 h-48 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer"
          onClick={() => setActiveBlock("produce")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <Image src="/images/Workflow/Production.png" alt="Producción" width={62} height={62} className="-mb-1" />
          <span className="mt-1">Produce</span>
        </motion.div>

        {/* Esfera Activa */}
        <motion.div
          className="absolute left-[75%] top-[37%] w-44 h-44 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer"
          onClick={() => setActiveBlock("activa")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={7}
        >
          <Image src="/images/Workflow/Activate.png" alt="Activación" width={52} height={52} />
          <span className="mt-0">Activa</span>
        </motion.div>

        {/* Esfera Lanza */}
        <motion.div
          className="absolute left-[67.5%] top-[62%] w-28 h-28 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer"
          onClick={() => setActiveBlock("lanza")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
        >
          <Image src="/images/Workflow/Launching.png" alt="Lanzamiento" width={36} height={36} className="-mb-1.5" />
          <span className="mt-0">Lanza</span>
        </motion.div>

        {/* Esfera Une */}
        <motion.div
          className="absolute left-[90.5%] top-[43%] w-32 h-32 rounded-full bg-brand-purple/75 border-[3px] border-white flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer"
          onClick={() => setActiveBlock("une")}
          {...hoverAnimSphere}
          variants={fadeInSequence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
        >
          <Image src="/images/Workflow/Companion.png" alt="Acompañamiento" width={50} height={50} className="-mb-1.5" />
          <span className="mt-1">Une</span>
        </motion.div>
      </div>


 {/* Bloque dinámico de texto */}
      {activeBlock && (
        <motion.div
          key={activeBlock}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-3xl mx-auto mt-14 bg-white/10 p-9 rounded-3xl shadow-lg min-h-[300px]"
        >
          {/* Botón cerrar */}
          {activeBlock !== "workflow" && (
            <button
              onClick={() => setActiveBlock("workflow")}
              className="absolute top-2 right-5 font-bold text-white text-2xl"
            >
              ×
            </button>
          )}

          {/* Header con título/subtítulo/icono */}
          <div className="flex justify-between items-center gap-4 mb-4">
            <div className="flex flex-col">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-orange">
                <FormattedMessage id={contentMap[activeBlock].title} />
              </h3>
              <h4 className="text-2xl md:text-3xl font-semibold text-brand-blue/95">
                <FormattedMessage id={contentMap[activeBlock].subtitle} />
              </h4>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={contentMap[activeBlock].icon}
                alt={contentMap[activeBlock].title}
                width={56}
                height={0}
                className="h-auto md:w-[72px]"
              />
            </div>
          </div>

          {/* Texto */}
          <p className="text-lg text-white/85 whitespace-pre-line text-justify">
            <FormattedMessage id={contentMap[activeBlock].text} />
          </p>

          {/* Keystone */}
          {contentMap[activeBlock].keystone && (
            <p className="text-[1.2rem] font-bold text-brand-orange mt-5">
              <FormattedMessage id={contentMap[activeBlock].keystone} />
            </p>
          )}
        </motion.div>
      )}

      {/* Cierre narrativo */}
      <p className="text-center mt-14 md:mt-18 text-brand-blue text-2xl italic font-light max-w-2xl mx-auto">
        <FormattedMessage id="workflow.footerQuote" />
      </p>
    </section>
  );
}
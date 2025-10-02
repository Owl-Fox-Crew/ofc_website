"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import FAQsImage from "/public/images/FAQs/FAQs Inv.png";

export default function FAQs() {
  const [activeNube, setActiveNube] = useState<string>("intro");

  const baseTransition = { duration: 0.45, ease: "easeInOut" };

  const nubeAnim = {
    animate: { scale: 1, transition: baseTransition },
    whileHover: {
      scale: 1.05,
      backgroundColor: "#2563EB",
      boxShadow: "0 0 25px rgba(37, 99, 235, 0.6)",
      borderColor: "#80bfff",
      transition: baseTransition,
    },
    whileTap: { scale: 1.1, transition: baseTransition },
  };

  const fadeInSequence = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.4,
        duration: 1.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-10 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange">
          <FormattedMessage id="faqs.sectionTitle" />
        </h2>
        <h3 className="text-3xl md:text-5xl font-semibold text-white/85 mt-2">
          <FormattedMessage id="faqs.sectionSubtitle" />
        </h3>
      </div>

      {/* Imagen central */}
      <div className="relative w-full flex justify-center mb-16 mt-[203px]">
        <Image
          src={FAQsImage}
          alt="Ilustración FAQs"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Nube 1 */}
      <motion.div
        className="absolute top-[16%] left-[50.7%] bg-brand-purple/60 border-4 border-white text-white px-6 py-4 rounded-2xl shadow-md backdrop-blur-md cursor-pointer w-[550px]"
        {...nubeAnim}
        variants={fadeInSequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        onClick={() => setActiveNube("nube1")}
      >
        <p className="text-xl font-bold text-center leading-snug">
          <FormattedMessage id="faqs.nube1.question" />
        </p>
        <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-white"></div>
      </motion.div>

      {/* Nube 2 */}
      <motion.div
        className="absolute top-[340px] left-[22.5%] bg-brand-purple/60 border-4 border-white text-white px-6 py-4 rounded-2xl shadow-md backdrop-blur-md cursor-pointer w-[500px]"
        {...nubeAnim}
        variants={fadeInSequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        onClick={() => setActiveNube("nube2")}
      >
        <p className="text-xl font-bold text-center leading-snug">
          <FormattedMessage id="faqs.nube2.question" />
        </p>
        <div className="absolute -bottom-4 right-1 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-white"></div>
      </motion.div>

      {/* Nube 3 */}
      <motion.div
        className="absolute top-[390px] right-[15.2%] bg-brand-purple/60 border-4 border-white text-white px-6 py-4 rounded-2xl shadow-md backdrop-blur-md cursor-pointer w-[400px]"
        {...nubeAnim}
        variants={fadeInSequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        onClick={() => setActiveNube("nube3")}
      >
        <p className="text-xl font-bold text-center leading-snug">
          <FormattedMessage id="faqs.nube3.question" />
        </p>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-0 h-0 border-t-[14px] border-b-[14px] border-r-[14px] border-t-transparent border-b-transparent border-r-white"></div>
      </motion.div>

      {/* Nube 4 */}
      <motion.div
        className="absolute top-[560px] right-[11.8%] bg-brand-purple/60 border-4 border-white text-white px-6 py-4 rounded-2xl shadow-md backdrop-blur-md cursor-pointer w-[430px]"
        {...nubeAnim}
        variants={fadeInSequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        onClick={() => setActiveNube("nube4")}
      >
        <p className="text-xl font-bold text-center leading-snug">
          <FormattedMessage id="faqs.nube4.question" />
        </p>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-0 h-0 border-t-[14px] border-b-[14px] border-r-[14px] border-t-transparent border-b-transparent border-r-white"></div>
      </motion.div>

      {/* Nube 5 */}
      <motion.div
        className="absolute top-[730px] right-[17%] bg-brand-purple/60 border-4 border-white text-white px-6 py-4 rounded-2xl shadow-md backdrop-blur-md cursor-pointer w-[390px]"
        {...nubeAnim}
        variants={fadeInSequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        onClick={() => setActiveNube("nube5")}
      >
        <p className="text-xl font-bold text-center leading-snug">
          <FormattedMessage id="faqs.nube5.question" />
        </p>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-0 h-0 border-t-[14px] border-b-[14px] border-r-[14px] border-t-transparent border-b-transparent border-r-white"></div>
      </motion.div>

      {/* Nube 6 */}
      <motion.div
        className="absolute top-[505px] left-[17%] bg-brand-purple/60 border-4 border-white text-white px-6 py-4 rounded-2xl shadow-md backdrop-blur-md cursor-pointer w-[440px]"
        {...nubeAnim}
        variants={fadeInSequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={5}
        onClick={() => setActiveNube("nube6")}
      >
        <p className="text-xl font-bold text-center leading-snug">
          <FormattedMessage id="faqs.nube6.question" />
        </p>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-0 h-0 border-t-[14px] border-b-[14px] border-l-[14px] border-t-transparent border-b-transparent border-l-white"></div>
      </motion.div>

      {/* Nube 7 */}
      <motion.div
        className="absolute top-[670px] left-[13.8%] bg-brand-purple/60 border-4 border-white text-white px-6 py-4 rounded-2xl shadow-md backdrop-blur-md cursor-pointer w-[430px]"
        {...nubeAnim}
        variants={fadeInSequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={6}
        onClick={() => setActiveNube("nube7")}
      >
        <p className="text-xl font-bold text-center leading-snug">
          <FormattedMessage id="faqs.nube7.question" />
        </p>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-0 h-0 border-t-[14px] border-b-[14px] border-l-[14px] border-t-transparent border-b-transparent border-l-white"></div>
      </motion.div>

      {/* Cuadro dinámico */}
      {activeNube && (
        <motion.div
          key={activeNube}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-3xl mx-auto mt-14 bg-white/10 p-9 rounded-3xl shadow-lg"
        >
          {activeNube !== "intro" && (
            <button
              onClick={() => setActiveNube("intro")}
              className="absolute top-2 right-5 font-bold text-white text-2xl"
            >
              ×
            </button>
          )}

          {/* Intro */}
          {activeNube === "intro" && (
            <>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-orange">
                <FormattedMessage id="faqs.intro.title" />
              </h3>
              <h4 className="text-2xl md:text-3xl font-semibold text-brand-blue/95 mb-4">
                <FormattedMessage id="faqs.intro.subtitle" />
              </h4>
              <p className="text-lg text-white/85 whitespace-pre-line text-justify">
                <FormattedMessage id="faqs.intro.text" />
              </p>
            </>
          )}

          {/* Pregunta + respuesta */}
          {activeNube !== "intro" && (
            <>
              <h4 className="text-2xl md:text-3xl font-semibold text-brand-orange mb-2">
                <FormattedMessage id="faqs.labels.question" />
              </h4>
              <p className="text-lg text-white/85 whitespace-pre-line text-justify mb-6">
                <FormattedMessage id={`faqs.${activeNube}.question`} />
              </p>
              <h4 className="text-2xl md:text-3xl font-semibold text-brand-blue/95 mb-2">
                <FormattedMessage id="faqs.labels.answer" />
              </h4>
              <p className="text-lg text-white/85 whitespace-pre-line text-justify">
                <FormattedMessage id={`faqs.${activeNube}.answer`} />
              </p>
            </>
          )}
        </motion.div>
      )}
    </section>
  );
}

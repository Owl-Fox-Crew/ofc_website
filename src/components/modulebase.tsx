"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type ClosingType = "narrative" | "cta" | null;

interface ModuleBaseProps {
  /** Título (línea 1) */
  titleLine1?: string;
  /** Título (línea 2) */
  titleLine2?: string;
  /** Bloque central del módulo */
  children?: ReactNode;
  /** Tipo de cierre: frase narrativa, CTA, o null para ocultar */
  closingType?: ClosingType;

  /** Texto de cierre cuando closingType === "narrative" */
  closingText?: string;

  /** Configuración del CTA cuando closingType === "cta" */
  cta?: {
    pretext?: string; // ej: "¿Listo para comenzar tu historia?"
    href?: string;    // ej: "/contacto"
    label?: string;   // ej: "Quiero conversar con Owl Fox Crew"
  };

  /** Clases extra para el <section> (opcional) */
  className?: string;
}

/**
 * Módulo base reutilizable con:
 * - Título (dos líneas)
 * - Bloque central (children)
 * - Cierre seleccionable: narrativa o CTA
 */
export default function ModuleBase({
  titleLine1 = "[Primera línea del título]",
  titleLine2 = "[Segunda línea del título]",
  children = <p className="text-gray-400">[Aquí irá el contenido del módulo]</p>,
  closingType = "narrative",
  closingText = "[Texto de cierre]",
  cta = {
    pretext: "¿Listo para comenzar tu historia?",
    href: "/contacto",
    label: "Quiero conversar con Owl Fox Crew",
  },
  className = "",
}: ModuleBaseProps) {
  return (
    <section
      className={`relative w-full bg-black text-white px-6 md:px-12 py-10 overflow-hidden ${className}`}
    >
      {/* Título */}
      <div className="text-center mb-14 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-orange">
          {titleLine1}
        </h2>
        <h3 className="text-3xl md:text-5xl font-semibold text-white/85">
          {titleLine2}
        </h3>
      </div>

      {/* Bloque central */}
      <div className="mt-16 text-center">{children}</div>

      {/* Cierre */}
      {closingType === "narrative" && (
        <p className="text-center mt-16 md:mt-20 text-brand-blue text-2xl italic font-light max-w-2xl mx-auto">
          {closingText}
        </p>
      )}

      {closingType === "cta" && (
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {cta?.pretext && (
            <p className="text-xl md:text-3xl font-medium text-brand-blue mb-6">
              {cta.pretext}
            </p>
          )}
          <motion.div
            whileHover={{ scale: 1.075 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={cta?.href || "/contacto"}
              className="inline-block px-8 py-4 rounded-2xl bg-gray-200 text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors hover:bg-brand-purple hover:text-white"
            >
              {cta?.label || "Quiero conversar con Owl Fox Crew"}
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { FaVimeoV } from "react-icons/fa";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-102">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Logo compuesto */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            {/* Isotipo */}
            <Image
              src="/images/logo/Logo_Low_White.png"
              alt={intl.formatMessage({ id: "footer.logoAlt" })}
              width={100}
              height={100}
              className="object-contain"
              priority
            />
            {/* Texto */}
            <div className="flex flex-col text-left leading-none">
              <span className="font-urbanist font-bold text-[58px]">
                Owl Fox
              </span>
              <span className="font-urbanist font-bold text-[58px] -mt-2">
                Crew
              </span>
            </div>
          </div>
        </div>

        {/* Frase poética */}
        <div className="space-y-1">
          <p className="text-lg md:text-2xl font-medium text-brand-orange">
            {intl.formatMessage({ id: "footer.poeticPhrase" })}
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-6 justify-center">
          {[
            {
              Icon: Instagram,
              href: "https://instagram.com/owlfoxcrew",
              label: "Instagram",
            },
            {
              Icon: Linkedin,
              href: "https://linkedin.com/company/owlfoxcrew",
              label: "LinkedIn",
            },
            {
              Icon: FaVimeoV,
              href: "https://vimeo.com/owlfoxcrew",
              label: "Vimeo",
            },
          ].map(({ Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={intl.formatMessage(
                { id: "footer.socialAlt" },
                { network: label }
              )}
              whileHover={{
                scale: 1.25,
                color: "#FF7503",
                textShadow: "0px 0px 8px rgba(255, 117, 3, 0.8)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>

        {/* Email */}
        <div>
          <a
            href="mailto:hi@owlfoxcrew.com"
            className="text-base md:text-lg text-brand-blue hover:text-brand-orange transition-colors"
          >
            {intl.formatMessage({ id: "footer.email" })}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/50 mt-4">
          © 2025 Owl Fox Crew.{" "}
          {intl.formatMessage({ id: "footer.copyright" })}
        </p>
      </div>
    </footer>
  );
}

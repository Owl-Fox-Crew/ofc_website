"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const { formatMessage, locale } = useIntl();
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "header.stories" },
    {
      id: "header.services",
      sub: [
        "header.services.cinematic",
        "header.services.trailer",
        "header.services.marketing",
        "header.services.documentary",
        "header.services.animated",
        "header.services.single",
        "header.services.experience",
      ],
    },
    { id: "header.crew" },
    { id: "header.pricing" },
    {
      id: "header.resources",
      sub: [
        "header.resources.blog",
        "header.resources.downloadable",
        "header.resources.podcast",
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-6 md:px-16 lg:px-24 py-4 flex items-center backdrop-blur ${
        scrolled ? "bg-brand-darkgray/70" : "bg-black/30"
      }`}
    >
      <Link href={`/${locale}`} className="text-xl font-bold pr-6">
        <img
          src="/Logo_Low_White.png"
          alt="Owl Fox Crew Logo"
          className="h-11 md:h-13"
        />
      </Link>

      <div className="hidden md:flex flex-1 justify-center pl-12 lg:pl-28">
        {/* 👇 gap dinámico */}
        <nav className="flex items-center gap-[60px] lg:gap-[82px] font-sans text-sm font-semibold text-white">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Enlace principal */}
              <Link
                href={
                  item.id === "header.services"
                    ? `/${locale}/services`
                    : `/${locale}/${item.id.replace("header.", "")}`
                }
                className={`transition-colors flex items-center gap-1 ${
                  isActive(
                    `/${locale}/${item.id.replace("header.", "")}`
                  )
                    ? "text-brand-orange"
                    : "hover:text-brand-orange"
                }`}
              >
                {formatMessage({ id: item.id })}
                {item.sub && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown responsivo */}
              {item.sub && hovered === item.id && (
                <div
                  className="absolute left-[-20px] md:left-[-26px] top-full 
                             bg-brand-darkgray/70 backdrop-blur-sm 
                             rounded-md shadow-lg py-2 px-[20px] md:px-[24px] 
                             animate-fade-in inline-block"
                >
                  {item.sub.map((subId) => (
                    <Link
                      key={subId}
                      href={`/${locale}/services`}
                      className="block text-white text-sm py-1.5 hover:text-brand-orange cursor-pointer whitespace-nowrap"
                    >
                      {formatMessage({ id: subId })}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex items-center gap-6 pr-2">
        <motion.button
          whileHover={{
            scale: 1.02,
            backgroundColor: "#3d1e66",
            borderColor: "#3d1e66",
            color: "#FFFFFF",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white text-[#3d1e66] border-2 border-white px-4 py-1.5 rounded-2xl font-medium text-sm transition-colors"
        >
          {formatMessage({ id: "header.cta" })}
        </motion.button>

        <Link
          href={`/${locale === "es" ? "en" : "es"}`}
          className="text-sm text-white hover:text-brand-orange"
        >
          {locale === "es" ? "EN" : "ES"}
        </Link>
      </div>

      {/* TODO: Hamburguesa para mobile */}
    </header>
  );
}

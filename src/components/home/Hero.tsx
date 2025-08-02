"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const [muted, setMuted] = useState<boolean>(true);
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Video hero */}
      <video
        src="/video-final-temporal-del-hero.mp4"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        poster="/fallback-thumbnail.jpg"
        title="Owl Fox Crew – Cinematic Hero Reel"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          {t("title")}
        </h1>
        <p className="text-white text-lg md:text-xl mb-1">
          {t("subtitle")}
        </p>
        <p className="text-white text-lg md:text-xl mb-8">
          {t("tagline")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" passHref>
            <button
              className="bg-white text-black font-medium py-2 px-6 rounded-2xl text-lg transition-opacity duration-300 hover:bg-neutral-200"
              aria-label={t("cta1")}
            >
              {t("cta1")}
            </button>
          </Link>
          <Link href="/free-talk" passHref>
            <button
              className="border border-white text-white font-medium py-2 px-6 rounded-2xl text-lg transition-opacity duration-300 hover:bg-white hover:text-black"
              aria-label={t("cta2")}
            >
              {t("cta2")}
            </button>
          </Link>
        </div>
      </div>

      {/* Botón de audio */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 z-30 bg-white/20 rounded-full p-2 hover:bg-white/30 text-white"
        aria-label={muted ? t("enableAudio") : t("muteAudio")}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </section>
  );
};

export default Hero;

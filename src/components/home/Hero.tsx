"use client";

import { useIntl } from "react-intl";
import { useEffect, useState, useRef } from "react";
import "@fontsource/raleway/latin-700.css";

export default function Hero() {
  const { formatMessage, locale } = useIntl();
  const [isMuted, setIsMuted] = useState(true);
  const [showMuteButton, setShowMuteButton] = useState(true);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ocultar/mostrar botón según actividad
  useEffect(() => {
    const resetTimer = () => {
      setShowMuteButton(true);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => setShowMuteButton(false), 3000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("touchstart", resetTimer);

    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        src="/videos/Hero/TestVideo-Web.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Botón mute/unmute */}
      {showMuteButton && (
        <button
          onClick={toggleMute}
          aria-label={formatMessage({
            id: isMuted ? "hero.enableAudio" : "hero.muteAudio",
          })}
          className="
            absolute bottom-6 right-6 flex items-center justify-center
            w-9 h-9 md:w-10 md:h-10 rounded-full
            bg-black/12 hover:bg-black/22
            backdrop-blur-[2px]
            opacity-45 hover:opacity-85
            transition-all duration-300
            shadow-none
          "
        >
          <img
            src={isMuted ? "/images/Hero/mute.png" : "/images/Hero/volume-up.png"}
            alt=""
            className="w-6 h-6 md:w-8 md:h-8 select-none pointer-events-none"
            style={{ filter: "grayscale(100%) brightness(1.1)" }}
          />
        </button>
      )}

      {/* Contenido textual */}
      <div className="z-10 text-center">
        <h1 className="px-8 w-full max-w-7xl text-6xl md:text-7xl font-bold leading-tight mb-4 font-sans">
          {formatMessage({ id: "hero.title1" })}
        </h1>

        <p className="px-8 w-full max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 mb-6 font-sans leading-relaxed">
          {formatMessage({ id: "hero.subtitle1" })}
        </p>

        {/* Tagline */}
        <p className="text-xl md:text-3xl text-brand-orange mb-6 font-bold font-raleway">
          {formatMessage({ id: "hero.tagline" })}
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-14">
          <button className="px-8 py-4 rounded-2xl bg-white text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors duration-300 hover:bg-brand-purple hover:text-white transform hover:scale-105">
            {formatMessage({ id: "hero.cta1" })}
          </button>
          <button className="px-8 py-4 rounded-2xl bg-white text-brand-purple font-semibold shadow-lg shadow-brand-purple/20 transition-colors duration-300 hover:bg-brand-orange hover:text-white transform hover:scale-105">
            {formatMessage({ id: "hero.cta2" })}
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

type HeroProps = {
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  tagline: string;
  cta1: string;
  cta2: string;
  muteAudio: string;
  enableAudio: string;
};

const Hero: React.FC<HeroProps> = ({
  title1,
  title2,
  subtitle1,
  subtitle2,
  tagline,
  cta1,
  cta2,
  muteAudio,
  enableAudio
}) => {
  const [muted, setMuted] = useState<boolean>(true);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
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

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-2 animate-fade-in">
          {title1}
        </h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          {title2}
        </h1>
        <p className="text-white text-lg md:text-xl">{subtitle1}</p>
        <p className="text-white text-lg md:text-xl mb-4">{subtitle2}</p>
        <p className="text-[#ff7503] text-lg md:text-xl font-semibold mb-8">
          {tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black font-medium py-2 px-6 rounded-2xl text-lg transition-opacity duration-300 hover:bg-neutral-200">
            {cta1}
          </button>
          <button className="border border-white text-white font-medium py-2 px-6 rounded-2xl text-lg transition-opacity duration-300 hover:bg-white hover:text-black">
            {cta2}
          </button>
        </div>
      </div>

      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 z-30 bg-white/20 rounded-full p-2 hover:bg-white/30 text-white"
        aria-label={muted ? enableAudio : muteAudio}
      >
        {muted ? <VolumeX /> : <Volume2 />}
      </button>
    </section>
  );
};

export default Hero;

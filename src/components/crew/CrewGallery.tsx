"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

interface TeamMember {
  image: string;
  name: string;
  roleId: string;
  taglineId: string;
  descriptionId: string;
  hobbyId: string;
  foodId: string;
}

export default function TeamCards() {
  const intl = useIntl();

  const members: TeamMember[] = [
    {
      image: "/images/Crew/carlos.png",
      name: "Augusto Sánchez",
      roleId: "crew.gallery.cards.augusto.role",
      taglineId: "crew.gallery.cards.augusto.tagline",
      descriptionId: "crew.gallery.cards.augusto.description",
      hobbyId: "crew.gallery.cards.augusto.hobby",
      foodId: "crew.gallery.cards.augusto.food",
    },
    {
      image: "/images/Crew/Camile.png",
      name: "Camile Vöngerbach",
      roleId: "crew.gallery.cards.camile.role",
      taglineId: "crew.gallery.cards.camile.tagline",
      descriptionId: "crew.gallery.cards.camile.description",
      hobbyId: "crew.gallery.cards.camile.hobby",
      foodId: "crew.gallery.cards.camile.food",
    },
    {
      image: "/images/Crew/Gianni.png",
      name: "Gianni Percolasso",
      roleId: "crew.gallery.cards.gianni.role",
      taglineId: "crew.gallery.cards.gianni.tagline",
      descriptionId: "crew.gallery.cards.gianni.description",
      hobbyId: "crew.gallery.cards.gianni.hobby",
      foodId: "crew.gallery.cards.gianni.food",
    },
    {
      image: "/images/Crew/laura.png",
      name: "Sihiro Kai",
      roleId: "crew.gallery.cards.laura.role",
      taglineId: "crew.gallery.cards.laura.tagline",
      descriptionId: "crew.gallery.cards.laura.description",
      hobbyId: "crew.gallery.cards.laura.hobby",
      foodId: "crew.gallery.cards.laura.food",
    },
    {
      image: "/images/Crew/andres.png",
      name: "Andrés Silva",
      roleId: "crew.gallery.cards.andres.role",
      taglineId: "crew.gallery.cards.andres.tagline",
      descriptionId: "crew.gallery.cards.andres.description",
      hobbyId: "crew.gallery.cards.andres.hobby",
      foodId: "crew.gallery.cards.andres.food",
    },
    {
      image: "/images/Crew/claudia.png",
      name: "Claudia Torres",
      roleId: "crew.gallery.cards.claudia.role",
      taglineId: "crew.gallery.cards.claudia.tagline",
      descriptionId: "crew.gallery.cards.claudia.description",
      hobbyId: "crew.gallery.cards.claudia.hobby",
      foodId: "crew.gallery.cards.claudia.food",
    },
    {
      image: "/images/Crew/diego.png",
      name: "Diego Martín",
      roleId: "crew.gallery.cards.diego.role",
      taglineId: "crew.gallery.cards.diego.tagline",
      descriptionId: "crew.gallery.cards.diego.description",
      hobbyId: "crew.gallery.cards.diego.hobby",
      foodId: "crew.gallery.cards.diego.food",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 py-6 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "crew.gallery.header.title" })}
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/85 mt-2 max-w-6xl mx-auto leading-snug">
          {intl.formatMessage({ id: "crew.gallery.header.subtitle" })}
        </h3>
      </div>

      <div className="flex flex-col gap-y-24">
        <div className="flex justify-center gap-6 flex-wrap">
          {members.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ image, name, roleId, taglineId, descriptionId, hobbyId, foodId }: TeamMember) {
  const [hovered, setHovered] = useState(false);
  const intl = useIntl();
  const [firstName, lastName] = name.split(" ");

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group relative flex flex-col items-stretch max-w-[370px] w-full"
    >
      <div
        className="relative w-full aspect-[1/2] bg-gray-700 overflow-hidden rounded-2xl border-2 border-brand-purple transition-all duration-300"
        style={{ borderColor: hovered ? "#FFA500" : undefined, borderWidth: hovered ? "4px" : "2px" }}
      >
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ opacity: hovered ? 0.8 : 0 }}
          transition={{ duration: 1.0 }}
        />

        <motion.div
          className="absolute inset-x-0 bottom-0 z-20 p-4"
          animate={{ y: hovered ? 0 : 50, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base font-medium text-white/85 text-justify">
            {intl.formatMessage({ id: taglineId })}
          </p>
          <div className="inline-block mt-3 bg-gray-300/80 text-black font-bold text-sm px-4 py-2 rounded-xl">
            Hobbies: {intl.formatMessage({ id: hobbyId })} <br />
            Animales: {intl.formatMessage({ id: foodId })}
          </div>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed text-justify">
            {intl.formatMessage({ id: descriptionId })}
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-8 text-center z-30"
          animate={{ y: hovered ? -335 : 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <h4 className="text-5xl font-bold tracking-[.25em] uppercase text-white drop-shadow-lg">
            {firstName}
          </h4>
          <h5 className="text-3xl font-semibold tracking-[.35em] uppercase text-white/90 mt-1">
            {lastName}
          </h5>
          <div className="mt-3 max-w-[95%] mx-auto">
            <p className={`text-xl tracking-widest uppercase font-bold text-center ${hovered ? "text-brand-orange" : "text-brand-blue"}`}>
              {intl.formatMessage({ id: roleId })}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-5"
      >
        <a
          href="/contacto"
          className="inline-block w-full text-center px-6 py-3 rounded-2xl bg-gray-200 text-brand-purple font-semibold transition-all duration-300 hover:bg-brand-orange hover:text-white hover:scale-102"
        >
          {intl.formatMessage({ id: "crew.gallery.cta" }, { name })}
        </a>
      </motion.div>
    </motion.div>
  );
}

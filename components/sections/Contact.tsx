"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "../tanino/taninoData";

const ease = [0.22, 1, 0.36, 1] as const;

const contactCards = [
  {
    icon: MessageCircle,
    title: "COMMANDER EN LIGNE",
    description: "Réservez ou demandez nos produits directement sur WhatsApp.",
    action: "DISCUTEZ SUR WHATSAPP",
    href: "https://api.whatsapp.com/message/6ZRE6RBWLT4NB1?autoload=1&app_absent=0&utm_source=ig",
  },
  {
    icon: Phone,
    title: "APPELEZ-NOUS",
    description: "Notre équipe est disponible pour répondre à vos questions.",
    action: "APPELER HAIR BRASIL",
    href: `tel:+${WHATSAPP_NUMBER}`,
  },
  {
    icon: MapPin,
    title: "RENDEZ-NOUS VISITE",
    description: "Retrouvez Hair Brasil dans notre espace professionnel.",
    action: "VOIR L'ITINÉRAIRE",
    href: "https://maps.app.goo.gl/xHbnezX4ydwpvStg6",
  },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="bg-[#faf9f7] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* MAIN LAYOUT */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-14 xl:grid-cols-[1fr_0.9fr]">
          {/* ================================================= */}
          {/* LEFT — TITLE + MAP */}
          {/* ================================================= */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col"
          >
            {/* LABEL */}
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-black/45">
              HAIR BRASIL / CONTACTEZ-NOUS
            </p>

            {/* TITLE */}
            <h2 className="max-w-[720px] text-[clamp(3.2rem,6.5vw,6.5rem)] font-light leading-[0.86] tracking-[-0.065em] text-black">
              PARLONS-EN.
              <br />
              <span className="font-serif italic">
                NOUS SOMMES À VOTRE ÉCOUTE.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[430px] text-sm leading-6 text-black/55 sm:text-[15px]">
              Vous recherchez des soins capillaires professionnels, un conseil
              ou souhaitez rendre visite à Hair Brasil ? Notre équipe est à
              votre écoute.
            </p>

            {/* MAP */}
            <div
              id="location"
              className="relative mt-8 h-[280px] overflow-hidden rounded-[20px] border border-black/10 bg-[#e8e1d7] sm:h-[320px] lg:mt-10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5824.972870054622!2d-9.580859125163302!3d30.401648674745587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7dc460ea285%3A0x6be1890bf2bd9e3d!2sAcademy%20hair%20brasil!5e1!3m2!1sfr!2sma!4v1786297760227!5m2!1sfr!2sma"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                loading="lazy"
                title="Emplacement de Hair Brasil"
              />

              {/* MAP OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

              {/* LOCATION LABEL */}
              <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/85 px-4 py-2 backdrop-blur-md">
                <p className="text-[8px] uppercase tracking-[0.3em] text-black/65">
                  HAIR BRASIL
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT — CONTACT CARDS */}
          {/* ================================================= */}
          <div className="flex flex-col gap-3 lg:pt-[34px]">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  target="_blanc"
                  href={card.href}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="group rounded-[18px] border border-black/10 bg-white/65 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white sm:p-6"
                >
                  {/* TOP ROW */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f8f5f0] text-[#76543f]">
                      <Icon className="h-[17px] w-[17px]" strokeWidth={1.4} />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-5">
                    <h3 className="text-[19px] font-light tracking-[-0.025em] text-black sm:text-[21px]">
                      {card.title}
                    </h3>

                    <p className="mt-1.5 max-w-[450px] text-[13px] leading-5 text-black/50 sm:text-sm">
                      {card.description}
                    </p>
                  </div>

                  {/* ACTION */}
                  <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#76543f] px-3.5 py-2 text-[8px] font-medium uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:bg-black">
                    {card.action}

                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

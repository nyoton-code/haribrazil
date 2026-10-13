"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TaninoHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07131a]">
      {/* ───────────── HERO IMAGE ───────────── */}
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{
          duration: 2.4,
          ease,
        }}
      >
        <Image
          src="/images/tanino/hero.jpg"
          alt="Collection professionnelle Tanino Technique de Hair Brasil"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[58%_center]
            sm:object-[56%_center]
            lg:object-center
          "
        />
      </motion.div>

      {/* ───────────── CINEMATIC OVERLAYS ───────────── */}

      {/* Overall contrast */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Darker reading area on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      {/* Subtle cinematic top/bottom depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* ───────────── CONTENT ───────────── */}

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pt-16 md:px-12 lg:px-20">
          <div className="max-w-[470px] text-left text-white">
            {/* COLLECTION LABEL */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease,
              }}
              className="
                mb-5
                text-[8px]
                uppercase
                tracking-[0.48em]
                text-white/60
                sm:text-[9px]
              "
            >
              Hair Brasil — Collection professionnelle
            </motion.p>

            {/* TITLE */}
            <div className="overflow-hidden">
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 55 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease,
                }}
                className="
                  text-[2.8rem]
                  font-extralight
                  leading-[0.9]
                  tracking-[0.08em]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[4.4rem]
                "
              >
                Tanino
                <br />
                <span className="text-white/90">Technique</span>
              </motion.h1>
            </div>

            {/* SHORT EDITORIAL DESCRIPTION */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.85,
                ease,
              }}
              className="
                mt-6
                max-w-[330px]
                text-[10px]
                font-light
                leading-[1.8]
                tracking-wide
                text-white/70
                sm:text-xs
                md:text-sm
              "
            >
              Un protocole professionnel en trois étapes, conçu pour hydrater,
              nourrir et transformer la fibre capillaire.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                onClick={() => {
                  document.getElementById("TaninoCTA")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="mt-8 border border-white/30 px-7 py-3.5 text-[9px] uppercase tracking-[0.35em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black cursor-pointer"
              >
                Acheter le rituel
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───────────── COLLECTION ACCENT ───────────── */}

      <motion.div
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={reduceMotion ? undefined : { scaleX: 1 }}
        transition={{
          duration: 1.2,
          delay: 1.3,
          ease,
        }}
        style={{ transformOrigin: "left" }}
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-24
          bg-[#78b943]/80
          sm:w-32
        "
      />

      {/* ───────────── SCROLL INDICATOR ───────────── */}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
        className="absolute bottom-7 right-7 z-10 md:right-12"
      >
        <div className="flex items-center gap-4 text-white/40">
          <span className="text-[8px] uppercase tracking-[0.4em]">Défiler</span>

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scaleY: [1, 0.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-9 w-px bg-white/30"
          />
        </div>
      </motion.div>
    </section>
  );
}

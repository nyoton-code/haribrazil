"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CaviarHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/caviar/Herocaviar5.jpg"
          alt="Collection Black Caviar de Hair Brasil"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pt-20 md:px-12 lg:px-20">
          <div className="max-w-lg text-left text-white">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 text-[9px] uppercase tracking-[0.45em] text-white/60 md:text-[10px]"
            >
              Hair Brasil — Collection professionnelle
            </motion.p>

            {/* Title */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl font-extralight leading-[0.95] tracking-[0.12em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
              >
                BLACK
                <br />
                <span className="text-white/90">CAVIAR</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-sm text-xs font-light leading-relaxed tracking-wide text-white/70 md:text-sm"
            >
              Un rituel professionnel conçu pour nourrir, renforcer et révéler
              une brillance exceptionnelle.
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
                  document.getElementById("caviarcta")?.scrollIntoView({
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.8,
        }}
        className="absolute bottom-8 right-8 z-10 md:right-12"
      ></motion.div>
    </section>
  );
}

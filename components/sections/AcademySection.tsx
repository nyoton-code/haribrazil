"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AcademySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="academy"
      aria-labelledby="academy-heading"
      className="overflow-hidden bg-foreground py-24 text-white md:py-32 lg:py-40"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.06, ease: "easeOut" }}
              className="mb-6 text-[10px] uppercase tracking-[0.45em] text-white/50"
            >
              ACADEMY HAIR BRASIL
            </motion.p>

            <motion.h2
              id="academy-heading"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="text-4xl font-light leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              L&apos;EXPERTISE
              <br />
              <span className="font-serif italic">AU SERVICE DU GESTE.</span>
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-7 max-w-md text-sm leading-7 text-white/60 sm:text-base"
            >
              Des formations professionnelles pensées pour transmettre
              précision, technique et savoir-faire.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
              whileHover={{ x: 4, y: -2, scale: 1.01 }}
            >
              <Link
                href="#"
                className="group mt-9 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                DÉCOUVRIR L&apos;ACADEMY
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={shouldReduceMotion ? { scale: 1 } : { scale: 1.025 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 p-2"
          >
            <div className="relative h-130 overflow-hidden rounded-[22px] sm:h-160 lg:h-180">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <video
                // src="/images/salonvideo.mp4"
                src="https://res.cloudinary.com/f4crzod8/video/upload/v1791123496/salonvideo_gzg5mn.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Espace de formation de Hair Brasil Academy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-5 top-5 z-20 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/80">
                ACADEMY / 01
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
      className="overflow-hidden bg-black py-24 text-white md:py-32 lg:py-40"
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
              className="mb-6 text-[11px] uppercase tracking-[0.45em] text-white/60"
            >
              ACADEMY HAIR BRASIL
            </motion.p>

            <motion.h2
              id="academy-heading"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="text-4xl font-light leading-[0.9] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              WHERE EXPERTISE
              <br />
              <span className="font-serif italic">BECOMES ART.</span>
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-8 max-w-lg text-base leading-8 text-white/70 sm:text-lg"
            >
              Professional education for stylists who demand more from their
              craft.
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
                className="group mt-10 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                DISCOVER THE ACADEMY
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                src="/images/salonvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Hair Brasil Academy training environment"
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

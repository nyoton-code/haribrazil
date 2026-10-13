"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function TaninoTransformation() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f4f3ed] px-6 py-20 text-[#111] md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* ───────────── INTRO ───────────── */}

        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-[1fr_0.55fr] md:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="mb-5 text-[9px] uppercase tracking-[0.45em] text-black/40">
              Tanino · Transformation
            </p>

            <h2 className="max-w-3xl text-5xl font-light leading-[0.92] tracking-[-0.03em] md:text-6xl lg:text-[5.5rem]">
              La transformation.
              <br />
              <span className="italic text-black/50">
                visible dans les cheveux.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="max-w-sm text-xs font-light leading-[1.85] tracking-wide text-black/50 md:ml-auto md:text-sm"
          >
            De la texture naturelle des cheveux à une finition plus lisse et
            soignée : découvrez la transformation Tanino Technique.
          </motion.p>
        </div>

        {/* ───────────── BEFORE / AFTER ───────────── */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease,
          }}
          className="
            relative
            grid
            grid-cols-1
            overflow-hidden
            bg-[#e8e6df]
            sm:grid-cols-2
          "
        >
          {/* ───────────── BEFORE ───────────── */}

          <div className="group relative aspect-[4/5] overflow-hidden sm:aspect-[4/5]">
            <Image
              src="/images/tanino/before.jpg"
              alt="Avant le soin Tanino Technique"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="
                object-cover
                object-center
                transition-transform
                duration-[1400ms]
                ease-out
                group-hover:scale-[1.025]
              "
            />

            {/* subtle image treatment */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* label */}
            <div className="absolute left-5 top-5 md:left-7 md:top-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-white/60" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-white/80">
                  Avant
                </span>
              </div>
            </div>

            {/* bottom caption */}
            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
              <p className="text-[8px] uppercase tracking-[0.35em] text-white/55">
                Cheveux au naturel
              </p>
            </div>
          </div>

          {/* ───────────── CENTER DIVIDER ───────────── */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-0
              right-0
              top-1/2
              z-10
              h-px
              bg-white/30
              sm:bottom-0
              sm:left-1/2
              sm:right-auto
              sm:top-0
              sm:h-auto
              sm:w-px
            "
          />

          {/* ───────────── AFTER ───────────── */}

          <div className="group relative aspect-[4/5] overflow-hidden sm:aspect-[4/5]">
            <Image
              src="/images/tanino/after.jpg"
              alt="Après le soin Tanino Technique"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="
                object-cover
                object-center
                transition-transform
                duration-[1400ms]
                ease-out
                group-hover:scale-[1.025]
              "
            />

            {/* subtle image treatment */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            {/* label */}
            <div className="absolute left-5 top-5 md:left-7 md:top-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-white/60" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-white/80">
                  Après
                </span>
              </div>
            </div>

            {/* bottom caption */}
            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
              <p className="text-[8px] uppercase tracking-[0.35em] text-white/55">
                Tanino Technique
              </p>
            </div>
          </div>
        </motion.div>

        {/* ───────────── FOOTER LINE ───────────── */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-black/10
            pt-4
          "
        >
          <p className="text-[8px] uppercase tracking-[0.35em] text-black/35">
            Hair Brasil · Tanino Technique
          </p>

          <p className="hidden text-right text-[8px] uppercase tracking-[0.25em] text-black/30 sm:block">
            Avant · Après
          </p>
        </motion.div>
      </div>
    </section>
  );
}

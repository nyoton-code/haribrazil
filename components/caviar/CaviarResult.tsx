"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import type { PointerEvent } from "react";
import { motion } from "framer-motion";

export default function CaviarResult() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, percentage)));
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-14 md:grid-cols-[1fr_0.6fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-black/40 sm:mb-5">
              Le résultat
            </p>

            <h2 className="max-w-4xl font-serif text-4xl font-light leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              La beauté du cheveu,
              <br />
              <span className="italic text-black/60">révélée.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-sm text-xs font-light leading-[1.9] tracking-wide text-black/50 sm:text-sm md:ml-auto"
          >
            Trois étapes pour sublimer la fibre, révéler la brillance et
            retrouver une douceur incomparable.
          </motion.p>
        </div>

        {/* RESPONSIVE BEFORE / AFTER SLIDER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onLostPointerCapture={() => {
              isDragging.current = false;
            }}
            className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-sm bg-black sm:aspect-[4/3] lg:aspect-video"
            style={{ cursor: "ew-resize" }}
            role="slider"
            aria-label="Comparer le résultat avant et après le rituel Black Caviar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                setPosition((p) => Math.max(0, p - 5));
              }

              if (e.key === "ArrowRight") {
                setPosition((p) => Math.min(100, p + 5));
              }

              if (e.key === "Home") {
                setPosition(0);
              }

              if (e.key === "End") {
                setPosition(100);
              }
            }}
          >
            {/* AFTER IMAGE — FULL CONTAINER */}

            <Image
              src="/images/result/after.jpg"
              alt="Cheveux après le rituel Black Caviar"
              fill
              priority
              sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 96px), 1200px"
              className="pointer-events-none object-cover"
              draggable={false}
            />

            {/* BEFORE IMAGE — SAME SIZE, CLIPPED */}

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <Image
                src="/images/result/before.jpg"
                alt="Cheveux avant le rituel Black Caviar"
                fill
                sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 96px), 1200px"
                className="object-cover"
                draggable={false}
              />
            </div>

            {/* SUBTLE BEFORE OVERLAY */}

            <div
              className="pointer-events-none absolute inset-0 bg-black/10"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            />

            {/* BEFORE LABEL */}

            <div className="pointer-events-none absolute left-3 top-3 sm:left-6 sm:top-6 md:left-8 md:top-8">
              <div className="bg-white/95 px-3 py-2 backdrop-blur-sm sm:px-5 sm:py-2.5">
                <span className="text-[8px] uppercase tracking-[0.25em] text-black/70 sm:text-[9px] sm:tracking-[0.3em]">
                  Avant
                </span>
              </div>
            </div>

            {/* AFTER LABEL */}

            <div className="pointer-events-none absolute right-3 top-3 sm:right-6 sm:top-6 md:right-8 md:top-8">
              <div className="bg-white/95 px-3 py-2 backdrop-blur-sm sm:px-5 sm:py-2.5">
                <span className="text-[8px] uppercase tracking-[0.25em] text-black/70 sm:text-[9px] sm:tracking-[0.3em]">
                  Après
                </span>
              </div>
            </div>

            {/* SLIDER DIVIDER */}

            <div
              className="pointer-events-none absolute inset-y-0 z-10"
              style={{
                left: `${position}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/90" />

              {/* SLIDER HANDLE */}

              <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg sm:h-14 sm:w-14">
                <div className="flex items-center gap-1 text-black">
                  <span className="text-sm">‹</span>
                  <span className="text-[10px] tracking-widest">↔</span>
                  <span className="text-sm">›</span>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE INSTRUCTION */}

          <p className="mt-4 text-center text-[9px] uppercase tracking-[0.25em] text-black/40 sm:hidden">
            Faites glisser pour comparer
          </p>
        </motion.div>
      </div>
    </section>
  );
}

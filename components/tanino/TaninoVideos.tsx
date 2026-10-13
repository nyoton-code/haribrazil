"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CLOUD_NAME = "f4crzod8";

const items = [
  {
    number: "01",
    title: "PURIFIER",
    product: "PRE-TREATMENT SHAMPOO",
    videoId: "tanino_shampo_hlfdpx.mp4",
    poster: "/images/tanino/introshampo.png",
  },
  {
    number: "02",
    title: "RÉPARER",
    product: "CAVIAR PROTEIN",
    videoId: "tanino_protein_irgfwd.mp4",
    poster: "/images/tanino/introprotein.png",
  },
  {
    number: "03",
    title: "RÉVÉLER",
    product: "COCONUT OIL MASK",
    videoId: "tanino_mask_ovgm5t.mp4",
    poster: "/images/tanino/intromask.png",
  },
];

function cloudinaryVideoUrl(videoId: string, widthPx: number) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto,w_${widthPx}/${videoId}`;
}

/* ───────────────────────── DESKTOP: 3-card, 1 active video ───────────────────────── */

function DesktopTriptych() {
  const [activeIndex, setActiveIndex] = useState(1); // middle card active by default

  return (
    <div className="hidden gap-4 sm:grid sm:grid-cols-3 md:gap-5">
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[9/16] w-full cursor-pointer overflow-hidden bg-[#0a0a0a]"
          >
            {isActive ? (
              <video
                key={item.videoId}
                className="absolute inset-0 h-full w-full object-cover"
                src={cloudinaryVideoUrl(item.videoId, 480)}
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <Image
                src={item.poster}
                alt={item.product}
                fill
                sizes="(max-width: 1024px) 33vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Play affordance on inactive cards */}
            {!isActive && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/30 backdrop-blur-sm">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7L8 5Z" />
                  </svg>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.3em] text-white/50">
                  {item.number}
                </span>
                <div className="h-px w-8 bg-white/30" />
              </div>
              <p className="mt-3 text-[9px] uppercase tracking-[0.4em] text-white/60">
                {item.title}
              </p>
              <p className="mt-1.5 text-sm font-light tracking-wide text-white/90 md:text-base">
                {item.product}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ───────────────────────── MOBILE: single active video + swipe ───────────────────────── */

function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;

    if (delta < -threshold && activeIndex < items.length - 1) {
      setActiveIndex((i) => i + 1);
    } else if (delta > threshold && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }
  };

  const item = items[activeIndex];

  return (
    <div className="sm:hidden">
      <div
        className="relative aspect-[9/16] w-full overflow-hidden bg-[#0a0a0a]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={item.videoId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 h-full w-full object-cover"
            src={cloudinaryVideoUrl(item.videoId, 640)}
            poster={item.poster}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/50">
              {item.number}
            </span>
            <div className="h-px w-8 bg-white/30" />
          </div>
          <p className="mt-3 text-[9px] uppercase tracking-[0.4em] text-white/60">
            {item.title}
          </p>
          <p className="mt-1.5 text-sm font-light tracking-wide text-white/90">
            {item.product}
          </p>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher ${items[index].product}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── SECTION ───────────────────────── */

export default function TaninoVideos() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-white/40">
            Le rituel en mouvement
          </p>
          <h2 className="max-w-xl font-serif text-4xl font-light leading-[1.05] tracking-tight text-white md:text-5xl">
            Chaque étape,{" "}
            <span className="italic text-white/60">mise en lumière.</span>
          </h2>
        </motion.div>

        <DesktopTriptych />
        <MobileCarousel />
      </div>
    </section>
  );
}

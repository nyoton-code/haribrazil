"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface HeroSlide {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  location: string;
  cta: string;
  href: string;
}

interface SlideContentProps {
  slide: HeroSlide;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function SlideContent({ slide }: SlideContentProps) {
  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease }}
      className="relative h-dvh w-full overflow-hidden bg-black"
    >
      {/* IMAGE */}
      <motion.img
        src={slide.image}
        alt=""
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1.04 }}
        transition={{ duration: 1.4, ease }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />

      {/* CONTENT */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 text-center sm:px-6 sm:pt-12">
        <div className="w-full max-w-5xl">
          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="
              mb-6
              text-[clamp(1.15rem,5vw,2.25rem)]
              font-light
              italic
              leading-none
              tracking-[-0.025em]
              text-[#C5A98A]

              sm:mb-4
              md:mb-6
            "
          >
            {slide.subtitle}
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            className="
              flex
              items-center
              justify-center
              whitespace-nowrap
              text-[clamp(2.1rem,10vw,6rem)]
              font-black
              leading-[0.9]
              tracking-[0.04em]
              text-white

              sm:text-[clamp(2.8rem,9vw,6rem)]
              sm:tracking-[0.08em]

              md:tracking-[0.16em]
            "
          >
            <span className="mr-2 text-white/80 sm:mr-3">•</span>

            {slide.title}

            <span className="ml-2 text-white/80 sm:ml-3">•</span>
          </motion.h1>

          {/* LOCATION */}
          <motion.p
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.5, duration: 0.8, ease }}
            className="
              mt-6
              text-[8px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white/80

              sm:mt-5
              sm:text-[10px]
              sm:tracking-[0.38em]

              md:mt-8
              md:text-lg
              md:tracking-[0.55em]
             hidden md:block
            "
          >
            {slide.location}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease }}
            className="mt-7 sm:mt-8 md:mt-14"
          >
            <Link
              href={slide.href}
              className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-white/30
      bg-black/10
      px-5
      py-3
      text-[9px]
      font-medium
      uppercase
      tracking-[0.28em]
      text-white
      backdrop-blur-md
      transition-all
      duration-500

      hover:border-white
      hover:bg-white
      hover:text-black

      sm:px-6
      sm:py-3.5
      sm:text-[10px]

      md:px-7
      md:py-4
      md:text-[11px]
    "
            >
              {slide.cta}

              <ArrowUpRight
                className="
        h-3.5
        w-3.5
        transition-transform
        duration-500
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5

        md:h-4
        md:w-4
      "
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

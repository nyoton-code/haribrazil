"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Panel {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  button: string;
  image: string;
  href: string;
}

const panels: Panel[] = [
  {
    eyebrow: "ACADEMY HAIR BRASIL",
    title: "LE SAVOIR-FAIRE",
    accent: "TRANSMIS.",
    description:
      "Des formations professionnelles guidées par la précision et l’expertise.",
    button: "Découvrir l’Academy",
    image: "/images/salon.jpg",
    href: "/salon",
  },
  {
    eyebrow: "HAIR BRASIL · CAVIAR",
    title: "LE SOIN",
    accent: "ÉLEVÉ.",
    description:
      "Une collection professionnelle pensée pour révéler la beauté du cheveu.",
    button: "Découvrir Caviar",
    image: "/images/product1.jpg",
    href: "/shop",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const panelAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export default function SplitShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-foreground px-5 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="mb-10 md:mb-14"
        >
          <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.4em] text-white/45">
            HAIR BRASIL / L’UNIVERS
          </p>

          <h2 className="max-w-4xl text-[clamp(2.7rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.055em] text-white">
            L’expertise,
            <br />
            <span className="font-serif italic">à chaque geste.</span>
          </h2>
        </motion.div>

        {/* PANELS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            flex
            flex-col
            overflow-hidden
            rounded-[26px]
            border
            border-white/10
            bg-black
            md:h-[680px]
            md:flex-row
          "
        >
          {panels.map((panel, index) => {
            const active = hovered === index;

            return (
              <motion.article
                key={panel.title}
                variants={panelAnimation}
                animate={{
                  flex: hovered === null ? 1 : active ? 1.08 : 0.92,
                }}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="
                  group
                  relative
                  min-h-[520px]
                  flex-1
                  overflow-hidden
                  sm:min-h-[580px]
                  md:min-h-0
                "
              >
                {/* IMAGE */}
                <motion.div
                  animate={{
                    scale: active ? 1.045 : 1,
                  }}
                  transition={{
                    duration: 1.4,
                    ease,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* LUXURY OVERLAY */}
                <motion.div
                  animate={{
                    opacity: active ? 0.88 : 0.76,
                  }}
                  transition={{ duration: 0.7 }}
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/25
                    to-black/5
                  "
                />

                {/* DIVIDER */}
                {index === 0 && (
                  <div className="absolute bottom-10 right-0 top-10 hidden w-px bg-white/15 md:block" />
                )}

                {/* CONTENT */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    justify-end
                    p-6
                    sm:p-8
                    md:p-10
                    lg:p-12
                  "
                >
                  <div className="max-w-[520px]">
                    {/* EYEBROW */}
                    <motion.p
                      animate={{
                        opacity: active ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.5 }}
                      className="
                        mb-5
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.4em]
                        text-white/65
                        sm:text-[9px]
                      "
                    >
                      {panel.eyebrow}
                    </motion.p>

                    {/* TITLE */}
                    <h3
                      className="
                        text-[clamp(2.8rem,6vw,5.5rem)]
                        font-light
                        leading-[0.86]
                        tracking-[-0.055em]
                        text-white
                      "
                    >
                      {panel.title}
                      <br />
                      <span className="font-serif italic">{panel.accent}</span>
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-6
                        max-w-[390px]
                        text-xs
                        leading-6
                        text-white/65
                        sm:text-sm
                        sm:leading-7
                      "
                    >
                      {panel.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={panel.href}
                      className="
                        group/button
                        mt-7
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/30
                        bg-white/5
                        px-5
                        py-3
                        text-[8px]
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
                        sm:text-[9px]
                      "
                    >
                      {panel.button}

                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-500
                          group-hover/button:translate-x-0.5
                          group-hover/button:-translate-y-0.5
                        "
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

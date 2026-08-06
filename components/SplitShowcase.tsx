"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const panels = [
  {
    title: "SALON",
    description:
      "Transform your hair with luxury styling, color, and professional care.",
    button: "Explore Salon",
    image: "/images/salon.jpg",
    href: "/salon",
  },
  {
    title: "HOME",
    description:
      "Discover professional products to maintain your salon results at home.",
    button: "Shop Products",
    image: "/images/product1.jpg",
    href: "/shop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export default function SplitShowcase() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  const handlePanelBlur = (
    event: React.FocusEvent<HTMLElement>,
    index: number,
  ) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setHoveredPanel(null);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="relative mx-auto flex h-screen w-full max-w-[1800px] flex-col px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="flex h-full flex-col gap-6 overflow-hidden rounded-[32px] bg-black md:flex-row">
        {panels.map((panel, index) => {
          const isActive = hoveredPanel === index;
          const flexValue = hoveredPanel === null ? 1 : isActive ? 1.857 : 1;

          return (
            <motion.article
              key={panel.title}
              role="group"
              tabIndex={0}
              aria-label={`${panel.title} showcase panel`}
              onMouseEnter={() => setHoveredPanel(index)}
              onMouseLeave={() => setHoveredPanel(null)}
              onFocus={() => setHoveredPanel(index)}
              onBlur={(event) => handlePanelBlur(event, index)}
              style={{ flex: flexValue }}
              className="relative flex min-h-[45vh] flex-1 flex-col justify-end overflow-hidden bg-zinc-950 transition-all duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <motion.div
                className="absolute inset-0 overflow-hidden"
                animate={{ scale: isActive ? 1.08 : 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
              >
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/24 to-transparent transition-colors duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:from-black/95" />

              <div className="relative z-10 flex flex-col gap-6 p-6 pb-8 md:p-10">
                <div className="max-w-[320px] text-white/80">
                  <h2 className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.05em] text-white transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-2">
                    {panel.title}
                  </h2>
                  <p className="mt-4 max-w-[320px] text-sm leading-6 text-white/80 sm:text-base">
                    {panel.description}
                  </p>
                </div>

                <Link
                  href={panel.href}
                  aria-label={panel.button}
                  className="inline-flex w-fit rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black group-hover:scale-105"
                >
                  {panel.button}
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}

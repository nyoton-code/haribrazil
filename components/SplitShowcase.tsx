"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const panels = [
  {
    eyebrow: "HAIR BRASIL",
    title: "Salon Experience",
    description:
      "Experience bespoke hair transformations, precision color techniques, and luxury treatments crafted by certified professionals.",
    button: "Discover Salon",
    image: "/images/cavar3.jpg",
    href: "/salon",
  },
  {
    eyebrow: "PROFESSIONAL COLLECTION",
    title: "Luxury Home Care",
    description:
      "Maintain salon-quality results with our exclusive professional formulas inspired by Brazilian beauty expertise.",
    button: "Explore Products",
    image: "/images/product1.jpg",
    href: "/shop",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cubicBezierEase = [0.22, 1, 0.36, 1] as any;

const panelAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: cubicBezierEase,
    },
  },
};

export default function SplitShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1700px] px-5">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-white/40">
            EXPERIENCE HAIR BRASIL
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-light leading-tight text-white md:text-7xl">
            Beauty begins with
            <br />
            <span className="italic font-serif">exceptional craftsmanship</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex h-[800px] flex-col overflow-hidden rounded-[36px] border border-white/10 bg-zinc-950 md:flex-row"
        >
          {panels.map((panel, index) => {
            const active = hovered === index;
            const flex = hovered === null ? 1 : active ? 1.8 : 1;

            return (
              <motion.article
                key={panel.title}
                variants={panelAnimation}
                style={{ flex }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex overflow-hidden transition-all duration-700"
              >
                {/* IMAGE */}
                <motion.div
                  animate={{ scale: active ? 1.08 : 1 }}
                  transition={{ duration: 1, ease: cubicBezierEase }}
                  className="absolute inset-0"
                >
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </motion.div>

                {/* LUXURY OVERLAY */}
                <motion.div
                  animate={{
                    background: active
                      ? "linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.30), rgba(0,0,0,.08))"
                      : "linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.25), rgba(0,0,0,.05))",
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                />

                <div className="absolute right-0 top-10 hidden h-[85%] w-px bg-white/10 md:block" />

                {/* Content */}
                <div className="relative z-20 flex h-full flex-col justify-between p-8 md:p-12">
                  <div>
                    <motion.p
                      animate={{
                        y: active ? -4 : 0,
                        opacity: active ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 text-[11px] uppercase tracking-[0.45em] text-white/60"
                    >
                      {panel.eyebrow}
                    </motion.p>
                  </div>

                  <div className="max-w-md">
                    <motion.h3
                      animate={{ y: active ? -12 : 0 }}
                      transition={{ duration: 0.6, ease: cubicBezierEase }}
                      className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em] text-white"
                    >
                      {panel.title}
                    </motion.h3>

                    <motion.p
                      animate={{
                        opacity: active ? 1 : 0.88,
                        y: active ? -6 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className="mt-8 max-w-sm text-[15px] leading-8 text-white/70"
                    >
                      {panel.description}
                    </motion.p>

                    <motion.div
                      animate={{ y: active ? -8 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="mt-10 flex items-center gap-6"
                    >
                      <Link
                        href={panel.href}
                        className="group/button inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-xs uppercase tracking-[0.35em] text-white backdrop-blur-xl transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
                      >
                        {panel.button}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                      </Link>
                    </motion.div>

                    <AnimatePresence>
                      {active && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.45 }}
                          className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/40"
                        >
                          <div className="h-px w-12 bg-white/30" />
                          Premium Brazilian Beauty
                        </motion.div>
                      )}
                    </AnimatePresence>
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
